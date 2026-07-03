import { makeStyles, shorthands } from '@fluentui/react-components';
import { CalendarColor } from '@fluentui/react-icons';
import * as React from 'react';

const useStyles = makeStyles({
  row: {
    display: 'flex',
    ...shorthands.gap('16px'),
    fontSize: '48px',
  },
});

export const ScopingGradientIds = () => {
  const styles = useStyles();

  return (
    <div className={styles.row}>
      <CalendarColor idPrefix="cal-a-" aria-label="Calendar A" />
      <CalendarColor idPrefix="cal-b-" aria-label="Calendar B" />
    </div>
  );
};
ScopingGradientIds.storyName = 'Rendering the same Color icon multiple times';
ScopingGradientIds.parameters = {
  docs: {
    description: {
      story:
        'Rendering the same `Color` variant more than once can break its gradients because SVG `id`s live in the global DOM namespace. Pass a unique `idPrefix` per instance to scope them. See the [Color Variants](?path=/docs/icons-color-variants--docs#scoping-gradient-ids-with-idprefix) page for the full rationale and an interactive without/with comparison.',
    },
  },
};
