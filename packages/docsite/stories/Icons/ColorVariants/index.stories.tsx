import { CalendarColor } from '@fluentui/react-icons';
import { Body1Stronger, makeStyles, shorthands, tokens } from '@fluentui/react-components';
import { Controls, Description, Primary, Title } from '@storybook/addon-docs/blocks';
import * as React from 'react';

import descriptionMd from './ColorVariantsDescription.md';

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

export default {
  title: 'Icons/Color Variants',
  component: CalendarColor,
  parameters: {
    docs: {
      description: {
        component: descriptionMd,
      },
      // Single-story page: render the example once (Primary) and omit the
      // autodocs `Stories` block, which would otherwise repeat the same story.
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },
  argTypes: {
    idPrefix: {
      control: 'text',
      description:
        'Scopes the locally-defined SVG ids (gradients, clip paths, filters) of a `Color` variant per instance to avoid global DOM id collisions. Ignored by mono-color icons.',
      table: { defaultValue: '' },
      type: { name: 'string' },
    },
  },
};
