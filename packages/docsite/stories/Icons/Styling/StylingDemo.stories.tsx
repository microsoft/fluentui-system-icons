// The one setup step: icons carry no CSS-in-JS runtime, so the shipped stylesheet has to
// be imported once. The docsite does it globally in `.storybook/preview.tsx` (its entry
// point); it is repeated here because this page exists to teach it and the source panel
// below should show the code that actually runs.
import '@fluentui/react-icons/styles.css';

import { bundleIcon } from '@fluentui/react-icons/utils';
import { AccessTimeFilled, AccessTimeRegular } from '@fluentui/react-icons/svg/access-time';
import { SendRegular } from '@fluentui/react-icons/svg/send';
import * as React from 'react';

// `bundleIcon` composes a filled/regular pair into one component. The inactive variant is
// marked with `data-fui-icon-hidden`, and the stylesheet above is what hides it — without
// the import, both variants render at once.
const AccessTime = bundleIcon(AccessTimeFilled, AccessTimeRegular);

// Styling is plain CSS. Icons inherit `color` and `font-size` from their container (SVG
// icons size via `font-size` and paint via `currentColor`), so the shared look lives on
// the root and inline styles are used only to override.
export const StyledIcons = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 32, color: '#0f6cbd' }}>
      <AccessTime filled aria-label="AccessTime filled" />
      <AccessTime aria-label="AccessTime regular" />
      <SendRegular aria-label="Send" style={{ fontSize: 48, color: '#c50f1f' }} />
    </div>
  );
};
