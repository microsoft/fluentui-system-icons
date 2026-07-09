import { AlertFilled } from '@fluentui/react-icons/fonts/alert';
import { SettingsRegular } from '@fluentui/react-icons/fonts/settings';
import { SendRegular } from '@fluentui/react-icons/fonts/send';
// SVG counterpart (the default `@fluentui/react-icons` export) for a like-for-like footprint comparison.
import { SendRegular as SendRegularSvg } from '@fluentui/react-icons';
import { makeStyles, tokens } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  row: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXL,
    alignItems: 'flex-start',
    marginBottom: tokens.spacingVerticalXL,
  },
  // A labelled cell: the boxed icon on top, its label below.
  cell: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: tokens.spacingVerticalS,
  },
  // Sizes the icon; the dashed outline then reveals its 1em square box.
  iconBox: {
    display: 'inline-flex',
    fontSize: '64px',
  },
  boxed: {
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorPaletteRedBorderActive,
  },
  label: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  sublabel: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
  paragraph: {
    maxWidth: '480px',
    fontSize: tokens.fontSizeBase400,
    lineHeight: tokens.lineHeightBase400,
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
      <div className={classes.row}>
        <div className={classes.cell}>
          <span className={classes.iconBox}>
            <SendRegularSvg aria-hidden className={classes.boxed} />
          </span>
          <span className={classes.label}>SVG icon</span>
          <span className={classes.sublabel}>&lt;svg&gt; element</span>
        </div>

        <div className={classes.cell}>
          <span className={classes.iconBox}>
            <SendRegular aria-hidden className={classes.boxed} />
          </span>
          <span className={classes.label}>Font icon</span>
          <span className={classes.sublabel}>&lt;i&gt; glyph</span>
        </div>
      </div>

      <p className={classes.paragraph}>
        Both dashed boxes are the same 1em square — the font icon reserves an identical footprint to the SVG icon.
        Inline font icons such as <SettingsRegular aria-label="settings" /> and <AlertFilled aria-label="alert" /> also
        stay baseline-aligned with the surrounding text.
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
