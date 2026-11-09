import * as React from 'react';

export const Image = (): React.ReactElement => (
  <img
    src="https://unpkg.com/@fluentui/svg-icons@1.1.345/icons/mail_24_regular.svg"
    width={24}
    height={24}
    alt="Mail"
    style={{ backgroundColor: '#fff' }}
  />
);
Image.storyName = 'CDN image';
Image.parameters = {
  docs: {
    description: {
      story: 'A pinned CDN URL works in plain HTML without SVG imports, loaders, or bundler configuration.',
    },
  },
};
