import type { Meta } from '@storybook/react';
import type { FluentParameters } from '@fluentui/react-storybook-addon';
import type { Parameters } from '@fluentui/react-storybook-addon-export-to-sandbox';
import descriptionMd from './SvgIconsDescription.md';
import { svgIconsVersion } from '../utils/packageVersion';
import { versionBadgeMarkup } from '../components/VersionBadge';

export { Image } from './SvgIconsImage.stories';
export { Coloring } from './SvgIconsColoring.stories';
export { Mask } from './SvgIconsMask.stories';
export { Inline } from './SvgIconsInline.stories';
export { Variants } from './SvgIconsVariants.stories';

export default {
  title: 'SVG Icons/Overview',
  parameters: {
    docs: {
      description: {
        component: `<div class="svg-icons-description">${versionBadgeMarkup({ packageName: '@fluentui/svg-icons', version: svgIconsVersion })}</div>\n\n${descriptionMd}`,
      },
      hideArgsTable: true,
    },
    exportToSandbox: {
      provider: 'stackblitz-cloud',
      bundler: 'vite',
      requiredDependencies: { '@fluentui/svg-icons': 'latest' },
      transformFiles: (files) => ({
        ...files,
        'src/vite-env.d.ts': '/// <reference types="vite/client" />\n',
      }),
    },
  } satisfies FluentParameters & Parameters,
} satisfies Meta;
