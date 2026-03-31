import type { Preview } from '@storybook/react';
import type { FluentParameters } from '@fluentui/react-storybook-addon';

// TODO: remove once addon ships styles
import './react-storybook-addon-export-to-sandbox.styles.css';

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
        order: ['Icons', ['Overview', 'Catalog', 'User Guidance']],
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
  } satisfies FluentParameters,

  tags: ['autodocs'],
} satisfies Preview;

export default preview;
