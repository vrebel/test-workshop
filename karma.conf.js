var webpackConfig = require('./webpack.dev.js');

module.exports = function(config) {
    const tests = 'tests/**/*.test.js';
    const coverage = 'src/js/**/*.js';

    process.env.BABEL_ENV = 'karma';

    config.set({

        webpack: webpackConfig,


        webpackMiddleware: {
            noInfo: true,
            stats: 'errors-only'
        },

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            {
                pattern: tests
            },
            {
                pattern: coverage
            }
        ],

        exclude: [],

        preprocessors: {
            [tests]: ['webpack'],
            [coverage]: ['webpack']
        },

        reporters: ['mocha', 'coverage'],

        coverageReporter: {
            dir: 'build',
            reporters: [
                {
                    type: 'html'
                }
            ],
            // check: {
            //     global: {
            //         statements: 50,
            //         branches: 50,
            //         functions: 90,
            //         lines: 50,
            //         excludes: [
            //             'foo/bar/**/*.js'
            //         ]
            //     },
            //     each: {
            //         statements: -2,
            //         branches: -2,
            //         functions: -2,
            //         lines: -2,
            //     }
            // }
        },

        port: 9876,

        colors: true,

        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,

        autoWatch: true,

        browsers: ['Chrome'], //, 'Firefox', 'Chrome', 'PhantomJS', 'ChromeHeadless'],

        singleRun: false,

        concurrency: Infinity
    });
};