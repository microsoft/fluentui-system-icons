import { FileTypeIcon } from '@fluentui/react-icons-file-type';
import descriptionMd from './FileTypeIconsDescription.md';

export { Default } from './FileTypeIconsDefault.stories';
export { Sizes } from './FileTypeIconsSizes.stories';
export { Provider } from './FileTypeIconsProvider.stories';

export default {
  title: 'File Type Icons/Overview',
  component: FileTypeIcon,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
    },
  },
  argTypes: {
    extension: {
      control: 'text',
      description: 'The file extension for which an icon is needed, such as `pptx`',
      type: { name: 'string' },
    },
    type: {
      control: false,
      description: 'A `FileIconType` for icons not associated with a file extension, such as `folder`',
    },
    size: {
      control: 'select',
      options: [16, 20, 24, 32, 40, 48, 64, 96],
      description: 'The size of the icon in pixels',
      table: { defaultValue: { summary: '16' } },
    },
    imageFileType: {
      control: 'inline-radio',
      options: ['svg', 'png'],
      description: 'The image format to use',
      table: { defaultValue: { summary: 'svg' } },
    },
    baseUrl: {
      control: false,
      description: 'Override the asset host for this icon. Falls back to the provider value or the Fluent CDN default',
      type: { name: 'string' },
    },
  },
};
