// @ts-check

import path from 'node:path';
import { createRequire } from 'node:module';
import config from './webpack.config.js';
import SvgChunkWebpackPlugin from 'svg-chunk-webpack-plugin';

const require = createRequire(import.meta.url);
const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');



const __dirname = import.meta.dirname;

const spriteConfig = (
  /** @type {Record<string,any>} */ env,
  /** @type {Pick<import('webpack').Configuration, 'mode'>} */ argv,
) => {
  console.log({ env, argv });
  return {
    ...config,
    mode: argv.mode,
    entry: './src/index.svg-sprite.tsx',
    output: {
      path: path.resolve(__dirname, 'dist/svg-sprite'),
      filename: 'bundle.[contenthash].js',
      // Ensure webpackChunkName is reflected in emitted chunk filenames.
      chunkFilename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      ...config.module,
      rules: [
        ...(config.module?.rules ?? []),
        // {
        //   test: /\.svg$/,
        //   loader: SvgChunkWebpackPlugin.loader,
        //   options: {
        //     //   configFile: './path/svgo.config.js',
        //   },
        // },
      ],
    },
    plugins: [
      ...(config.plugins ?? []),
      new FluentUIReactIconsSvgSpriteSubsettingPlugin({
        mode: 'atomic', // or 'merged'
      }),
      // new SvgChunkWebpackPlugin({
      //   filename: '[name].[contenthash].svg-plugin.svg',
      //   generateSpritesManifest: true,
      // }),
    ],
  };
};

export default spriteConfig;
