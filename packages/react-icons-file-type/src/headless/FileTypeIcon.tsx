import * as React from 'react';
import { useFileTypeIcon, renderFileTypeIcon } from './useFileTypeIcon';
import type { FileTypeIconProps } from './useFileTypeIcon';

export type { FileTypeIconProps, FileTypeIconState } from './useFileTypeIcon';
export { fileTypeIconDataAttribute, useFileTypeIcon, renderFileTypeIcon } from './useFileTypeIcon';

/**
 * Headless (Griffel-free) file type icon. Renders an `<img>` sourced from CDN-hosted assets
 * and tagged with the `fileTypeIconDataAttribute` styling hook, but ships **no** styling
 * runtime — bring your own styles via `@fluentui/react-icons-file-type/headless/styles.css`, a
 * `className`, or your own CSS targeting `[data-fui-filetype-icon]`.
 *
 * It composes the shared {@link useFileTypeIcon} (state) and {@link renderFileTypeIcon} (render)
 * hooks; the default Griffel-styled entry point reuses the same hooks with an extra style hook.
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 *
 * Prefer the default `@fluentui/react-icons-file-type` entry point unless you specifically
 * want to avoid the Griffel runtime.
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const state = useFileTypeIcon(props);
  return renderFileTypeIcon(state);
};
