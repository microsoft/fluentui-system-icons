import { CalendarColor } from '@fluentui/react-icons';

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
      // Drop the duplicate Primary hero and the auto Args table: the `idPrefix`
      // prop is already documented in the description ("Scoping gradient IDs with
      // idPrefix"), and the table would otherwise render above the demo. Keeps
      // the Fluent addon chrome (TOC, theme/RTL/copy toggles).
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
