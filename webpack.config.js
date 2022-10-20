/**
 * Environment variables used in this configuration:
 * NODE_ENV
 */

require('dotenv').config();
const path = require('path');

/* Livre Webpack for beginner   */
// extract css to file plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// minimize css
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// javascript minimize when we add a minimizer in our code
const TerserJSPlugin = require('terser-webpack-plugin');

/**
 * flag Used to check if the environment is production or not
 */
const isProduction = (process.env.NODE_ENV === 'production');

module.exports = {
  watch: true,
  mode: process.env.NODE_ENV,
  devtool: 'eval-cheap-module-source-map',
  entry: './src/index.js',
  resolve: {
    fallback: {
      url: false,
      http: false,
      crypto: false,
      'crypto-browserify': false,
      stream: false,
      http: false,
      https: false,
      tls: false,
      net: false,
      zlib: false,
      querystring: false,
      timers: false,
      fs: false

    }
  },
  output: {
    filename: 'application.js',
    path: path.resolve(__dirname, 'public/js'),
    assetModuleFilename: 'images/[hash][ext][query]'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin()]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'application.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('autoprefixer')({
                overrideBrowserslist: ['last 3 versions', 'ie >9']
              })]
            }
          }
        }]// css loaders
      },
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 1 } }, {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('autoprefixer')({
                overrideBrowserslist: ['last 3 versions', 'ie >9']
              })]
            }
          }
        }, 'sass-loader']// scss sass loaders
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        type: 'asset/resource'
        /* use: ['file-loader'
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: '[name].[hash:7].[ext]'
                        },
                    },
                ], */
      }
    ]
  }
};
