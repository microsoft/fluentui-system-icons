import * as React from 'react';
import { DocsStory, HeaderMdx, Markdown } from '@storybook/addon-docs/blocks';
import type { Meta } from '@storybook/react';
import { FluentDocsPage, type FluentParameters } from '@fluentui/react-storybook-addon';
import type { Parameters } from '@fluentui/react-storybook-addon-export-to-sandbox';
import descriptionMd from './SvgIconsDescription.md';
import accessibilityMd from './SvgIconsAccessibility.md?raw';
import { svgIconsVersion } from '../utils/packageVersion';
import { versionBadgeMarkup } from '../components/VersionBadge';

export { Image } from './SvgIconsImage.stories';
export { Variants } from './SvgIconsVariants.stories';
export { Coloring } from './SvgIconsColoring.stories';

export default {
  title: 'SVG Icons/Overview',
  parameters: {
    docs: {
      page: () => (
        <FluentDocsPage
          renderStories={({ stories }) => (
            <>
              {stories.map((story) => (
                <React.Fragment key={story.id}>
                  {story.id.endsWith('--coloring') && (
                    <HeaderMdx as="h2" id="monochrome-recoloring-options">
                      Monochrome recoloring options
                    </HeaderMdx>
                  )}
                  <DocsStory of={story.moduleExport} expanded />
                </React.Fragment>
              ))}
              <Markdown>{accessibilityMd}</Markdown>
            </>
          )}
        />
      ),
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
