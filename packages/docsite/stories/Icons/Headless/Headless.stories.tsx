// Headless icons ship no CSS-in-JS runtime — you opt into styling by importing
// the shipped vanilla CSS file once. This is the key difference from the standard API.
import '@fluentui/react-icons/headless/styles.css';

import { bundleIcon } from '@fluentui/react-icons/headless/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/headless/svg/access-time';
import { SendRegular } from '@fluentui/react-icons/headless/svg/send';
import * as React from 'react';

// bundleIcon works identically to the standard API — here we render both the
// filled and regular variants of the bundled icon side by side.
const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

// Styling is plain CSS — no Griffel runtime. Icons inherit `color` and `font-size`
// from their container (SVG icons size via `font-size` and paint via `currentColor`),
// so the shared look lives on the root and inline styles are used only to override.
export const HeadlessIcons = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 32, color: '#0f6cbd' }}>
      <AccessTime filled aria-label="AccessTime filled" />
      <AccessTime aria-label="AccessTime regular" />
      <SendRegular aria-label="Send" style={{ fontSize: 48, color: '#c50f1f' }} />
    </div>
  );
};
