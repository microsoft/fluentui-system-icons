import { bundleIcon } from '@fluentui/react-icons/headless/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/headless/svg/access-time';

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
      // Single-demo page: drop the duplicate Primary hero and the (unused) Args
      // table, while keeping the Fluent addon chrome (TOC, theme/RTL/copy toggles).
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
