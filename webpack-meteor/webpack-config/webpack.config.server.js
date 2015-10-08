var path = require('path');
var webpack = require('webpack');
var WebpackOnBuildPlugin = require('on-build-webpack');
var fs = require('fs');

module.exports = {
    target: 'node',
    entry: [
        'regenerator/runtime',
        '../../src/server/index.ts',
    ],
    output: {
        path: path.resolve(__dirname + '/../meteor-dist/server'),
        filename: 'server.bundle.js',
        publicPath: '/client/',
    },
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.jsx', '.css'],
        alias: {
            app: path.join(__dirname, '../app'),
        },
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel?stage=0',
                exclude: /node_modules|lib/,
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|lib/,
            },
        ],
    },
    plugins: [
        new WebpackOnBuildPlugin(function (stats) {
            //fs.rename(
            //    path.resolve(__dirname + '/../meteor-dist/public/client/client.bundle.min.js'),
            //    path.resolve(__dirname + '/../meteor-dist/client/client.bundle.min.js')
            //);
        }),
    ]
};
