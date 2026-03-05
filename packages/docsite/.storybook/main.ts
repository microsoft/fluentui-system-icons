import type { StorybookConfig } from '@storybook/react-webpack5';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx)', '../stories/**/*.mdx'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-webpack5-compiler-babel',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },

  webpackFinal: async (config) => {
    // Add babel presets for TSX/JSX in story files and storybook config
    config.module?.rules?.push({
      test: /\.tsx?$/,
      include: [resolve(__dirname, '../stories'), resolve(__dirname, '.')],
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            ['@babel/preset-react', { runtime: 'classic' }],
            '@babel/preset-typescript',
          ],
        },
      },
    });

    return config;
  },
};

export default config;
