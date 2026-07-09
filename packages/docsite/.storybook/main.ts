import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';
import * as fs from 'node:fs';
import * as path from 'node:path';
import webpack from 'webpack';
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

  webpackFinal: async (webpackConfig) => {
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

    return webpackConfig;
  },
};

export default config;
