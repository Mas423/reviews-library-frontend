const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');
const path = require('path');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  watch: true,

  module: {},
  devServer: {
    hot: true,
    open: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
});
