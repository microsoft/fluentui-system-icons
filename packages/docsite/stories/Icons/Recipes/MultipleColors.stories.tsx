import { makeStyles, mergeClasses } from '@fluentui/react-components';
import { ShieldLock48Filled, ShieldLock48Regular } from '@fluentui/react-icons';
import * as React from 'react';

const useStyles = makeStyles({
  // The wrapper is sized and positioned so the two absolutely-positioned
  // variants stack on top of each other in the same spot.
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    width: '48px',
    height: '48px',
  },
  icon: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  // Filled sits underneath and provides the fill color.
  filled: {
    zIndex: 1,
    color: '#ffb900',
  },
  // Regular sits on top and provides the outline color.
  regular: {
    zIndex: 2,
    color: '#d13438',
  },
});

export const MultipleColors = () => {
  const styles = useStyles();

  return (
    <span className={styles.wrapper}>
      <ShieldLock48Filled className={mergeClasses(styles.icon, styles.filled)} aria-hidden />
      <ShieldLock48Regular className={mergeClasses(styles.icon, styles.regular)} aria-label="Secured" />
    </span>
  );
};
MultipleColors.storyName = 'Using multiple colors for single-color icons';
MultipleColors.parameters = {
  docs: {
    description: {
      story:
        'Layer the `Filled` and `Regular` variants using absolute positioning. The `Filled` variant sits underneath and provides the fill color; the `Regular` variant sits on top and provides the outline color. Applying different colors per layer creates custom multi-color effects.',
    },
  },
};
