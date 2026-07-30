// @ts-check

import webpackBundler from 'monosize-bundler-webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import baseConfig from '../../monosize.config.mjs';

// The icons ship plain `.css` files, so the only variable left is where webpack puts them:
// inlined into the JS bundle behind `style-loader` (webpack's default) or pulled out into a
// `.css` asset by `MiniCssExtractPlugin`. Both are measured because the difference is the
// headline trade-off in `docs/bundle-size-rendering-approaches-comparison.md`.
const enableCssExtraction = process.env.CSS_EXTRACTION === 'true';

console.info(`CSS extraction is ${enableCssExtraction ? 'enabled' : 'disabled'}.`);
if (!enableCssExtraction) {
  console.info(`Set CSS_EXTRACTION=true to enable.`);
}

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  ...baseConfig,
  bundler: webpackBundler((config) => {
    config.resolve = config.resolve ?? {};
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];
    config.plugins = config.plugins ?? [];

    // Add loader for font files
    config.module.rules.push({
      test: /\.(ttf|woff2?|woff)$/,
      type: 'asset/resource',
    });

    // Add loader for svg files
    config.module.rules.push({
      test: /\.svg$/,
      type: 'asset/resource',
    });

    if (enableCssExtraction) {
      config.module.rules.push({
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      });
      config.plugins.push(new MiniCssExtractPlugin());
    } else {
      config.module.rules.push({
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      });
    }

    return config;
  }),
};

export default config;
