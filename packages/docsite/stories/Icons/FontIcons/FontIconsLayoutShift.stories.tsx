import { SendRegular } from '@fluentui/react-icons/fonts/send';
import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import * as React from 'react';

const SLOT_SIZE = '32px';

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
    minWidth: '320px',
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground3,
  },
  // The chip mimics a control (icon slot + text). Its `font-size` drives the icon box's `1em`.
  chip: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalS,
    fontSize: SLOT_SIZE,
  },
  label: {
    fontSize: tokens.fontSizeBase300,
  },
  // Stand-in for a font icon *before its glyph paints*: an inline-block with no rendered
  // content. A dashed box + background makes the reserved footprint visible.
  iconBox: {
    display: 'inline-block',
    lineHeight: '1em',
    backgroundColor: tokens.colorBrandBackground2,
    borderRadius: tokens.borderRadiusSmall,
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorBrandStroke1,
  },
  // Pre-fix: no size reservation → the empty inline-block collapses to 0, so the text slides left.
  unreserved: {},
  // The fix: reserve a 1em square up front, so the text stays put regardless of glyph paint.
  reserved: {
    width: '1em',
    height: '1em',
  },
});

/**
 * Deterministic illustration of the layout shift the `1em` box prevents.
 *
 * A font icon renders an `<i>` whose box, before the webfont paints its glyph, is empty. Without a
 * reserved size that empty box collapses to 0 width and the following text slides left; once the
 * font loads and the glyph paints, the text jumps back — a layout shift (CLS). Reserving a
 * `1em × 1em` box holds the space up front, so the layout is stable from first paint.
 *
 * Rows 1 and 2 model the "font still loading" state (empty icon box). Compare the "Send" text
 * position: row 1 (unreserved) sits left and would jump to row 3's position on load; row 2
 * (reserved, the fix) already matches row 3 (the loaded glyph), so nothing shifts.
 */
export const FontIconsLayoutShift = () => {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <span className={classes.caption}>1. No reservation, font loading — box collapses, text shifts left</span>
        <span className={classes.chip}>
          <span aria-hidden className={mergeClasses(classes.iconBox, classes.unreserved)} />
          <span className={classes.label}>Send</span>
        </span>
      </div>

      <div className={classes.row}>
        <span className={classes.caption}>2. Reserved 1em box (the fix), font loading — space held, text stable</span>
        <span className={classes.chip}>
          <span aria-hidden className={mergeClasses(classes.iconBox, classes.reserved)} />
          <span className={classes.label}>Send</span>
        </span>
      </div>

      <div className={classes.row}>
        <span className={classes.caption}>3. Font loaded — glyph fills the reserved box (matches row 2)</span>
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
        'A font icon renders an `<i>` whose box is empty until the webfont paints its glyph. Without a',
        'reserved size that empty box collapses to 0 width, so following text slides left and then',
        'jumps back once the glyph paints — a layout shift (CLS). The `1em × 1em` box holds the space',
        'up front.',
        '',
        'Compare the **Send** text position: row 1 (unreserved) sits left and would jump to row 3 on',
        'load; row 2 (reserved — the fix) already matches row 3 (the loaded glyph), so nothing shifts.',
      ].join(' '),
    },
  },
};
