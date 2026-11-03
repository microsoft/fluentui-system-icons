// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { makeConfigs } = require('./make-configs');

module.exports = makeConfigs(
  { name: 'webpack', CssExtractPlugin: MiniCssExtractPlugin, HtmlPlugin: HtmlWebpackPlugin },
  { isDevServer: process.env.WEBPACK_SERVE === 'true' },
);
