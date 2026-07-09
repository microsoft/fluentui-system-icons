import { AlertFilled } from '@fluentui/react-icons/fonts/alert';
import { SettingsRegular } from '@fluentui/react-icons/fonts/settings';
import { SendRegular } from '@fluentui/react-icons/fonts/send';
// SVG counterpart (the default `@fluentui/react-icons` export) for a like-for-like footprint comparison.
import { SendRegular as SendRegularSvg } from '@fluentui/react-icons';
import { makeStyles, tokens } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  // Reveals the icon's own box. The 1em width/height we set on font icons means
  // this outline is always a perfect square equal to the current font-size,
  // matching the SVG icon's box (and reserved before the webfont loads → no CLS).
  boxed: {
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorPaletteRedBorderActive,
  },
  boxRow: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXL,
    alignItems: 'center',
    fontSize: '64px',
  },
  paragraph: {
    maxWidth: '480px',
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
  },
  legend: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXL,
    marginBottom: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  legendItem: {
    display: 'flex',
    gap: tokens.spacingHorizontalS,
    alignItems: 'center',
  },
});

/**
 * Regression guard for the 1em box: font icons reserve a `1em × 1em` box (mirroring the resizable
 * SVG). The dashed outline shows the box is a perfect square equal to the current `font-size`, and
 * the SVG vs font pair share an identical footprint. Inline usage stays baseline-aligned with no
 * layout shift once the webfont loads.
 */
export const FontIconsBox = () => {
  const classes = useClasses();

  return (
    <div>
      <div className={classes.legend}>
        <span className={classes.legendItem}>
          <SendRegularSvg aria-hidden className={classes.boxed} style={{ fontSize: '24px' }} /> SVG (svg element)
        </span>
        <span className={classes.legendItem}>
          <SendRegular aria-hidden className={classes.boxed} style={{ fontSize: '24px' }} /> Font (i element)
        </span>
      </div>

      <div className={classes.boxRow}>
        <SendRegularSvg aria-label="Send SVG, boxed" className={classes.boxed} />
        <SendRegular aria-label="Send font, boxed" className={classes.boxed} />
        <AlertFilled aria-label="Alert font, boxed" className={classes.boxed} />
        <SettingsRegular aria-label="Settings font, boxed" className={classes.boxed} />
      </div>

      <p className={classes.paragraph}>
        Inline font icons such as <SettingsRegular aria-label="settings" /> and <AlertFilled aria-label="alert" /> stay
        aligned to the surrounding text and occupy a stable 1em box, so the line does not reflow when the icon font
        finishes loading.
      </p>
    </div>
  );
};

FontIconsBox.parameters = {
  docs: {
    description: {
      story: [
        'The dashed outline reveals each icon’s box — a perfect square equal to the current',
        '`font-size`. The SVG and font versions share an identical footprint, and inline font icons',
        'stay baseline-aligned with the surrounding text.',
      ].join(' '),
    },
  },
};
