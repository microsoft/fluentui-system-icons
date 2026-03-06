import type { Preview } from '@storybook/react';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

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
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Icons', ['Overview', 'Catalog', 'Advanced Usage']],
      },
    },
  },

  tags: ['autodocs'],
} satisfies Preview;

export default preview;
