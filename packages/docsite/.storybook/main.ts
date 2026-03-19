import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],

  addons: [getAbsolutePath('@storybook/addon-docs'), getAbsolutePath('@storybook/addon-webpack5-compiler-swc')],

  framework: {
    name: getAbsolutePath('@storybook/react-webpack5'),
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

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
