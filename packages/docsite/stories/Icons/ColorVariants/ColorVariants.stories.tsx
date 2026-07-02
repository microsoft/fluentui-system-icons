import { CalendarColor } from '@fluentui/react-icons';
import { Body1Stronger, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import * as React from 'react';

const useClasses = makeStyles({
  root: {
    display: 'flex',
    ...shorthands.gap('32px'),
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    ...shorthands.gap('8px'),
    ...shorthands.padding('12px'),
    ...shorthands.border('1px', 'solid', tokens.colorNeutralStroke2),
    borderRadius: tokens.borderRadiusMedium,
  },
  icons: {
    fontSize: '48px',
  },
  // Hiding one instance with display:none triggers the gradient ID collision
  // for any sibling that shares the same (unscoped) IDs.
  hidden: {
    display: 'none',
  },
});

export const ColorIdPrefix = () => {
  const classes = useClasses();

  return (
    <div className={classes.root}>
      <div className={classes.column}>
        <Body1Stronger>❌ Without idPrefix</Body1Stronger>
        <div className={classes.icons}>
          <CalendarColor className={classes.hidden} aria-hidden />
          <CalendarColor aria-label="Calendar without idPrefix" />
        </div>
      </div>

      <div className={classes.column}>
        <Body1Stronger>✅ With idPrefix</Body1Stronger>
        <div className={classes.icons}>
          <CalendarColor idPrefix="cal-a-" className={classes.hidden} aria-hidden />
          <CalendarColor idPrefix="cal-b-" aria-label="Calendar with idPrefix" />
        </div>
      </div>
    </div>
  );
};
