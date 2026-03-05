import * as React from 'react';
import type { Preview } from '@storybook/react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

import { FluentDocsContainer } from './FluentDocsContainer';
import { FluentDocsPage } from './FluentDocsPage';
import './docs-root.css';
import './docs-root-v9.css';

const preview = {
  decorators: [
    (Story) => (
      <FluentProvider theme={webLightTheme}>
        <Story />
      </FluentProvider>
    ),
  ],

  parameters: {
    viewMode: 'docs',
    controls: {
      disable: true,
      expanded: true,
    },
    docs: {
      container: FluentDocsContainer,
      page: FluentDocsPage,
      codePanel: true,
    },
  },

  tags: ['autodocs'],
} satisfies Preview;

export default preview;
