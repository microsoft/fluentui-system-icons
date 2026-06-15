import { makeStyles, mergeClasses } from '@griffel/react';
import type { FileTypeIconState } from './common/useFileTypeIcon';

/**
 * Static styles for the `FileTypeIcon` image. Reproduces the box behavior the legacy
 * v8 icon registry applied (`overflow: hidden`) plus sensible image rendering defaults.
 * The dynamic `width`/`height` (which depend on the `size` prop) are applied inline by
 * the state hook.
 */
const useStyles = makeStyles({
  root: {
    display: 'inline-block',
    overflowX: 'hidden',
    overflowY: 'hidden',
    objectFit: 'contain',
  },
});

/**
 * Style hook: layers the Griffel `root` class onto a resolved {@link FileTypeIconState},
 * merging ahead of any consumer-provided `className`. Mutates and returns the same state,
 * following the Fluent v9 style-hook convention.
 */
export function useFileTypeIconStyles(state: FileTypeIconState): FileTypeIconState {
  const styles = useStyles();
  state.className = mergeClasses(styles.root, state.className);
  return state;
}
