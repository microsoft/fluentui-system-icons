import { ShieldLock48Regular } from '@fluentui/react-icons';
import { Description, Stories, Title } from '@storybook/addon-docs/blocks';

import descriptionMd from './RecipesDescription.md';

export { MultipleColors } from './MultipleColors.stories';
export { ScopingGradientIds } from './ScopingGradientIds.stories';

export default {
  title: 'Icons/Recipes',
  component: ShieldLock48Regular,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      // Render each recipe as its own section (name → description → demo) via the
      // Stories block, instead of the default Primary + Controls layout.
      page: () => (
        <>
          <Title />
          <Description />
          <Stories includePrimary />
        </>
      ),
    },
  },
};
