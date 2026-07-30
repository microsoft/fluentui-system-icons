// @ts-check

import webpackBundler from 'monosize-bundler-webpack';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import baseConfig from '../../monosize.config.mjs';

// The icon ships a plain `.css` file, so the only variable left is where webpack puts it:
// inlined into the JS bundle behind `style-loader` (webpack's default) or pulled out into a
// `.css` asset by `MiniCssExtractPlugin`.
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
  // No `threshold` override: the 10 kB one existed to absorb the CSS-in-JS runtime's
  // version-to-version drift (a Griffel bump cost this package's fixture ~1.1 kB, see
  // `docs/single-version-policy.md`). With that runtime gone the fixtures are small and
  // stable, so the root's absolute 1 kB inherited from `baseConfig` is the right gate.
};

export default config;
