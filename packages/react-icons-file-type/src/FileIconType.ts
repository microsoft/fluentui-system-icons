/**
 * Enumerates special file type icons that do not map to any file extensions.
 * For example, the 'pptx' icon maps to the extensions 'ppt', 'pptm', 'pptx',
 * but the 'folder' icon does not map to any extensions and should be obtained
 * via this enum.
 *
 * Implemented as a `const` object (rather than a TypeScript `enum`) so it does not
 * emit a runtime reverse-mapping. The merged `FileIconType` type below lets it be
 * used as both a value (`FileIconType.folder`) and a type (`type: FileIconType`),
 * preserving the ergonomics of the previous `enum`.
 */
export const FileIconType = {
  docset: 1, // Start at 1 so it will evaluate as "truthy"
  folder: 2,
  genericFile: 3,
  listItem: 4,
  sharedFolder: 5,
  multiple: 6,
  stream: 7,
  news: 8,
  desktopFolder: 9,
  documentsFolder: 10,
  picturesFolder: 11,
  linkedFolder: 12,
  list: 13,
  form: 14,
  sway: 15,
  playlist: 16,
  loopworkspace: 17,
  planner: 18,
  todoItem: 19,
  portfolio: 20,
  album: 21,
  listForm: 22,
  campaign: 23,
  shortcutsdefaultfolder: 24,
} as const;

export type FileIconType = (typeof FileIconType)[keyof typeof FileIconType];

/**
 * Numeric input form of {@link FileIconType}, accepted by the `type` prop / option.
 * Structurally identical to `FileIconType` (`1 | 2 | … | 24`); kept as a named alias
 * for API stability and call-site readability.
 */
export type FileIconTypeInput = FileIconType;
