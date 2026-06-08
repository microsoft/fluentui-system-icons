// Headless (Griffel-free) entry point for `@fluentui/react-icons-file-type/headless`.
// Re-exports the styling-runtime-free `FileTypeIcon` plus the shared, framework-agnostic
// pieces (provider, context, `FileIconType`, constants) so this subpath is fully usable
// without pulling in `@griffel/react`.
export { FileTypeIcon, fileTypeIconDataAttribute } from './FileTypeIcon';
export type { FileTypeIconProps } from './FileTypeIcon';

export { FileTypeIconsProvider, useFileTypeIconsContext } from '../FileTypeIconsContext';
export type { FileTypeIconsContextValue, FileTypeIconsProviderProps } from '../FileTypeIconsContext';

export { FileIconType } from '../FileIconType';
export type { FileIconTypeInput } from '../FileIconType';

export { DEFAULT_BASE_URL, FLUENT_CDN_BASE_URL, DEFAULT_ICON_SIZE, ICON_SIZES } from '../constants';
export type { FileTypeIconSize, ImageFileType } from '../constants';
