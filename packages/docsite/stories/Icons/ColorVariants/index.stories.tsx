import { CalendarColor } from '@fluentui/react-icons';
import { Controls, Description, Primary, Title } from '@storybook/addon-docs/blocks';

import descriptionMd from './ColorVariantsDescription.md';

export { ColorIdPrefix } from './ColorIdPrefix.stories';

export default {
  title: 'Icons/Color Variants',
  component: CalendarColor,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      // Single-story page: render the example once (Primary) and omit the
      // autodocs `Stories` block, which would otherwise repeat the same story.
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
  argTypes: {
    idPrefix: {
      control: 'text',
      description:
        'Scopes the locally-defined SVG ids (gradients, clip paths, filters) of a `Color` variant per instance to avoid global DOM id collisions. Ignored by mono-color icons.',
      table: { defaultValue: '' },
      type: { name: 'string' },
    },
  },
};
