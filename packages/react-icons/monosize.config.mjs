// @ts-check
import webpackBundler from 'monosize-bundler-webpack';

export default {
  bundler: webpackBundler(config => {
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];

    // Add loader for font files
    config.module.rules.push({
        test: /\.(ttf|woff2?|woff)$/,
        type: 'asset/resource',
    });

    return config;
  }),
};