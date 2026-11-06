import * as React from 'react';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

export const Image = (): React.ReactElement => (
  <img src={mailUrl} width={24} height={24} alt="Mail" style={{ backgroundColor: '#fff' }} />
);
Image.storyName = 'External image';
Image.parameters = {
  docs: {
    description: {
      story:
        'The import resolves to an asset URL, not a component. An external image does not inherit the page\'s `color` or `fill`; this example supplies a white background for its black artwork in either theme. Set `alt=""` when the image is decorative.',
    },
  },
};
