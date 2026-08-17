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
import clsDemoGif from './CLS-demo.gif';
import descriptionMd from './FontIconsLayoutShift.md';

const SLOT_PX = 32; // reserved icon box (1em at the chip's 32px font-size)
const GAP_PX = 8; // gap between the icon slot and the label
const PAD_X_PX = 20; // horizontal padding of the box

const useClasses = makeStyles({
  // Single box holding both cases so they can be compared (and watched during load) at a glance.
  box: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: tokens.spacingVerticalM,
    padding: `16px ${PAD_X_PX}px`,
    width: 'fit-content',
    borderRadius: tokens.borderRadiusMedium,
    outlineWidth: '1px',
    outlineStyle: 'solid',
    outlineColor: tokens.colorNeutralStroke2,
  },
  // Vertical guide at the reserved label's start (box padding + icon box + gap). Row 2's text sits
  // on it; row 1's text sits left of it while the glyph is still loading, then jumps onto it.
  guide: {
    position: 'absolute',
    top: '8px',
    bottom: '8px',
    left: `${PAD_X_PX + SLOT_PX + GAP_PX}px`,
    borderLeftWidth: '1px',
    borderLeftStyle: 'dashed',
    borderLeftColor: tokens.colorBrandStroke1,
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalL,
  },
  // Mimics a control (icon slot + text). Its `font-size` drives the icon's `1em` box.
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: `${GAP_PX}px`,
    fontSize: `${SLOT_PX}px`,
  },
  // Outline the icon slot so the reserved 1em box is visible even before the glyph paints.
  iconSlot: {
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorPaletteRedBorderActive,
  },
  label: {
    fontSize: tokens.fontSizeBase300,
  },
  caption: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
});

// Removing the reserved 1em box: the `<i>` falls back to content-driven width, which is 0 while the
// webfont's glyph is still invisible (`font-display: block`) — the pre-fix behaviour.
const UNRESERVED: React.CSSProperties = { width: 'auto', height: 'auto' };

/**
 * Real-loading illustration of the layout shift the `1em` box prevents, using the **headless** font
 * icons whose `@font-face` + box styles are shipped as an extracted static stylesheet.
 *
 * Both cases sit in one box, left-aligned, sharing a dashed vertical guide at the reserved label
 * position. While the icon webfont loads the glyph is invisible (`font-display: block`): row 1
 * (reservation removed) collapses to 0 width so its "Send" starts left of the guide and jumps onto
 * it when the glyph paints — a layout shift (CLS); row 2 (the default `1em` box) holds the space
 * and stays on the guide from first paint. The dashed icon outlines show the reserved box.
 *
 * To watch the shift live: open this story in the built Storybook, then in DevTools → Network
 * disable cache (and throttle), and reload.
 */
export const FontIconsLayoutShift = () => {
  const classes = useClasses();

  return (
    <div className={classes.box}>
      <div aria-hidden className={classes.guide} />

      <div className={classes.row}>
        <span className={classes.chip}>
          <SendRegular aria-hidden className={classes.iconSlot} style={UNRESERVED} />
          <span className={classes.label}>Send</span>
        </span>
        <span className={classes.caption}>reservation removed — shifts on load</span>
      </div>

      <div className={classes.row}>
        <span className={classes.chip}>
          <SendRegular aria-hidden className={classes.iconSlot} />
          <span className={classes.label}>Send</span>
        </span>
        <span className={classes.caption}>reserved 1em box (default) — stable</span>
      </div>
    </div>
  );
};

FontIconsLayoutShift.parameters = {
  docs: {
    description: {
      story: [
        descriptionMd,
        '',
        `<p align="center"><img alt="Throttled reload: the font icon without a reserved box collapses and its label shifts left, then jumps right when the glyph paints, while the reserved 1em icon stays stable." src="${clsDemoGif}" width="640" /></p>`,
      ].join('\n'),
    },
  },
};
