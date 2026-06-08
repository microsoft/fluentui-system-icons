import * as React from 'react';
import { mergeClasses } from '@griffel/react';
import { FileTypeIcon as FileTypeIconHeadless } from './headless/FileTypeIcon';
import type { FileTypeIconProps } from './headless/FileTypeIcon';
import { useFileTypeIconStyles } from './FileTypeIcon.styles';

export type { FileTypeIconProps } from './headless/FileTypeIcon';

/**
 * Renders a file type icon as an `<img>` sourced from CDN-hosted assets, styled with Griffel
 * (zero setup required). This is the default entry point.
 *
 * The component is a thin wrapper over the headless `FileTypeIcon` from
 * `@fluentui/react-icons-file-type/headless` — it layers the static Griffel styles on top via
 * `mergeClasses`. To avoid the Griffel runtime, import from the `/headless` subpath and provide
 * your own styles (see `headless/styles.css`).
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const styles = useFileTypeIconStyles();

  return <FileTypeIconHeadless {...props} className={mergeClasses(styles.root, props.className)} />;
};
