import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { default as FluentUIReactIconsFontSubsettingPlugin } from '@fluentui/react-icons-font-subsetting-webpack-plugin';

const readPackageVersion = (packageDir: string): string =>
  JSON.parse(fs.readFileSync(path.resolve(__dirname, packageDir, 'package.json'), 'utf8')).version;

// The headless icon CSS shipped by `@fluentui/react-icons` (base `data-fui-icon` rules + @font-face).
const HEADLESS_ICONS_CSS = /[\\/]react-icons[\\/]lib[\\/]headless[\\/].*\.css$/;

/**
 * Extract ONLY the `@fluentui/react-icons` headless CSS to a real stylesheet asset (a `<link>`) so
 * the headless font-icon demo's `@font-face` loads statically (real `font-display: block`). All
 * other CSS keeps Storybook's default runtime `style-loader`. Meant for the production build only
 * (dev keeps `style-loader` so HMR works).
 */
const extractHeadlessIconsCss = (config: webpack.Configuration): void => {
  const rules = config.module?.rules;
  if (!rules) {
    return;
  }
  // Storybook's flat `.css` rule (style-loader) must skip the headless CSS so our rule owns it.
  for (const rule of rules) {
    if (rule && typeof rule === 'object' && rule.test instanceof RegExp && rule.test.test('.css')) {
      rule.exclude = HEADLESS_ICONS_CSS;
    }
  }
  rules.push({ test: HEADLESS_ICONS_CSS, use: [MiniCssExtractPlugin.loader, 'css-loader'] });
  config.plugins = config.plugins ?? [];
  config.plugins.push(new MiniCssExtractPlugin());
};

const config: StorybookConfig = {
  stories: ['../stories/**/index.stories.@(ts|tsx)', '../stories/**/*.mdx'],

  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    '@storybook/addon-webpack5-compiler-swc',
    '@fluentui/react-storybook-addon',
    '@fluentui/react-storybook-addon-export-to-sandbox',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  docs: {
    docsMode: true,
  },

  webpackFinal: async (webpackConfig, options) => {
    webpackConfig.plugins = webpackConfig.plugins ?? [];
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        STORYBOOK_REACT_ICONS_VERSION: JSON.stringify(readPackageVersion('../../react-icons')),
        STORYBOOK_REACT_ICONS_FILE_TYPE_VERSION: JSON.stringify(readPackageVersion('../../react-icons-file-type')),
      }),
    );

    // Subset the icon fonts to only the glyphs used by the font-icon stories, so the built
    // Storybook doesn't ship the multi-MB full fonts. Requires `optimization.usedExports` so the
    // plugin can see which font atom exports are actually referenced (production build only).
    webpackConfig.optimization = webpackConfig.optimization ?? {};
    webpackConfig.optimization.usedExports = true;
    webpackConfig.plugins.push(new FluentUIReactIconsFontSubsettingPlugin());

    // Extract the headless icon CSS to a real stylesheet asset (a `<link>`) in the production
    // build, so the headless font-icon demo's `@font-face` loads as a static stylesheet (real
    // `font-display: block` behaviour) instead of Storybook's default runtime `style-loader`
    // injection. Dev keeps `style-loader` for HMR.
    if (options.configType === 'PRODUCTION') {
      extractHeadlessIconsCss(webpackConfig);
    }

    return webpackConfig;
  },
};

export default config;
