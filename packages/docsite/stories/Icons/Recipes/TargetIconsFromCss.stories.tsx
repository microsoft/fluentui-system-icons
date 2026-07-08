import { makeStyles, mergeClasses, tokens } from '@fluentui/react-components';
import { AccessTimeFilled, CalendarLtrRegular, SendRegular, SettingsFilled } from '@fluentui/react-icons';
import * as React from 'react';

const useStyles = makeStyles({
  // A single rule styles *every* descendant icon at once via the `data-fui-icon`
  // attribute that all icons render — no per-icon className required.
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

export const TargetIconsFromCss = () => {
  const styles = useStyles();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div className={styles.toolbar}>
        <AccessTimeFilled aria-label="Access time" />
        <CalendarLtrRegular aria-label="Calendar" />
        <SendRegular aria-label="Send" />
        <SettingsFilled aria-label="Settings" />
      </div>

      <div className={mergeClasses(styles.toolbar, styles.danger)}>
        <AccessTimeFilled aria-label="Access time" />
        <CalendarLtrRegular aria-label="Calendar" />
        <SendRegular aria-label="Send" />
        <SettingsFilled aria-label="Settings" />
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
        'The two toolbars below share the same base rule (`& [data-fui-icon]` sets color + size); the second layers a scoped',
        'override that recolors its icons — the icon markup is identical in both.',
        '',
        'The attribute name is also exported as the `DATA_FUI_ICON` constant. For more specific targeting, icons also carry the',
        'class-name constants (`fui-Icon`, `fui-Icon-filled`, `fui-Icon-regular`, `fui-Icon-light`, `fui-Icon-color`, `fui-Icon-font`).',
      ].join('\n'),
    },
  },
};
