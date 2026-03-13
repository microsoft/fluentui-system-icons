import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],

  addons: ['@storybook/addon-docs', '@storybook/addon-webpack5-compiler-swc'],

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

  webpackFinal: async (config) => {
    const docsiteNodeModules = new URL('../node_modules', import.meta.url).pathname;
    config.resolve = config.resolve || {};
    config.resolve.modules = [docsiteNodeModules, ...(config.resolve.modules || ['node_modules'])];
    return config;
  },
};

export default config;
