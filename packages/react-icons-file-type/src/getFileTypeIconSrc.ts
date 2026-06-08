import { getFileTypeIconExtensionMap } from './fileTypeIconMap.generated';
import { FileIconType } from './FileIconType';
import type { FileIconTypeInput } from './FileIconType';
import { DEFAULT_BASE_URL, DEFAULT_ICON_SIZE } from './constants';
import type { FileTypeIconSize, ImageFileType } from './constants';

const GENERIC_FILE = 'genericfile';
const FOLDER = 'folder';
const SHARED_FOLDER = 'sharedfolder';
const DOCSET_FOLDER = 'docset';
const LIST_ITEM = 'listitem';
const LIST = 'splist';
const MULTIPLE_ITEMS = 'multiple';
const NEWS = 'sponews';
const STREAM = 'video';
const DESKTOP_FOLDER = 'desktopfolder';
const DOCUMENTS_FOLDER = 'documentsfolder';
const PICTURES_FOLDER = 'picturesfolder';
const LINKED_FOLDER = 'linkedfolder';
const FORM = 'form';
const SWAY = 'sway';
const PLAYLIST = 'playlist';
const LOOP_WORKSPACE = 'loopworkspace';
const TODOITEM = 'todoitem';
const PLANNER = 'planner';
const PORTFOLIO = 'portfolio';
const ALBUM = 'album';
const LIST_FORM = 'listform';
const CAMPAIGN = 'spocampaign';
const SHORTCUTS_DEFAULT_FOLDER = 'companyfolder';

/**
 * Maps a numeric {@link FileIconType} value to its icon base name. Indexed by the
 * enum value so a lookup replaces a per-case `switch`. Values without an entry
 * (e.g. `genericFile`) fall back to {@link GENERIC_FILE}.
 */
const TYPE_TO_ICON_NAME: { [type: number]: string } = {
  [FileIconType.docset]: DOCSET_FOLDER,
  [FileIconType.folder]: FOLDER,
  [FileIconType.listItem]: LIST_ITEM,
  [FileIconType.sharedFolder]: SHARED_FOLDER,
  [FileIconType.stream]: STREAM,
  [FileIconType.multiple]: MULTIPLE_ITEMS,
  [FileIconType.news]: NEWS,
  [FileIconType.desktopFolder]: DESKTOP_FOLDER,
  [FileIconType.documentsFolder]: DOCUMENTS_FOLDER,
  [FileIconType.picturesFolder]: PICTURES_FOLDER,
  [FileIconType.linkedFolder]: LINKED_FOLDER,
  [FileIconType.list]: LIST,
  [FileIconType.form]: FORM,
  [FileIconType.sway]: SWAY,
  [FileIconType.playlist]: PLAYLIST,
  [FileIconType.loopworkspace]: LOOP_WORKSPACE,
  [FileIconType.planner]: PLANNER,
  [FileIconType.todoItem]: TODOITEM,
  [FileIconType.portfolio]: PORTFOLIO,
  [FileIconType.album]: ALBUM,
  [FileIconType.listForm]: LIST_FORM,
  [FileIconType.campaign]: CAMPAIGN,
  [FileIconType.shortcutsdefaultfolder]: SHORTCUTS_DEFAULT_FOLDER,
};

/**
 * The icon-identifying options shared by the `FileTypeIcon` component and the
 * standalone resolvers: which icon (by `extension` or `type`), at what `size`,
 * and in which image format.
 */
export interface FileTypeIconOptions {
  /**
   * The file extension, such as `pptx`, for which an icon is needed. For file type icons
   * that are not associated with a file extension, such as `folder`, use the `type` property.
   */
  extension?: string;
  /**
   * The type of file type icon needed. Use this for icons that are not associated with a
   * file extension, such as `folder`.
   */
  type?: FileIconTypeInput;
  /**
   * The size of the icon in pixels.
   * @default 16
   */
  size?: FileTypeIconSize;
  /**
   * The image format to use.
   * @default 'svg'
   */
  imageFileType?: ImageFileType;
}

/**
 * Resolves the icon base name (e.g. `docx`) for the given file `extension` or
 * {@link FileIconType}. Extension takes precedence over type; unknown or absent
 * inputs fall back to the generic file icon.
 */
export function getFileTypeIconNameFromExtensionOrType(
  extension: string | undefined,
  type: FileIconType | undefined,
): string {
  if (extension) {
    // Strip periods, force lowercase.
    extension = extension.replace('.', '').toLowerCase();
    return getFileTypeIconExtensionMap()[extension] || GENERIC_FILE;
  } else if (type) {
    return TYPE_TO_ICON_NAME[type] || GENERIC_FILE;
  }
  return GENERIC_FILE;
}

/**
 * Resolves the size/density suffix (e.g. `96_svg`, `96_3x_png`) used to select the
 * published asset for the given `size`, `imageFileType`, and device pixel ratio.
 */
export function getFileTypeIconSuffix(
  size: FileTypeIconSize,
  imageFileType: ImageFileType = 'svg',
  win?: Window,
): string {
  // The target window is supplied by the caller (resolved from the
  // `FileTypeIconsProvider` context). Default the device pixel ratio to 1
  // (the standard-density asset) when no window is available, e.g. during SSR.
  const devicePixelRatio: number = win?.devicePixelRatio ?? 1;
  let devicePixelRatioSuffix = ''; // Default is 1x

  // SVGs scale well, so you can generally use the default image.
  // 1.5x is a special case where SVGs need a different image.
  if (imageFileType === 'svg' && devicePixelRatio > 1 && devicePixelRatio <= 1.5) {
    // Currently missing 1.5x SVGs at size 20, snap to 1x for now
    if (size !== 20) {
      devicePixelRatioSuffix = '_1.5x';
    }
  } else if (imageFileType === 'png') {
    // To look good, PNGs should use a different image for higher device pixel ratios
    if (devicePixelRatio > 1 && devicePixelRatio <= 1.5) {
      // Currently missing 1.5x icons for size 20, snap to 2x for now
      devicePixelRatioSuffix = size === 20 ? '_2x' : '_1.5x';
    } else if (devicePixelRatio > 1.5 && devicePixelRatio <= 2) {
      devicePixelRatioSuffix = '_2x';
    } else if (devicePixelRatio > 2 && devicePixelRatio <= 3) {
      devicePixelRatioSuffix = '_3x';
    } else if (devicePixelRatio > 3) {
      devicePixelRatioSuffix = '_4x';
    }
  }

  return size + devicePixelRatioSuffix + '_' + imageFileType;
}

/**
 * Resolves the CDN-relative source URL for a file type icon.
 *
 * This is the internal resolver used by the `FileTypeIcon` component.
 *
 * @param options - the file type icon options (extension/type, size, imageFileType)
 * @param baseUrl - the base url to resolve the asset against. Defaults to the Fluent CDN.
 * @param win - the window used to resolve the device pixel ratio. Defaults to standard density (1x) when omitted.
 * @returns the fully-qualified icon url, or `undefined` if it could not be resolved.
 */
export function getFileTypeIconSrc(
  options: FileTypeIconOptions,
  baseUrl: string = DEFAULT_BASE_URL,
  win?: Window,
): string | undefined {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx
  const baseSuffix = getFileTypeIconSuffix(size, imageFileType, win); // eg: 96_3x_svg or 96_png
  const suffixArray = baseSuffix.split('_'); // eg: ['96', '3x', 'svg']

  if (suffixArray.length === 3) {
    /** suffix is of type 96_3x_svg - it has a pixel ratio > 1 */
    return `${baseUrl}${size}_${suffixArray[1]}/${baseIconName}.${suffixArray[2]}`;
  } else if (suffixArray.length === 2) {
    /** suffix is of type 96_svg - it has a pixel ratio of 1 */
    return `${baseUrl}${size}/${baseIconName}.${suffixArray[1]}`;
  }

  return undefined;
}
