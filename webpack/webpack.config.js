const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const { theme } = require(path.join(__dirname, '../package.json'));

module.exports = {
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        // use: [
        //   'style-loader',
        //   'css-loader?importLoaders=1',
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: [
        //         autoprefixer({
        //           browsers: ['> 1%', 'ie >= 9']
        //         })
        //       ]
        //     }
        //   }
        // ]
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['> 1%', 'ie >= 9']
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        // use: [
        //   'style-loader',
        //   'css-loader?importLoaders=1',
        //   {
        //     loader: 'postcss-loader',
        //     options: {
        //       plugins: [
        //         autoprefixer({
        //           browsers: ['> 1%', 'ie >= 9']
        //         })
        //       ]
        //     }
        //   },
        //   'less-loader'
        // ]
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?importLoaders=1',
            {
              loader: 'postcss-loader',
              options: {
                plugins: [
                  autoprefixer({
                    browsers: ['> 1%', 'ie >= 9']
                  })
                ]
              }
            },
            {
              loader: 'less-loader',
              options: {
                modifyVars: theme
              }
            }
          ]
        })
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require(path.join(__dirname, '../dist/vendor/manifest.json'))
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.less']
  }
};
