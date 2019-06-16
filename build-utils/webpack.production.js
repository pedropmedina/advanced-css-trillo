/* eslint-disable no-console */
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env =>
  console.log({ mode: env.mode }) || {
    devtool: 'hidden-source-map',
    optimization: {
      minimizer: [new OptimizeCSSPlugin(), new TerserPlugin()]
    }
  };
