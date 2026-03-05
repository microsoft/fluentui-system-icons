import { SendRegular } from '@fluentui/react-icons';
import descriptionMd from './IconsDescription.md';

export { Default } from './IconsDefault';
export { BundleIcon as bundleIcon } from './IconsBundleIcon';
export { Styling } from './IconsStyling';
export { FontSize } from './IconsFontSize';

export default {
  title: 'Icons/Overview',
  component: SendRegular,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
    },
  },
  argTypes: {
    className: {
      control: false,
      description: 'Used to style the icon',
      table: { defaultValue: '' },
      type: { name: 'string' },
    },
    filled: {
      control: false,
      description:
        'Used to determine whether the filled or unfilled version of an icon is the default when `bundleIcon` is used',
      table: { defaultValue: { summary: 'false' } },
      type: { name: 'boolean' },
    },
    primaryFill: {
      control: false,
      description: 'Used to change the primary fill of the icon',
      table: { defaultValue: { summary: 'currentColor' } },
      type: { name: 'string' },
    },
    title: {
      control: false,
      description: 'Specifies the title attribute for the svg',
      table: { defaultValue: '' },
      type: { name: 'string' },
    },
  },
};
