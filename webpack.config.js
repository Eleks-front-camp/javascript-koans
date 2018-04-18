const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const DIST = './dist';
const SRC = './src';

module.exports = {
  mode: 'development',
  entry: {
    app: SRC + '/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: DIST
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, DIST)
  },
  plugins: [
    new CleanWebpackPlugin([DIST]),
    new HtmlWebpackPlugin({
      title: 'Test Koans'
    })
  ],
};