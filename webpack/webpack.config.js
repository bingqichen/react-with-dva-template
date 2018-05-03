const webpack = require('webpack');
const HappyPack = require('happypack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { theme } = require('../package.json');
const manifest = require('../dist/vendor/manifest.json');

module.exports = () => {
  const config = {
    module: {
      rules: [
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['happypack/loader?id=css']
          })
        },
        {
          test: /\.less$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: ['happypack/loader?id=less']
          })
        },
        {
          test: /\.js[x]?$/,
          use: ['happypack/loader?id=jsx'],
          exclude: /node_modules/
        },
        {
          test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          use: 'file-loader?name=fonts/[name].[ext]'
        },
        {
          test: /\.(png|jpe?g?)(\?[a-z0-9=&.]+)?$/,
          use: 'file-loader?name=images/[name].[ext]'
        }
      ]
    },
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest
      }),
      new HappyPack({
        id: 'jsx',
        threads: 4,
        loaders: ['babel-loader']
      }),
      new HappyPack({
        id: 'css',
        threads: 4,
        loaders: [
          'css-loader?importLoaders=1',
          'postcss-loader'
        ]
      }),
      new HappyPack({
        id: 'less',
        threads: 4,
        loaders: [
          'css-loader?importLoaders=1',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme
            }
          }
        ]
      })
    ],
    resolve: {
      extensions: ['.js', '.jsx', '.less']
    }
  };

  if (process.env.NODE_ENV === 'development') {
    config.module.rules[0].loader = ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['happypack/loader?id=css']
    }));
    config.module.rules[1].loader = ['css-hot-loader'].concat(ExtractTextPlugin.extract({
      fallback: 'style-loader',
      use: ['happypack/loader?id=less']
    }));
  }

  return config;
};
