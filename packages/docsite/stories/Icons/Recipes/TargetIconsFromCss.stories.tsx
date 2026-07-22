// Headless icons ship no CSS-in-JS runtime — you opt into styling by importing
// the shipped vanilla CSS file once. This is the key difference from the standard API.
import '@fluentui/react-icons/headless/styles.css';
// Headless font icons additionally need their @font-face declarations.
// import '@fluentui/react-icons/headless/fonts/styles.css';

import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
// SVG icons (Griffel / CSS-in-JS)
import { AccessTimeFilled } from '@fluentui/react-icons/svg/access-time';
import { CalendarLtrRegular } from '@fluentui/react-icons/svg/calendar-ltr';
// Font icons — the same catalogue delivered as an icon font.
import { SendRegular } from '@fluentui/react-icons/fonts/send';
import { SettingsFilled } from '@fluentui/react-icons/fonts/settings';
// Headless icons — vanilla CSS, no Griffel runtime.
import { AlertRegular } from '@fluentui/react-icons/headless/svg/alert';
import { StarFilled } from '@fluentui/react-icons/headless/svg/star';
// Headless font icons — vanilla CSS + the icon font.
import { HomeFilled } from '@fluentui/react-icons/headless/fonts/home';
import { SearchRegular } from '@fluentui/react-icons/headless/fonts/search';
import * as React from 'react';

const useStyles = makeStyles({
  // A single rule styles *every* descendant icon at once — SVG, font, or headless —
  // via the `data-fui-icon` attribute they all render, no per-icon className required.
  toolbar: {
    display: 'flex',
    gap: '16px',
    padding: '12px',
    borderRadius: tokens.borderRadiusMedium,
    backgroundColor: tokens.colorNeutralBackground3,
    '& [data-fui-icon]': {
      color: tokens.colorBrandForeground1,
      fontSize: '32px',
    },
  },
  // A second scope proves the selector is scoped to its container: these icons
  // pick up a different color from the same attribute, with zero code changes
  // on the icons themselves.
  danger: {
    '& [data-fui-icon]': {
      color: tokens.colorPaletteRedForeground1,
    },
  },
});

// A mix of every delivery mechanism. The rendered markup differs per flavor
// (Griffel `<svg>`, Griffel font `<i>`, headless `<svg>`, headless font `<i>`),
// but each one emits the same `data-fui-icon` attribute — so the single CSS rule
// above styles them all.
const IconMix = () => (
  <>
    <AccessTimeFilled aria-label="Access time (SVG)" />
    <CalendarLtrRegular aria-label="Calendar (SVG)" />
    <SendRegular aria-label="Send (font)" />
    <SettingsFilled aria-label="Settings (font)" />
    <AlertRegular aria-label="Alert (headless SVG)" />
    <StarFilled aria-label="Star (headless SVG)" />
    <HomeFilled aria-label="Home (headless font)" />
    <SearchRegular aria-label="Search (headless font)" />
  </>
);

export const TargetIconsFromCss = () => {
  const styles = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div className={styles.toolbar}>
        <IconMix />
      </div>

      <div className={mergeClasses(styles.toolbar, styles.danger)}>
        <IconMix />
      </div>
    </div>
  );
};
TargetIconsFromCss.storyName = 'Target every icon from CSS';
TargetIconsFromCss.parameters = {
  docs: {
    description: {
      story: [
        'Every icon — SVG or font, Griffel or headless, `Filled`, `Regular`, sized or resizable — renders a **`data-fui-icon`** attribute.',
        'That gives you one universal selector, `[data-fui-icon]`, to style *all* icons within a scope from a single CSS rule,',
        'without adding a `className` to each icon.',
        '',
        'Each toolbar below mixes every delivery mechanism — Griffel SVG (`@fluentui/react-icons/svg/*`), Griffel font',
        '(`@fluentui/react-icons/fonts/*`), headless SVG (`@fluentui/react-icons/headless/svg/*`), and headless font',
        '(`@fluentui/react-icons/headless/fonts/*`). Their rendered markup differs (`<svg>` vs `<i>`), yet the same base rule',
        '(`& [data-fui-icon]` sets color + size) styles them all; the second toolbar layers a scoped override that recolors its icons.',
        '',
        'The attribute name is also exported as the `DATA_FUI_ICON` constant. For more specific targeting, icons also carry the',
        'class-name constants (`fui-Icon`, `fui-Icon-filled`, `fui-Icon-regular`, `fui-Icon-light`, `fui-Icon-color`, `fui-Icon-font`).',
      ].join('\n'),
    },
  },
};
