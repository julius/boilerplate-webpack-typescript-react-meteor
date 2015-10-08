var config = require('./webpack.config.client.js');
var _ = require('lodash');

module.exports = _.assign(config, {
    devtool: 'source-map',
    output: _.assign(config.output, {
        pathinfo: true,
    }),
    module: _.assign(config.module, {
    }),
});
