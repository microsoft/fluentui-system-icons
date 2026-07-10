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

/** A single density candidate for an `<img srcset>`: a `1x`/`2x`/… descriptor and the folder suffix to use. */
interface FileTypeIconDensityVariant {
  /** The `srcset` density descriptor, e.g. `1x`, `1.5x`, `2x`. */
  descriptor: string;
  /** The folder suffix appended to the size segment, e.g. `''` (1x) or `'_2x'`. */
  suffix: string;
}

/**
 * Enumerates the published pixel-density variants for a given `size`/`imageFileType`, ordered
 * from lowest (`1x`) to highest. These feed an `<img srcset>` so the browser — not our JS —
 * picks the right asset for the device pixel ratio. This keeps the markup deterministic across
 * server and client (no hydration mismatch / no post-mount density swap), and lets the browser
 * re-evaluate when a window moves to a display with a different DPI.
 *
 * The list honors the gaps in the published assets:
 * - SVGs scale losslessly, so only the `1.5x` band has a dedicated asset (and size 20 has none).
 * - PNGs publish a distinct asset per density bucket (`1.5x`/`2x`/`3x`/`4x`), except size 20 which
 *   has no `1.5x` asset.
 */
function getFileTypeIconDensityVariants(
  size: FileTypeIconSize,
  imageFileType: ImageFileType,
): FileTypeIconDensityVariant[] {
  // 1x is always available.
  const variants: FileTypeIconDensityVariant[] = [{ descriptor: '1x', suffix: '' }];

  if (imageFileType === 'svg') {
    // SVGs scale, so the only extra asset is the 1.5x pixel-snapping band (absent at size 20).
    if (size !== 20) {
      variants.push({ descriptor: '1.5x', suffix: '_1.5x' });
    }
    return variants;
  }

  // PNGs need a distinct asset per density bucket (size 20 is missing the 1.5x asset).
  if (size !== 20) {
    variants.push({ descriptor: '1.5x', suffix: '_1.5x' });
  }
  variants.push(
    { descriptor: '2x', suffix: '_2x' },
    { descriptor: '3x', suffix: '_3x' },
    { descriptor: '4x', suffix: '_4x' },
  );
  return variants;
}

/**
 * Resolves the CDN-relative standard-density (1x) source URL for a file type icon.
 *
 * This is the deterministic, SSR-safe fallback used for the `<img src>` attribute. For
 * device-pixel-ratio-aware selection, pair it with {@link getFileTypeIconSrcSet} on `srcset`.
 *
 * @param options - the file type icon options (extension/type, size, imageFileType)
 * @param baseUrl - the base url to resolve the asset against. Defaults to the Fluent CDN.
 * @returns the fully-qualified icon url.
 */
export function getFileTypeIconSrc(options: FileTypeIconOptions, baseUrl: string = DEFAULT_BASE_URL): string {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType = 'svg' } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx

  return `${baseUrl}${size}/${baseIconName}.${imageFileType}`;
}

/**
 * Resolves the CDN-relative `srcset` for a file type icon: a comma-separated list of every
 * published density variant with its `1x`/`1.5x`/… descriptor.
 *
 * Letting the browser pick the density (instead of reading `devicePixelRatio` in JS) keeps the
 * rendered markup identical on the server and the client, avoiding hydration mismatches and the
 * flicker/redundant-fetch of a post-mount density swap.
 *
 * @param options - the file type icon options (extension/type, size, imageFileType)
 * @param baseUrl - the base url to resolve the assets against. Defaults to the Fluent CDN.
 * @returns the `srcset` value, e.g. `…/24/docx.png 1x, …/24_1.5x/docx.png 1.5x, …`.
 */
export function getFileTypeIconSrcSet(options: FileTypeIconOptions, baseUrl: string = DEFAULT_BASE_URL): string {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType = 'svg' } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx

  return getFileTypeIconDensityVariants(size, imageFileType)
    .map(({ descriptor, suffix }) => `${baseUrl}${size}${suffix}/${baseIconName}.${imageFileType} ${descriptor}`)
    .join(', ');
}
