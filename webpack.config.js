const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');

const PATHS = {
    source: path.join(__dirname, 'source'),
    build: path.join(__dirname, 'build')
};

module.exports = function(env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass()
        ]);
    }
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/index.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/index.pug'
            })
        ]
    },
    pug()
]);

const developmentConfig  = {
    devServer: {
        stats: 'errors-only'
    }
};