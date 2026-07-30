import { bundleIcon } from '@fluentui/react-icons/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/svg/access-time';

import descriptionMd from './IconsStyling.md';

export { StyledIcons } from './StylingDemo.stories';

const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

export default {
  title: 'Icons/Styling',
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
