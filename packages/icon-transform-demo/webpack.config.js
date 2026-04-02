// @ts-check
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');
const {
  default: FluentUIReactIconsFontSubsettingPlugin,
} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');
const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset',
      },
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: '[name]-[contenthash][ext]',
        },
      },
    ],
  },
  optimization: {
    usedExports: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Fluent React Icons — Transform Demo',
    }),
    new FluentUIReactIconsFontSubsettingPlugin(),
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: 'merged',
    }),
  ],
};
