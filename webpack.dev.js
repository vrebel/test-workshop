const path = require('path');
const webpack =  require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
        path: PATHS.dist
    },
    devServer:{
        port: 9000,
        hot: true,
        compress: true,
        noInfo: true,
    },
    devtool: 'inline-source-map',
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
                test: /\.(sass|scss)$/,
                use: ['style-loader','css-loader','postcss-loader', 'fast-sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options:{
                        limit: 10000,
                        name: '[name]-[hash:6].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'template.html'
        }),
        
    ]

};