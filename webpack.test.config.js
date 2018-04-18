const path = require('path');

const hostname = 'localhost';
const port = 8081;

module.exports = {
  mode: 'development',
  entry: 'mocha-loader!./src/__tests__/index.js',
  output: {
    filename: 'test.build.js',
    path: path.resolve(__dirname, 'tests/'),
    publicPath: 'http://' + hostname + ':' + port + '/tests'
  },
  devServer: {
    host: hostname,
    port: port
  }
};