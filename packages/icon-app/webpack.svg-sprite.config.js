// @ts-check

const path  = require('node:path');
const config = require('./webpack.config');

const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
  ...config,
  mode: 'production',
  entry: './src/index.svg-sprite.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/svg-sprite'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    ...(config.plugins ?? []),
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: 'atomic', // or 'merged'
    }),
  ],
};
