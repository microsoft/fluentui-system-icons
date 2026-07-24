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
import clsInlineDemoGif from './CLS-inline-demo.gif';
import descriptionMd from './FontIconsInlineLayoutShift.md';

// The sentence wraps to a few lines so the inline icon sits mid-flow and enough text follows it for
// the vertical drop to be obvious. Both columns render the same words with a 1em icon box, so they
// wrap identically and start aligned.
const BEFORE = 'Compose your message, then press the';
const AFTER = 'button to deliver it right away to everyone on the thread below.';

// Opts the icon out of the fix: `overflow: visible` restores the default inline-block baseline
// (derived from the glyph), which moves when the webfont's metrics swap in — the pre-fix behaviour.
// The shipped default is `overflow: hidden`, which pins the baseline to the box's bottom edge.
const PRE_FIX: React.CSSProperties = { overflow: 'visible' };

const useClasses = makeStyles({
  demo: {
    display: 'flex',
    gap: tokens.spacingHorizontalXXXL,
    width: 'fit-content',
    padding: '24px',
    borderRadius: tokens.borderRadiusMedium,
    outlineWidth: '1px',
    outlineStyle: 'solid',
    outlineColor: tokens.colorNeutralStroke2,
  },
  column: {
    width: '320px',
  },
  heading: {
    marginBottom: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  // Normal inline text flow — deliberately NOT a flex chip, so the inline baseline drives layout.
  // `relative` so the shared guide can be anchored to this paragraph's bottom edge.
  sentence: {
    position: 'relative',
    margin: '0',
    fontSize: '24px',
    lineHeight: '40px',
    color: tokens.colorNeutralForeground1,
  },
  // A full-width dashed guide pinned to the reference paragraph's bottom (`top: 100%`, no magic
  // numbers). The reference paragraph never changes height, so the guide is a fixed baseline; the
  // font-icon paragraph starts flush with it, then grows past it when the webfont paints.
  guide: {
    position: 'absolute',
    top: '100%',
    left: '0',
    width: '712px', // spans both 320px columns + the XXXL gap
    borderTopWidth: '1px',
    borderTopStyle: 'dashed',
    borderTopColor: tokens.colorBrandStroke1,
    pointerEvents: 'none',
  },
  // Outline the icon slot so its reserved 1em box is visible even before the glyph paints.
  iconSlot: {
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorPaletteRedBorderActive,
  },
  caption: {
    marginTop: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
});

/**
 * Before/after regression demo of the inline **vertical** layout shift, using the **headless** font
 * icons (real `font-display: block` loading) in **normal inline text flow** rather than a
 * `display: flex` chip like the other Font Icons stories.
 *
 * Both columns render the same sentence with the same 1em font icon, so they wrap identically and
 * start flush with the dashed guide (pinned to the stable column's paragraph bottom). The left
 * column is the shipped default (`overflow: hidden`), which pins the inline-block baseline to the
 * box's bottom edge — font-independent, so it stays put. The right column opts out
 * (`overflow: visible`), restoring the glyph-derived baseline: while the webfont loads its
 * paragraph sits on the guide, then the baseline shifts as the glyph paints, growing the line box
 * so the paragraph's lower lines drop below the guide — the layout shift the fix removes.
 *
 * To watch the shift live: open this story in the built Storybook, then in DevTools → Network
 * disable cache (and throttle), and reload.
 */
export const FontIconsInlineLayoutShift = () => {
  const classes = useClasses();

  return (
    <div className={classes.demo}>
      <div className={classes.column}>
        <div className={classes.heading}>overflow: hidden (default) — stable</div>
        <p className={classes.sentence}>
          {BEFORE} <SendRegular aria-label="Send" className={classes.iconSlot} /> {AFTER}
          <span aria-hidden className={classes.guide} />
        </p>
      </div>

      <div className={classes.column}>
        <div className={classes.heading}>overflow: visible (pre-fix) — shifts on load</div>
        <p className={classes.sentence}>
          {BEFORE} <SendRegular aria-label="Send" className={classes.iconSlot} style={PRE_FIX} /> {AFTER}
        </p>
        <div className={classes.caption}>
          Restoring the glyph-derived baseline lets the line box grow when the webfont paints, dropping the text below
          the shared guide.
        </div>
      </div>
    </div>
  );
};

FontIconsInlineLayoutShift.parameters = {
  docs: {
    description: {
      story: [
        descriptionMd,
        '',
        `<p align="center"><img alt="Throttled reload: the font icon with the reservation opted out (overflow: visible) shifts its inline text down as the glyph paints, while the default overflow: hidden icon stays stable." src="${clsInlineDemoGif}" width="640" /></p>`,
      ].join('\n'),
    },
  },
};
