import * as React from 'react';
import mailUrl from '@fluentui/svg-icons/icons/mail_32_regular.svg?url';
import mailFilledUrl from '@fluentui/svg-icons/icons/mail_32_filled.svg?url';
import mailLightUrl from '@fluentui/svg-icons/icons/mail_32_light.svg?url';
import spanishBoldUrl from '@fluentui/svg-icons/icons/es/text_bold_28_regular.svg?url';
import serbianBoldUrl from '@fluentui/svg-icons/icons/sr-cyrl/text_bold_28_regular.svg?url';

export const Variants = (): React.ReactElement => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
    {[
      { src: mailUrl, label: 'Mail, Regular' },
      { src: mailFilledUrl, label: 'Mail, Filled' },
      { src: mailLightUrl, label: 'Mail, Light' },
      { src: spanishBoldUrl, label: 'Bold, Spanish' },
      { src: serbianBoldUrl, label: 'Bold, Serbian Cyrillic' },
    ].map(({ src, label }) => (
      <figure key={label} style={{ margin: 0, display: 'grid', justifyItems: 'center', gap: '8px' }}>
        <div style={{ height: '32px', display: 'flex', alignItems: 'center' }}>
          <img src={src} width={32} height={32} alt={label} style={{ backgroundColor: '#fff' }} />
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
        'All previews render at 32px. Mail uses native 32px artwork; localized Bold uses 28px artwork scaled to 32px.',
    },
  },
};
