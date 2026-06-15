import { makeStyles, mergeClasses } from '@griffel/react';
import type { FileTypeIconState } from './common/useFileTypeIcon';

/**
 * Static styles for the `FileTypeIcon` image. `object-fit: contain` keeps non-square assets
 * from being stretched within the square `width`/`height` box (both applied inline by the
 * state hook from the `size` prop). `object-fit` only affects replaced elements, so these
 * styles must live on the `<img>` itself, not on a wrapper.
 */
const useStyles = makeStyles({
  root: {
    display: 'inline-block',
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
