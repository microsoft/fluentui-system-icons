import type { Preview } from '@storybook/react';
import type { FluentParameters } from '@fluentui/react-storybook-addon';
import type { Parameters } from '@fluentui/react-storybook-addon-export-to-sandbox';

import '@fluentui/react-storybook-addon/styles.css';
import '@fluentui/react-storybook-addon-export-to-sandbox/styles.css';

// Icon styling is expressed as `data-fui-icon*` / `data-fui-filetype-icon` attributes resolved
// by these stylesheets. Every story that renders an icon needs them, so they belong here rather
// than in individual stories: without them icons lose `display`, the RTL flip and the
// high-contrast handling, and a `bundleIcon` pair renders BOTH variants at once — silently, and
// across the whole docsite.
import '@fluentui/react-icons/styles.css';
import '@fluentui/react-icons/fonts/styles.css';
import '@fluentui/react-icons-file-type/styles.css';

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
            // Styling sits directly after the catalog because the stylesheet import it
            // documents is required setup, not an optional topic — an application that
            // skips it renders every icon wrong. It was "Headless API", further down,
            // when that implementation was one of two choices.
            'Styling',
            'Rendering Approaches',
            'Atomic API',
            'Color Variants',
            'Font Icons',
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
        react: '^19',
        'react-dom': '^19',
        // necessary for FluentProvider:
        '@fluentui/react-components': '^9.0.0',
        '@fluentui/react-icons': 'latest',
      },
      optionalDependencies: {},
      // The addon defaults to React 17 types + TS ~4.7, which don't typecheck
      // against the React 19 runtime pinned above (`tsc` runs in the sandbox
      // build script).
      devDependencies: {
        '@types/react': '^19',
        '@types/react-dom': '^19',
        typescript: '^5.0.0',
      },
    },
  } satisfies FluentParameters & Parameters,

  tags: ['autodocs'],
} satisfies Preview;

export default preview;
