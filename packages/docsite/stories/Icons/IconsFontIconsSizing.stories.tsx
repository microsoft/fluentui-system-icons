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

const useClasses = makeStyles({
  row: {
    display: 'flex',
    gap: tokens.spacingHorizontalL,
    alignItems: 'flex-end',
  },
});

/**
 * Resizable font icons scale with `font-size`; sized font icons render at their baked-in design
 * size by default (and remain overridable).
 */
export const FontIconsSizing = () => {
  const classes = useClasses();

  return (
    <div className={classes.row}>
      {/* Resizable variant scaled purely via fontSize */}
      <SendRegular aria-label="Send, 16px" fontSize="16px" />
      <SendRegular aria-label="Send, 24px" fontSize="24px" />
      <SendRegular aria-label="Send, 32px" fontSize="32px" />
      <SendRegular aria-label="Send, 48px" fontSize="48px" />
      {/* Sized variants at their baked-in default size (no fontSize passed) */}
      <Send16Regular aria-label="Send 16, native size" />
      <Send20Regular aria-label="Send 20, native size" />
      <Send24Regular aria-label="Send 24, native size" />
      <Send28Regular aria-label="Send 28, native size" />
      <Send32Regular aria-label="Send 32, native size" />
      <Send48Regular aria-label="Send 48, native size" />
    </div>
  );
};

FontIconsSizing.parameters = {
  docs: {
    description: {
      story: [
        'The first row is the **resizable** `SendRegular` scaled only with `fontSize`.',
        'The second row is the **sized** variants (`Send16Regular` … `Send48Regular`) rendered at',
        'their baked-in default size with no `fontSize` prop.',
      ].join(' '),
    },
  },
};
