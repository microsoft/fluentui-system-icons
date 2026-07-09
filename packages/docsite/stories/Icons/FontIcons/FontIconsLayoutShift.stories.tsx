// Headless font icons render as `<i>` elements styled entirely by external CSS (no Griffel
// runtime). Importing the CSS here means the `@font-face` and the `1em` box rules ship as a real
// stylesheet — extracted to a static `<link>` in the production build (see `.storybook/main.ts`) —
// so the browser does real `font-display: block` loading, which is what makes the layout shift
// observable. (`css-loader` still resolves the font `url(...)`s so the subsetting plugin trims
// them.) The rest of the Font Icons stories intentionally stay on the Griffel entry point.
import '@fluentui/react-icons/headless/styles.css';
import '@fluentui/react-icons/headless/fonts/styles.css';
import { SendRegular } from '@fluentui/react-icons/headless/fonts/send';
import { makeStyles, tokens } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalL,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXL,
  },
  caption: {
    minWidth: '340px',
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  // Mimics a control (icon slot + text). Its `font-size` drives the icon's `1em` box.
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    fontSize: '32px',
  },
  label: {
    fontSize: tokens.fontSizeBase300,
  },
});

// Removing the reserved 1em box: the `<i>` falls back to content-driven width, which is 0 while the
// webfont's glyph is still invisible (`font-display: block`) — the pre-fix behaviour.
const UNRESERVED: React.CSSProperties = { width: 'auto', height: 'auto' };

/**
 * Real-loading illustration of the layout shift the `1em` box prevents, using the **headless** font
 * icons whose `@font-face` + box styles are shipped as an extracted static stylesheet.
 *
 * While the icon webfont is still loading, a font icon's glyph is invisible (`font-display: block`).
 * Without a reserved size the `<i>` collapses to 0 width and the following text sits to the left;
 * once the glyph paints, the text jumps right — a layout shift (CLS). The `1em` box holds the space
 * from first paint.
 *
 * To observe it: open this story in the built Storybook, then in DevTools → Network disable cache
 * (and throttle), and reload. Row 1 (reservation removed) shifts as the font paints; row 2 (the
 * default reserved box) stays put.
 */
export const FontIconsLayoutShift = () => {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <span className={classes.caption}>1. Reservation removed — collapses until the glyph paints, then shifts</span>
        <span className={classes.chip}>
          <SendRegular aria-hidden style={UNRESERVED} />
          <span className={classes.label}>Send</span>
        </span>
      </div>

      <div className={classes.row}>
        <span className={classes.caption}>2. Reserved 1em box (default) — stable from first paint</span>
        <span className={classes.chip}>
          <SendRegular aria-hidden />
          <span className={classes.label}>Send</span>
        </span>
      </div>
    </div>
  );
};

FontIconsLayoutShift.parameters = {
  docs: {
    description: {
      story: [
        'Uses the **headless** font icons, whose `@font-face` and `1em` box rules ship as a real',
        'stylesheet (extracted to a static `<link>` in the production build) rather than Griffel',
        'runtime CSS, so the browser performs real `font-display: block` loading.',
        '',
        'While the webfont loads the glyph is invisible; without a reserved size the `<i>` collapses to',
        '0 width and the following text sits left, then jumps right when the glyph paints — a layout',
        'shift. The `1em` box holds the space from first paint.',
        '',
        'To see it: in the built Storybook, DevTools → Network → disable cache + throttle, then reload.',
        'Row 1 (reservation removed) shifts; row 2 (the default reserved box) stays put.',
      ].join(' '),
    },
  },
};
