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

const BEFORE = 'Compose your message, then press the';
const AFTER = 'button to deliver it right away to everyone on the thread below.';

const useClasses = makeStyles({
  demo: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
    gap: tokens.spacingHorizontalXXXL,
    width: '100%',
    maxWidth: '720px',
  },
  column: {
    minWidth: '0',
  },
  heading: {
    marginBottom: tokens.spacingVerticalM,
    fontSize: tokens.fontSizeBase300,
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground2,
  },
  sentence: {
    margin: '0',
    fontSize: '24px',
    lineHeight: '28px',
    color: tokens.colorNeutralForeground1,
  },
  icon: {
    outlineWidth: '1px',
    outlineStyle: 'dashed',
    outlineColor: tokens.colorPaletteRedBorderActive,
  },
});

export const FontIconsInlineLayoutShift = () => {
  const classes = useClasses();

  return (
    <div className={classes.demo}>
      <div className={classes.column}>
        <div className={classes.heading}>Default inline flow</div>
        <p className={classes.sentence}>
          {BEFORE} <SendRegular aria-label="Send" className={classes.icon} /> {AFTER}
        </p>
      </div>

      <div className={classes.column}>
        <div className={classes.heading}>Layout containment</div>
        <p className={classes.sentence}>
          {BEFORE} <SendRegular aria-label="Send" className={classes.icon} style={{ contain: 'layout' }} /> {AFTER}
        </p>
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
        `<p align="center"><img alt="Font loading comparison: default inline flow versus a stable reserved icon box." src="${clsInlineDemoGif}" width="640" /></p>`,
      ].join('\n'),
    },
  },
};
