import type { Preview } from '@storybook/react';
import type { FluentParameters } from '@fluentui/react-storybook-addon';
import type { Parameters } from '@fluentui/react-storybook-addon-export-to-sandbox';

import '@fluentui/react-storybook-addon-export-to-sandbox/styles.css';

// Icon styling is expressed as `data-fui-icon*` / `data-fui-filetype-icon` attributes resolved
// by these stylesheets. Every story that renders an icon needs them, so they belong here rather
// than in individual stories: without them icons lose `display`, the RTL flip and the
// high-contrast handling, and a `bundleIcon` pair renders BOTH variants at once — silently, and
// across the whole docsite.
import '@fluentui/react-icons/styles.css';
import '@fluentui/react-icons/fonts/styles.css';
import '@fluentui/react-icons-file-type/styles.css';

// TODO: remove once we have a better solution for sharing styles between docsite and storybook (e.g. via a package or something)
import './docs-root-v9.css';
import './docs-root.css';

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
