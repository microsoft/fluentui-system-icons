import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
// SVG icons — an <svg> element per icon.
import { AccessTimeFilled } from '@fluentui/react-icons/svg/access-time';
import { CalendarLtrRegular } from '@fluentui/react-icons/svg/calendar-ltr';
import { AlertRegular } from '@fluentui/react-icons/svg/alert';
// Font icons — the same catalogue delivered as an icon font, rendered as <i>.
import { SendRegular } from '@fluentui/react-icons/fonts/send';
import { SettingsFilled } from '@fluentui/react-icons/fonts/settings';
import { HomeFilled } from '@fluentui/react-icons/fonts/home';
import * as React from 'react';

const useStyles = makeStyles({
  // A single rule styles *every* descendant icon at once — SVG or font — via the
  // `data-fui-icon` attribute they all render, no per-icon className required.
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

// A mix of both delivery mechanisms. The rendered markup differs (`<svg>` vs `<i>`),
// but each one emits the same `data-fui-icon` attribute — so the single CSS rule
// above styles them all.
const IconMix = () => (
  <>
    <AccessTimeFilled aria-label="Access time (SVG)" />
    <CalendarLtrRegular aria-label="Calendar (SVG)" />
    <AlertRegular aria-label="Alert (SVG)" />
    <SendRegular aria-label="Send (font)" />
    <SettingsFilled aria-label="Settings (font)" />
    <HomeFilled aria-label="Home (font)" />
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
        'Every icon — SVG or font, `Filled`, `Regular`, sized or resizable — renders a **`data-fui-icon`** attribute.',
        'That gives you one universal selector, `[data-fui-icon]`, to style *all* icons within a scope from a single CSS rule,',
        'without adding a `className` to each icon.',
        '',
        'Each toolbar below mixes both delivery mechanisms — SVG (`@fluentui/react-icons/svg/*`) and font',
        '(`@fluentui/react-icons/fonts/*`). Their rendered markup differs (`<svg>` vs `<i>`), yet the same base rule',
        '(`& [data-fui-icon]` sets color + size) styles them all; the second toolbar layers a scoped override that recolors its icons.',
        '',
        'The attribute name is also exported as the `DATA_FUI_ICON` constant. For more specific targeting, icons also carry the',
        'class-name constants (`fui-Icon`, `fui-Icon-filled`, `fui-Icon-regular`, `fui-Icon-light`, `fui-Icon-color`, `fui-Icon-font`).',
        '',
        'These attributes are the same ones the package’s own stylesheet targets — see the',
        '[Styling](?path=/docs/icons-styling--docs) page. Your rules win over it: its base rule is wrapped in `:where()`,',
        'so it carries zero specificity. Its `[data-fui-icon-hidden]` rule deliberately is not, which is why an application',
        'organising CSS with `@layer` has to assign the stylesheet a layer before its own layered rules can override that one.',
      ].join('\n'),
    },
  },
};
