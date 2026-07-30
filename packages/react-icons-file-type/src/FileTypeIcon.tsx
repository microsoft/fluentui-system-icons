import * as React from 'react';
import { useFileTypeIcon, renderFileTypeIcon } from './common/useFileTypeIcon';
import type { FileTypeIconProps } from './common/useFileTypeIcon';

export type { FileTypeIconProps, FileTypeIconState } from './common/useFileTypeIcon';
export { fileTypeIconDataAttribute, useFileTypeIcon, renderFileTypeIcon } from './common/useFileTypeIcon';

/**
 * Renders a file type icon as an `<img>` sourced from CDN-hosted assets.
 *
 * It composes {@link useFileTypeIcon} (state) and {@link renderFileTypeIcon} (render), and
 * ships **no** styling runtime — the `<img>` carries a `data-fui-filetype-icon` attribute and
 * the box behavior comes from a stylesheet you import once:
 *
 * ```ts
 * import '@fluentui/react-icons-file-type/styles.css';
 * ```
 *
 * Skip it only if you are styling the attribute (or a `className`) yourself; without either,
 * the icon renders without `display: inline-block` or `object-fit: contain`, so non-square
 * assets stretch inside the square `width`/`height` box.
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const state = useFileTypeIcon(props);
  return renderFileTypeIcon(state);
};
