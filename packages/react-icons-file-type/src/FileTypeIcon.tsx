import * as React from 'react';
import { useFileTypeIcon, renderFileTypeIcon } from './headless/useFileTypeIcon';
import type { FileTypeIconProps } from './headless/useFileTypeIcon';
import { useFileTypeIconStyles } from './FileTypeIcon.styles';

export type { FileTypeIconProps } from './headless/useFileTypeIcon';

/**
 * Renders a file type icon as an `<img>` sourced from CDN-hosted assets, styled with Griffel
 * (zero setup required). This is the default entry point.
 *
 * It composes the same state ({@link useFileTypeIcon}) and render ({@link renderFileTypeIcon})
 * hooks as the headless `FileTypeIcon`, inserting a Griffel style hook in between to layer the
 * static styles. To avoid the Griffel runtime, import from the `/headless` subpath and provide
 * your own styles (see `headless/styles.css`).
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const state = useFileTypeIcon(props);
  useFileTypeIconStyles(state);
  return renderFileTypeIcon(state);
};
