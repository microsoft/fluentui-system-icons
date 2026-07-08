import { AccessTimeRegular, AccessTimeFilled } from '@fluentui/react-icons/fonts/access-time';
import { AlertRegular, AlertFilled } from '@fluentui/react-icons/fonts/alert';
import { CalendarLtrRegular, CalendarLtrFilled } from '@fluentui/react-icons/fonts/calendar-ltr';
import { HomeRegular, HomeFilled } from '@fluentui/react-icons/fonts/home';
import { SettingsRegular, SettingsFilled } from '@fluentui/react-icons/fonts/settings';
import { makeStyles, tokens } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  gallery: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: tokens.spacingHorizontalL,
    alignItems: 'center',
    fontSize: '32px',
  },
});

/**
 * General showcase of the font-based icons (the `fluentIconFont` / `@fluentui/react-icons/fonts/*`
 * entry point). Each icon renders as an `<i>` glyph and inherits `color` + `font-size`.
 */
export const FontIcons = () => {
  const classes = useClasses();

  return (
    <div className={classes.gallery}>
      <AccessTimeRegular aria-label="AccessTime, regular" />
      <AccessTimeFilled aria-label="AccessTime, filled" />
      <AlertRegular aria-label="Alert, regular" />
      <AlertFilled aria-label="Alert, filled" />
      <CalendarLtrRegular aria-label="Calendar, regular" />
      <CalendarLtrFilled aria-label="Calendar, filled" />
      <HomeRegular aria-label="Home, regular" />
      <HomeFilled aria-label="Home, filled" />
      <SettingsRegular aria-label="Settings, regular" />
      <SettingsFilled aria-label="Settings, filled" />
    </div>
  );
};

FontIcons.parameters = {
  docs: {
    description: {
      story: [
        'Font icons are imported from the `@fluentui/react-icons/fonts/*` entry point and render as',
        '`<i>` glyph elements. Like the SVG icons they inherit `color` (via `currentColor` /',
        '`primaryFill`) and are sized with `font-size`.',
      ].join(' '),
    },
  },
};
