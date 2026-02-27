// @ts-check

import { createRequire } from 'node:module';

import webpackBundler from 'monosize-bundler-webpack';

import { GriffelCSSExtractionPlugin } from '@griffel/webpack-extraction-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const require = createRequire(import.meta.url);
const {
  default: FluentUIReactIconsFontSubsettingPlugin,
} = require('@fluentui/react-icons-font-subsetting-webpack-plugin');
const {
  default: FluentUIReactIconsSvgSpriteSubsettingPlugin,
} = require('@fluentui/react-icons-svg-sprite-subsetting-webpack-plugin');


import baseConfig from '../../monosize.config.mjs';

const enableGriffelExtraction = process.env.GRIFFEL_EXTRACTION === 'true';
const enableFontSubsetting = process.env.FONT_SUBSETTING === 'true';
const enableSvgSubsetting = process.env.SVG_SUBSETTING === 'true';

console.info(`Font Subsetting is ${enableFontSubsetting ? 'enabled' : 'disabled'}.`);
console.info(`Svg Subsetting is ${enableSvgSubsetting ? 'enabled' : 'disabled'}.`);
console.info(`Griffel CSS Extraction is ${enableGriffelExtraction ? 'enabled' : 'disabled'}.`);
if (!enableGriffelExtraction) {
  console.info(`Set GRIFFEL_EXTRACTION=true to enable.`);
}

/**
 * @param {import('webpack').Configuration} config
 */
function applyGriffelExtraction(config) {
  /** @typedef {{ module: {rules: Array<import('webpack').RuleSetRule>}; plugins: Array<import('webpack').WebpackPluginInstance> }} AssertConfig */

  /** @type {AssertConfig} */ (config).module.rules.push(
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
  /** @type {AssertConfig} */ (config).plugins.push(new GriffelCSSExtractionPlugin(), new MiniCssExtractPlugin());
  // config.resolve.extensions = ['.raw.js', '...']; // Add Griffel AOT extraction for better bundle size measurements
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
      applyGriffelExtraction(config);
    }

    if (enableFontSubsetting) {
      config.plugins.push(new FluentUIReactIconsFontSubsettingPlugin());
    }
    if (enableSvgSubsetting) {
      config.plugins.push(new FluentUIReactIconsSvgSpriteSubsettingPlugin());
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
