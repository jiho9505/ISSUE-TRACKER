const { merge } = require('webpack-merge');
const commonWebpack = require('./webpack.config.common');
const Dotenv = require('dotenv-webpack');

module.exports = merge(commonWebpack, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: '../build',
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: '.env.dev',
    }),
  ],
});
