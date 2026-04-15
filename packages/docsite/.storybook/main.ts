import type { StorybookConfig } from '@storybook/react-webpack5';
import remarkGfm from 'remark-gfm';

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
};

export default config;
