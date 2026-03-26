import { join } from 'node:path';
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
    const docsiteNodeModules = join(__dirname, '..', 'node_modules');
    config.resolve = config.resolve || {};
    config.resolve.modules = [docsiteNodeModules, ...(config.resolve.modules || ['node_modules'])];

    // Storybook's react-dom-shim preset resolves react-dom from the repo root
    // (React 17) and incorrectly aliases to the legacy react-16 shim. Remove
    // that alias so the default export (react-18 / createRoot) is used instead.
    const existingAlias = { ...(config.resolve.alias as Record<string, string>) };
    delete existingAlias['@storybook/react-dom-shim'];

    config.resolve.alias = {
      ...existingAlias,
      react: join(docsiteNodeModules, 'react'),
      'react-dom': join(docsiteNodeModules, 'react-dom'),
    };
    return config;
  },
};

export default config;
