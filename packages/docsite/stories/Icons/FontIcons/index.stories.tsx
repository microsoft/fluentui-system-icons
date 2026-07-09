import { SendRegular } from '@fluentui/react-icons/fonts/send';

export { FontIcons } from './FontIcons.stories';
export { FontIconsSizing } from './FontIconsSizing.stories';
export { FontIconsBox } from './FontIconsBox.stories';
export { FontIconsLayoutShift } from './FontIconsLayoutShift.stories';

export default {
  title: 'Icons/Font Icons',
  component: SendRegular,
  parameters: {
    docs: {
      description: {
        component: [
          'Font-based icons are the alternate delivery of `@fluentui/react-icons`, imported from the',
          '`@fluentui/react-icons/fonts/*` entry point. Each icon renders as an `<i>` glyph element',
          'and, like the SVG icons, reserves a `1em × 1em` box and inherits `color` and `font-size`.',
        ].join(' '),
      },
      skipPrimaryStory: true,
      hideArgsTable: true,
    },
  },
};
