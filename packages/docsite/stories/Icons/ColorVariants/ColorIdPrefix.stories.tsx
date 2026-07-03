import { Body1Stronger, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { CalendarColor } from '@fluentui/react-icons';
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

// Canonical `idPrefix` demo — re-exported by both the Color Variants page and the
// Recipes page so the demo stays defined in a single place (1:1, no duplication).
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
ColorIdPrefix.storyName = 'Rendering the same Color icon multiple times';
ColorIdPrefix.parameters = {
  docs: {
    description: {
      story:
        'Rendering the same `Color` variant more than once can break its gradients because SVG `id`s live in the global DOM namespace. Pass a unique `idPrefix` per instance to scope them. The left column (no `idPrefix`) loses its gradients when one instance is hidden; the right column (unique `idPrefix` per instance) renders correctly.',
    },
  },
};
