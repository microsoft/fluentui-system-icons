import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { default as FluentUIReactIconsFontSubsettingPlugin } from '@fluentui/react-icons-font-subsetting-webpack-plugin';

const readPackageVersion = (packageDir: string): string =>
  JSON.parse(fs.readFileSync(path.resolve(__dirname, packageDir, 'package.json'), 'utf8')).version;

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

    // Extract CSS to a real stylesheet asset (a `<link>`) in the production build, so the headless
    // font-icon demo's `@font-face` loads as a static stylesheet (real `font-display: block`
    // behaviour) instead of Storybook's default runtime `style-loader` injection. Storybook's CSS
    // handling is a single flat rule, so swapping its `style-loader` is all that's needed. Dev
    // keeps `style-loader` for HMR.
    if (options.configType === 'PRODUCTION') {
      for (const rule of webpackConfig.module?.rules ?? []) {
        if (rule && typeof rule === 'object' && Array.isArray(rule.use)) {
          rule.use = rule.use.map((entry) => {
            const loader = typeof entry === 'string' ? entry : (entry as { loader?: string } | null)?.loader;
            return typeof loader === 'string' && loader.includes('style-loader') ? MiniCssExtractPlugin.loader : entry;
          });
        }
      }
      webpackConfig.plugins.push(new MiniCssExtractPlugin());
    }

    return webpackConfig;
  },
};

export default config;
