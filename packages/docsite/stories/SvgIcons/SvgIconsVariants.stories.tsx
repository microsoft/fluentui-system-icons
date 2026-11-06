import * as React from 'react';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';
import mailFilledUrl from '@fluentui/svg-icons/icons/mail_24_filled.svg?url';
import mailLightUrl from '@fluentui/svg-icons/icons/mail_32_light.svg?url';
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_24_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_24_regular.svg?url';

export const Variants = (): React.ReactElement => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    {[
      { src: mailUrl, size: 24, label: 'Mail, Regular' },
      { src: mailFilledUrl, size: 24, label: 'Mail, Filled' },
      { src: mailLightUrl, size: 32, label: 'Mail, Light' },
      { src: spanishBoldUrl, size: 24, label: 'Bold, Spanish' },
      { src: serbianBoldUrl, size: 24, label: 'Bold, Serbian Cyrillic' },
    ].map(({ src, size, label }) => (
      <figure key={label} style={{ margin: 0, display: 'grid', justifyItems: 'center', gap: '8px' }}>
        <div style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
          <img src={src} width={size} height={size} alt={label} style={{ backgroundColor: '#fff' }} />
        </div>
        <figcaption>{label}</figcaption>
      </figure>
    ))}
  </div>
);
Variants.storyName = 'Styles and localized artwork';
Variants.parameters = {
  docs: {
    description: {
      story:
        'Light and localized artwork are available for selected icons only. These imports use `mail_32_light.svg`, `es/text_bold_24_regular.svg`, and `sr-cyrl/text_bold_24_regular.svg`. Locale directories are not React-style filename suffixes, and the package does not select a locale automatically.',
    },
  },
};
