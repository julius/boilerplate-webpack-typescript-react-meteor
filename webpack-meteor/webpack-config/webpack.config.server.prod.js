var webpack = require('webpack');
var config = require('./webpack.config.server.js');
var _ = require('lodash');

var config = module.exports = _.assign(_.cloneDeep(config), {
  plugins: (config.plugins || []).concat([
    new webpack.BannerPlugin('var require = Npm.require;\n', {raw: true}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
  ]),
});