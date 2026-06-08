import { getFileTypeIconExtensionMap } from './fileTypeIconMap.generated';
import { TYPE_TO_ICON_NAME } from './fileIconTypes.generated';
import type { FileIconType, FileIconTypeInput } from './FileIconType';
import { DEFAULT_BASE_URL, DEFAULT_ICON_SIZE } from './constants';
import type { FileTypeIconSize, ImageFileType } from './constants';

const GENERIC_FILE = 'genericfile';

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
 * Resolves the pixel-density folder suffix appended to the size segment when selecting a
 * published asset: `''` for standard density (1x), or `'_1.5x'` / `'_2x'` / `'_3x'` / `'_4x'`
 * for higher device pixel ratios.
 */
export function getFileTypeIconDensitySuffix(
  size: FileTypeIconSize,
  imageFileType: ImageFileType,
  win?: Window,
): string {
  // The target window is supplied by the caller (resolved from the `FileTypeIconsProvider`
  // context). Default the device pixel ratio to 1 (standard density) when no window is
  // available, e.g. during SSR.
  const devicePixelRatio: number = win?.devicePixelRatio ?? 1;

  // SVGs scale well, so only the 1.5x band needs a dedicated asset (and size 20 has none, so it snaps to 1x).
  if (imageFileType === 'svg') {
    return devicePixelRatio > 1 && devicePixelRatio <= 1.5 && size !== 20 ? '_1.5x' : '';
  }

  // PNGs need a distinct asset per density bucket.
  if (devicePixelRatio <= 1) {
    return '';
  }
  if (devicePixelRatio <= 1.5) {
    // Currently missing 1.5x png at size 20, snap to 2x.
    return size === 20 ? '_2x' : '_1.5x';
  }
  // (1.5, 2] -> 2x, (2, 3] -> 3x, (3, ∞) -> 4x.
  return `_${Math.min(Math.ceil(devicePixelRatio), 4)}x`;
}

/**
 * Resolves the CDN-relative source URL for a file type icon.
 *
 * This is the internal resolver used by the `FileTypeIcon` component.
 *
 * @param options - the file type icon options (extension/type, size, imageFileType)
 * @param baseUrl - the base url to resolve the asset against. Defaults to the Fluent CDN.
 * @param win - the window used to resolve the device pixel ratio. Defaults to standard density (1x) when omitted.
 * @returns the fully-qualified icon url.
 */
export function getFileTypeIconSrc(
  options: FileTypeIconOptions,
  baseUrl: string = DEFAULT_BASE_URL,
  win?: Window,
): string {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType = 'svg' } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx
  const densitySuffix = getFileTypeIconDensitySuffix(size, imageFileType, win); // eg: '' or '_3x'

  return `${baseUrl}${size}${densitySuffix}/${baseIconName}.${imageFileType}`;
}
