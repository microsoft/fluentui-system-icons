import { CalendarColor } from '@fluentui/react-icons';

import descriptionMd from './ColorVariantsDescription.md';

export { Gallery } from './ColorVariantsGallery.stories';

export default {
  title: 'Icons/Color Variants',
  component: CalendarColor,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      // The concept page explains *why* Color variants are deprecated and links
      // to Icons/Recipes for the runnable `idPrefix` and High Contrast Mode
      // patterns. It keeps only a small visual gallery. Drop the Primary hero
      // and Args table.
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
