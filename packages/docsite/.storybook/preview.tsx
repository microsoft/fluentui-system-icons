import type { Preview } from '@storybook/react';
import type { FluentParameters } from '@fluentui/react-storybook-addon';
import type { Parameters } from '@fluentui/react-storybook-addon-export-to-sandbox';

import '@fluentui/react-storybook-addon/styles.css';
import '@fluentui/react-storybook-addon-export-to-sandbox/styles.css';

import './docsite.css';

const preview = {
  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
      expanded: true,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: [
          'Icons',
          [
            'Overview',
            'Catalog',
            'Rendering Approaches',
            'Atomic API',
            'Headless API',
            'Color Variants',
            'Recipes',
            'API Contract',
            'Build Transforms',
            'Bundle Size',
          ],
          'File Type Icons',
          ['Overview', 'Migration (v8 → v9)'],
        ],
      },
    },

    // =============
    // @fluentui/react-storybook-addon parameters
    // =============

    reactStorybookAddon: {
      docs: true,
    },

    // =============
    // @fluentui/react-storybook-addon-export-to-sandbox parameters
    // =============
    docs: {
      source: {
        excludeDecorators: true,
        type: 'code',
      },
    },
    exportToSandbox: {
      provider: 'stackblitz-cloud',
      bundler: 'vite',
      requiredDependencies: {
        // for React
        react: '^18',
        'react-dom': '^18',
        // necessary for FluentProvider:
        '@fluentui/react-components': '^9.0.0',
        '@fluentui/react-icons': 'latest',
      },
      optionalDependencies: {},
    },
  } satisfies FluentParameters & Parameters,

  tags: ['autodocs'],
} satisfies Preview;

export default preview;
