import { getFileTypeIconExtensionMap } from './fileTypeIconMap.generated';
import { FileIconType } from './FileIconType';
import type { FileIconTypeInput } from './FileIconType';
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

export interface FileTypeIconOptions {
  /**
   * The file extension, such as .pptx, for which you need an icon.
   * For file type icons that are not associated with a file
   * extension, such as folder, use the type property.
   */
  extension?: string;
  /**
   * The type of file type icon you need. Use this property for
   * file type icons that are not associated with a file extension,
   * such as folder.
   */
  type?: FileIconTypeInput;
  /**
   * The size of the icon in pixels.
   * @default 16
   */
  size?: FileTypeIconSize;
  /**
   * The type of image file to use. Can be svg or png.
   * @default 'svg'
   */
  imageFileType?: ImageFileType;
}

export function getFileTypeIconNameFromExtensionOrType(
  extension: string | undefined,
  type: FileIconType | undefined,
): string {
  let iconBaseName: string | undefined;
  if (extension) {
    // Strip periods, force lowercase.
    extension = extension.replace('.', '').toLowerCase();
    return getFileTypeIconExtensionMap()[extension] || GENERIC_FILE;
  } else if (type) {
    switch (type) {
      case FileIconType.docset:
        iconBaseName = DOCSET_FOLDER;
        break;
      case FileIconType.folder:
        iconBaseName = FOLDER;
        break;
      case FileIconType.listItem:
        iconBaseName = LIST_ITEM;
        break;
      case FileIconType.sharedFolder:
        iconBaseName = SHARED_FOLDER;
        break;
      case FileIconType.stream:
        iconBaseName = STREAM;
        break;
      case FileIconType.multiple:
        iconBaseName = MULTIPLE_ITEMS;
        break;
      case FileIconType.news:
        iconBaseName = NEWS;
        break;
      case FileIconType.desktopFolder:
        iconBaseName = DESKTOP_FOLDER;
        break;
      case FileIconType.documentsFolder:
        iconBaseName = DOCUMENTS_FOLDER;
        break;
      case FileIconType.picturesFolder:
        iconBaseName = PICTURES_FOLDER;
        break;
      case FileIconType.linkedFolder:
        iconBaseName = LINKED_FOLDER;
        break;
      case FileIconType.list:
        iconBaseName = LIST;
        break;
      case FileIconType.form:
        iconBaseName = FORM;
        break;
      case FileIconType.sway:
        iconBaseName = SWAY;
        break;
      case FileIconType.playlist:
        iconBaseName = PLAYLIST;
        break;
      case FileIconType.loopworkspace:
        iconBaseName = LOOP_WORKSPACE;
        break;
      case FileIconType.planner:
        iconBaseName = PLANNER;
        break;
      case FileIconType.todoItem:
        iconBaseName = TODOITEM;
        break;
      case FileIconType.portfolio:
        iconBaseName = PORTFOLIO;
        break;
      case FileIconType.album:
        iconBaseName = ALBUM;
        break;
      case FileIconType.listForm:
        iconBaseName = LIST_FORM;
        break;
      case FileIconType.campaign:
        iconBaseName = CAMPAIGN;
        break;
      case FileIconType.shortcutsdefaultfolder:
        iconBaseName = SHORTCUTS_DEFAULT_FOLDER;
        break;
    }
  }
  return iconBaseName || GENERIC_FILE;
}

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
