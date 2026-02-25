// @ts-check

import webpackBundler from 'monosize-bundler-webpack';

import { GriffelCSSExtractionPlugin } from '@griffel/webpack-extraction-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import baseConfig from '../../monosize.config.mjs';

const enableGriffelExtraction = process.env.GRIFFEL_EXTRACTION === 'true';

console.info(`Griffel CSS Extraction is ${enableGriffelExtraction ? 'enabled' : 'disabled'}.`);
if (!enableGriffelExtraction) {
  console.info(`Set GRIFFEL_EXTRACTION=true to enable.`);
}

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  ...baseConfig,
  bundler: webpackBundler((config) => {
    config.resolve = config.resolve ?? {};
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];
    config.plugins = config.plugins ?? [];

    if (enableGriffelExtraction) {
      config.module.rules.push(
        {
          test: /\.(js|ts|tsx)$/,
          // Apply "exclude" only if your dependencies **do not use** Griffel
          // exclude: /node_modules/,
          use: {
            loader: GriffelCSSExtractionPlugin.loader,
          },
        },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      );
      config.plugins.push(new GriffelCSSExtractionPlugin(), new MiniCssExtractPlugin());
      // config.resolve.extensions = ['.raw.js', '...']; // Add Griffel AOT extraction for better bundle size measurements
    }

    // Add loader for font files
    config.module.rules.push({
      test: /\.(ttf|woff2?|woff)$/,
      type: 'asset/resource',
    });

    // Add loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    });

    return config;
  }),
  threshold: '10kB',
};

export default config;
