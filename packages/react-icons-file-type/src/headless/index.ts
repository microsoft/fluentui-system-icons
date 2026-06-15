// Headless (Griffel-free) entry point for `@fluentui/react-icons-file-type/headless`.
// Re-exports the styling-runtime-free `FileTypeIcon` plus the shared, framework-agnostic
// pieces (provider, context, `FileIconType`, constants) so this subpath is fully usable
// without pulling in `@griffel/react`.
export { FileTypeIcon, fileTypeIconDataAttribute } from './FileTypeIcon';
export type { FileTypeIconProps } from './FileTypeIcon';

export { FileTypeIconsProvider, useFileTypeIconsContext } from '../common/FileTypeIconsContext';
export type { FileTypeIconsContextValue, FileTypeIconsProviderProps } from '../common/FileTypeIconsContext';

export { FileIconType } from '../common/FileIconType';
export type { FileIconTypeInput } from '../common/FileIconType';

export { DEFAULT_BASE_URL, FLUENT_CDN_BASE_URL, DEFAULT_ICON_SIZE, ICON_SIZES } from '../common/constants';
export type { FileTypeIconSize, ImageFileType } from '../common/constants';
