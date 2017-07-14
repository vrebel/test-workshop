const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS  = {
    src: path.join(__dirname,'src'),
    dist: path.join(__dirname, 'dist')
};

module.exports = {
    entry: {
        main: path.resolve(PATHS.src,'js','main.js')
    },
    output: {
        filename: '[name].bundle.js',
        path: PATHS.dist,
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', 
                            options: { 
                                importLoaders: 2,
                                url: true
                            }
                        },
                        'postcss-loader',
                        'fast-sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            limit: 10000,
                            name: '[name].[ext]'
                        }
                    },
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        new ExtractTextPlugin({
            filename: 'styles.css'
        }),
    ]
};