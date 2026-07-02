import { bundleIcon } from '@fluentui/react-icons/headless/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/headless/svg/access-time';
import { Description, Primary, Title } from '@storybook/addon-docs/blocks';

import descriptionMd from './IconsHeadless.md';

export { HeadlessIcons } from './Headless.stories';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

export default {
  title: 'Icons/Headless API',
  component: AccessTime,
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
        </>
      ),
    },
  },
};
