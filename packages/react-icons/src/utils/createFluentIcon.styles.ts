import { makeStyles } from '@griffel/react';

export const useRootStyles = makeStyles({
  root: {
    // This style is required because browsers automatically have SVGs set to
    // forced-color-adjust: preserve-parent-color, which will not override
    // internally-defined colors in our SVG icons in high contrast mode.
    '@media (forced-colors: active)': {
      forcedColorAdjust: 'auto',
    },
  },
});
