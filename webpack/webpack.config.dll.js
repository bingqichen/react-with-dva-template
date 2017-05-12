const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['babel-polyfill', 'react', 'react-dom', 'dva'],
  },
  output: {
    path: path.join(__dirname, '../dist/vendor/'),
    filename: '[name].min.js',
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, '../dist/vendor/manifest.json'),
      name: '[name]',
      context: __dirname
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: false,
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    })
  ]
};
