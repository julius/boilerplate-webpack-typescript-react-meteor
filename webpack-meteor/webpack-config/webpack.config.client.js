var path = require('path');
var webpack = require('webpack');
var WebpackOnBuildPlugin = require('on-build-webpack');
var fs = require('fs');

module.exports = {
    entry: [
        'regenerator/runtime',
        '../../src/client/index.ts',
    ],
    output: {
        path: path.resolve(__dirname + '/../meteor-dist/public/client'),
        filename: 'client.bundle.min.js',
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
                loader: 'babel',
                exclude: /node_modules|lib/,
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules|lib/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader?sourceMap'
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&mimetype=image/svg+xml" },
        ],
    },
    plugins: [
        new webpack.PrefetchPlugin("react"),
        new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment"),
        new WebpackOnBuildPlugin(function (stats) {
            fs.rename(
                path.resolve(__dirname + '/../meteor-dist/public/client/client.bundle.min.js'),
                path.resolve(__dirname + '/../meteor-dist/client/client.bundle.min.js')
            );
        }),
    ]
};
