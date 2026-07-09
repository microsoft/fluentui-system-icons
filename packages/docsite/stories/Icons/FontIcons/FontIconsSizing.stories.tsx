import {
  SendRegular,
  Send16Regular,
  Send20Regular,
  Send24Regular,
  Send28Regular,
  Send32Regular,
  Send48Regular,
} from '@fluentui/react-icons/fonts/send';
import { makeStyles, tokens } from '@fluentui/react-components';
import * as React from 'react';

const SIZES = [16, 20, 24, 28, 32, 48] as const;

// Purpose-built (optically tuned) sized variant for each size.
const SIZED = {
  16: Send16Regular,
  20: Send20Regular,
  24: Send24Regular,
  28: Send28Regular,
  32: Send32Regular,
  48: Send48Regular,
};

const useClasses = makeStyles({
  table: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr 1fr',
    alignItems: 'center',
    justifyItems: 'center',
    columnGap: tokens.spacingHorizontalXXL,
    rowGap: tokens.spacingVerticalL,
    width: 'fit-content',
  },
  head: {
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  sizeLabel: {
    justifySelf: 'end',
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground3,
  },
});

/**
 * Side-by-side comparison of the two ways to render a given size: the resizable variant scaled with
 * `font-size`, next to the purpose-built sized variant at its native size.
 */
export const FontIconsSizing = () => {
  const classes = useClasses();

  return (
    <div className={classes.table}>
      <span />
      <span className={classes.head}>resizable · font-size</span>
      <span className={classes.head}>sized · native</span>

      {SIZES.map((size) => {
        const Sized = SIZED[size];
        return (
          <React.Fragment key={size}>
            <span className={classes.sizeLabel}>{size}px</span>
            <SendRegular aria-label={`Send resizable at ${size}px`} style={{ fontSize: `${size}px` }} />
            <Sized aria-label={`Send${size}, native size`} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

FontIconsSizing.parameters = {
  docs: {
    description: {
      story: [
        'Each row shows one size two ways: the **resizable** `SendRegular` scaled to that `font-size`,',
        'next to the purpose-built **sized** variant (`Send16Regular` … `Send48Regular`) at its native',
        'size.',
        '',
        'The sized variants are optically tuned per size, so at the extremes they differ from the',
        'resizable icon (which is the 20px artwork scaled). Font icons are sized with CSS `font-size`',
        '(a `className`/`style`, or an inherited `font-size`) — not the SVG-only `fontSize` prop.',
      ].join('\n'),
    },
  },
};
