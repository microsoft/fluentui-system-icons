import { Body1Stronger, Button, makeStyles, tokens } from '@fluentui/react-components';
import { CalendarColor } from '@fluentui/react-icons';
import * as React from 'react';

import description from './ColorIdPrefix.md';

const useClasses = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'flex-start',
  },
  columns: {
    display: 'flex',
    gap: '32px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '12px',
    border: `1px solid ${tokens.colorNeutralStroke2}`,
    borderRadius: tokens.borderRadiusMedium,
  },
  icons: {
    fontSize: '48px',
  },
  hidden: {
    display: 'none',
  },
});

// `idPrefix` recipe: scope a Color icon's gradient/clip-path/filter ids so the
// same icon can render multiple times without id collisions. The Color Variants
// concept page links here rather than duplicating the demo.
export const ColorIdPrefix = () => {
  const classes = useClasses();
  // Toggling `display: none` on one instance is what triggers the gradient ID
  // collision: the removed <defs> take the shared (unscoped) ids with them.
  const [hidden, setHidden] = React.useState(false);

  return (
    <div className={classes.root}>
      <Button onClick={() => setHidden((value) => !value)}>
        {hidden ? 'Show first instance' : 'Hide first instance (display: none)'}
      </Button>

      <div className={classes.columns}>
        <div className={classes.column}>
          <Body1Stronger>❌ Without idPrefix</Body1Stronger>
          <div className={classes.icons}>
            <CalendarColor
              className={hidden ? classes.hidden : undefined}
              aria-hidden={hidden}
              aria-label="Calendar A"
            />
            <CalendarColor aria-label="Calendar B" />
          </div>
        </div>

        <div className={classes.column}>
          <Body1Stronger>✅ With idPrefix</Body1Stronger>
          <div className={classes.icons}>
            <CalendarColor
              idPrefix="cal-a-"
              className={hidden ? classes.hidden : undefined}
              aria-hidden={hidden}
              aria-label="Calendar A"
            />
            <CalendarColor idPrefix="cal-b-" aria-label="Calendar B" />
          </div>
        </div>
      </div>
    </div>
  );
};
ColorIdPrefix.storyName = 'Rendering the same Color icon multiple times';
ColorIdPrefix.parameters = {
  docs: {
    description: {
      story: description,
    },
  },
};
