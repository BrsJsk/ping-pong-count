const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

const PUBLIC_PATH = 'https://brave-goldberg-d400c5.netlify.com/';

module.exports = {
  mode: 'production',
  entry: './app.js',
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: PUBLIC_PATH,
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
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules'],
            },
          }, // compiles Sass to CSS, using Node Sass by default
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
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      title: 'Ping Pong app',
      template: 'index.html',
    }),
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
