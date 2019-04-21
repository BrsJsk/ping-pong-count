const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const PUBLIC_PATH = '/';

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: ['./node_modules'],
            },
          },
        ],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Development',
      template: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new SWPrecacheWebpackPlugin(
      {
        cacheId: 'ping-pong-count-app-id',
        dontCacheBustUrlsMatching: /\.\w{8}\./,
        filename: 'service-worker.js',
        minify: true,
        navigateFallback: `${PUBLIC_PATH}/index.html`,
        staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],
      },
    ),
    new WebpackPwaManifest({
      name: 'Ping Pong count',
      short_name: 'ping-pong-count',
      description: 'App for tracking ping pong score',
      lang: 'en-US',
      start_url: '/',
      display: 'standalone',
      theme_color: '#9d8faa',
      icons: [
        {
          src: 'public/icon.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'public/icon512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      background_color: '#9d8faa',
    }),
  ],
};
