import * as React from 'react';
import mailUrl from '@fluentui/svg-icons/icons/mail_24_regular.svg?url';

export const Mask = (): React.ReactElement => (
  <button
    type="button"
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '8px 12px',
      color: 'inherit',
      backgroundColor: 'transparent',
      border: '1px solid currentColor',
      borderRadius: '4px',
      font: 'inherit',
    }}
  >
    <span
      aria-hidden="true"
      style={{
        display: 'inline-block',
        width: '24px',
        height: '24px',
        flexShrink: 0,
        backgroundColor: 'currentColor',
        maskImage: `url("${mailUrl}")`,
        maskRepeat: 'no-repeat',
        maskPosition: 'center',
        maskSize: 'contain',
        WebkitMaskImage: `url("${mailUrl}")`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        WebkitMaskSize: 'contain',
        forcedColorAdjust: 'preserve-parent-color',
      }}
    />
    Inbox
  </button>
);
Mask.storyName = 'Monochrome CSS mask';
Mask.parameters = {
  docs: {
    description: {
      story:
        "A mask paints the SVG silhouette using `background-color: currentColor`. The button supplies the accessible name. `forced-color-adjust: preserve-parent-color` keeps the mask visible while inheriting the button's adjusted text color in forced-colors mode. Check support in your target browsers. Masks do not preserve multicolor artwork.",
    },
  },
};
