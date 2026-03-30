import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/index.stories.@(ts|tsx)', '../stories/**/*.mdx'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-webpack5-compiler-swc',
    '@fluentui/react-storybook-addon',
    {
      name: '@fluentui/react-storybook-addon-export-to-sandbox',
      options: {
        webpackRule: {
          test: /\.stories\.tsx$/,
          include: /stories/,
        },
      },
    },
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
