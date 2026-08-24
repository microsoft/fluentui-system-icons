import { makeStyles } from '@fluentui/react-components';
import {
  bundleIcon,
  CodeBlock48Color,
  CodeBlock48Filled,
  iconFilledClassName,
  iconRegularClassName,
} from '@fluentui/react-icons';
import * as React from 'react';

// `bundleIcon(Filled, Color)` puts the Filled variant in the "filled" slot and
// the Color variant in the "regular" slot. Out of the box it already shows the
// Color variant and hides Filled, so we only need to flip them under
// `forced-colors: active` (Windows High Contrast Mode) — a Color variant
// collapses to a solid CanvasText block in HCM.
const CodeBlock48ColorHcm = bundleIcon(CodeBlock48Filled, CodeBlock48Color);

const useStyles = makeStyles({
  // `bundleIcon` spreads `className` onto BOTH svgs, so we target each icon with
  // a compound-self selector (`&.` — no space), not a descendant one (`& .`).
  // That matches the svg directly (no wrapper needed) and wins over bundleIcon's
  // internal single-class display rules.
  icon: {
    fontSize: '48px',

    '@media (forced-colors: active)': {
      [`&.${iconFilledClassName}`]: {
        display: 'inline',
      },
      [`&.${iconRegularClassName}`]: {
        display: 'none',
      },
    },
  },
});

export const ColorHcmForcedColors = () => {
  const styles = useStyles();

  return <CodeBlock48ColorHcm className={styles.icon} aria-label="Code block" />;
};
ColorHcmForcedColors.storyName = 'Keeping Color icons usable in High Contrast Mode';
ColorHcmForcedColors.parameters = {
  docs: {
    description: {
      story: [
        'Color variants do not render in Windows High Contrast Mode (HCM). If you must keep a `Color` icon during migration,',
        'bundle it with its `Filled` variant via `bundleIcon(Filled, Color)` and swap between them with a `forced-colors` media query.',
        '',
        'By default the `Color` variant shows; when `forced-colors: active` the `Filled` variant takes over so the icon stays visible',
        'and HCM-compliant. Toggle High Contrast Mode (or emulate `forced-colors` in DevTools) to see the swap.',
        '',
        '**Note:** this ships both variants, so it increases bundle size. Prefer migrating to `Filled`/`Regular` outright when you can.',
      ].join('\n'),
    },
  },
};
