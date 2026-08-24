import { ShieldLock48Regular } from '@fluentui/react-icons';

import descriptionMd from './RecipesDescription.md';

export { TargetIconsFromCss } from './TargetIconsFromCss.stories';
export { MultipleColors } from './MultipleColors.stories';
export { ColorIdPrefix } from './ColorIdPrefix.stories';
export { ColorHcmForcedColors } from './ColorHcmForcedColors.stories';

export default {
  title: 'Icons/Recipes',
  component: ShieldLock48Regular,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      // Recipes is a catalog of independent demos, not a single-component page:
      // drop the headlined Primary hero and the (unused) Args table so every
      // recipe renders uniformly in the Stories list. The Fluent addon's TOC
      // still works — each recipe heading anchors the "On this page" nav.
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
