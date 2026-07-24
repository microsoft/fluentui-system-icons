import { SendRegular } from '@fluentui/react-icons/fonts/send';
import descriptionMd from './FontIconsDescription.md';

export { FontIcons } from './FontIcons.stories';
export { FontIconsSizing } from './FontIconsSizing.stories';
export { FontIconsBox } from './FontIconsBox.stories';
export { FontIconsLayoutShift } from './FontIconsLayoutShift.stories';
export { FontIconsInlineLayoutShift } from './FontIconsInlineLayoutShift.stories';

export default {
  title: 'Icons/Font Icons',
  component: SendRegular,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
