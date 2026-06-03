import { makeStyles } from '@griffel/react';

/**
 * Static styles for the `FileTypeIcon` image. Reproduces the box behavior the legacy
 * v8 icon registry applied (`overflow: hidden`) plus sensible image rendering defaults.
 * The dynamic `width`/`height` (which depend on the `size` prop) are applied inline by
 * the component.
 */
export const useFileTypeIconStyles = makeStyles({
  root: {
    display: 'inline-block',
    overflowX: 'hidden',
    overflowY: 'hidden',
    objectFit: 'contain',
  },
});
