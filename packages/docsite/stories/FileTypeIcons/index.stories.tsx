import { FileTypeIcon, FileIconType } from '@fluentui/react-icons-file-type';
import descriptionMd from './FileTypeIconsDescription.md';
import { reactIconsFileTypeVersion } from '../utils/packageVersion';
import { versionBadgeMarkup } from '../components/VersionBadge';

export { Default } from './FileTypeIconsDefault.stories';
export { Sizes } from './FileTypeIconsSizes.stories';
export { Types } from './FileTypeIconsTypes.stories';
export { Provider } from './FileTypeIconsProvider.stories';

export default {
  title: 'File Type Icons/Overview',
  component: FileTypeIcon,
  parameters: {
    docs: {
      description: {
        component: `${versionBadgeMarkup({ packageName: '@fluentui/react-icons-file-type', version: reactIconsFileTypeVersion })}\n\n${descriptionMd}`,
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
      control: 'select',
      options: Object.values(FileIconType),
      labels: Object.fromEntries(Object.entries(FileIconType).map(([name, value]) => [value, name])),
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
  },
};
