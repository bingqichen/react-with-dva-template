const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const WebpackVersionPlugin = require('webpack-version-plugin');

const webpackBaseConfig = require('./webpack.config')();

module.exports = merge(webpackBaseConfig, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../src/app')
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: 'js/[name].js',
    publicPath: process.env.BETA === 'true' ? '//your_cdn_path/beta/project_name/' : '//your_cdn_path/release/project_name/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BETA': JSON.stringify(process.env.BETA)
    }),
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: false,
      allChunks: true
    }),
    // new webpack.LoaderOptionsPlugin({
    //   minimize: true,
    //   debug: false
    // }),
    new CleanWebpackPlugin(['dist/css', 'dist/js'], { root: path.resolve() }),
    new WebpackVersionPlugin({
      cb: (hashMap) => {
        console.log(hashMap);
      }
    })
  ]
});
