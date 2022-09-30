const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const javascriptAndReactRule = {
  test: /\.[jt]sx?$/,
  use: 'babel-loader',
  exclude: /node_modules/,
};

const sassRule = {
  test: /\.scss$/,
  use: ['style-loader', 'css-loader', 'sass-loader'],
};
const cssRule = {
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
};

const configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '/api': '/' },
        changeOrigin: true,
      },
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [javascriptAndReactRule, sassRule, cssRule],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
  ],
};

module.exports = configuration;
