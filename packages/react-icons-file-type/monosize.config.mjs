import webpackBundler from 'monosize-bundler-webpack';

import { GriffelCSSExtractionPlugin } from '@griffel/webpack-extraction-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import baseConfig from '../../monosize.config.mjs';

const enableGriffelExtraction = process.env.GRIFFEL_EXTRACTION === 'true';

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
      test: /\.styles\.js$/,
      // Apply "exclude" only if your dependencies **do not use** Griffel
      // exclude: /node_modules/,
      use: {
        loader: GriffelCSSExtractionPlugin.loader,
      },
    },
    {
      // `@griffel/webpack-loader` performs the AOT transform of `makeStyles` into the
      // pre-resolved `__styles` form. It is a **prerequisite** for the extraction plugin
      // above — without it there is no extractable CSS and the full Griffel runtime stays
      // in the bundle. The styles being measured live in the package's compiled `lib/*.js`,
      // so `.js` must be matched and the workspace package must not be excluded.
      test: /\.styles\.js$/,
      use: {
        loader: '@griffel/webpack-loader',
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

    return config;
  }),
  threshold: '10kB',
};

export default config;
