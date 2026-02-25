// @ts-check

import webpackBundler from 'monosize-bundler-webpack';

import baseConfig from '../../monosize.config.mjs';

/** @type {import('monosize').MonoSizeConfig} */
const config = {
  ...baseConfig,
  bundler: webpackBundler((config) => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];

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
