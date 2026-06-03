import { getFileTypeIconNameFromExtensionOrType, getFileTypeIconSuffix } from './getFileTypeIconProps';
import type { FileTypeIconOptions } from './getFileTypeIconProps';
import { DEFAULT_BASE_URL, DEFAULT_ICON_SIZE } from './constants';

/**
 * Resolves the CDN-relative source URL for a file type icon.
 *
 * This is the shared resolver used by both the `FileTypeIcon` component and the
 * standalone `getFileTypeIconAsUrl` / `getFileTypeIconAsHTMLString` helpers.
 *
 * @param options - the file type icon options (extension/type, size, imageFileType)
 * @param baseUrl - the base url to resolve the asset against. Defaults to the Fluent CDN.
 * @returns the fully-qualified icon url, or `undefined` if it could not be resolved.
 */
export function getFileTypeIconSrc(
  options: FileTypeIconOptions,
  baseUrl: string = DEFAULT_BASE_URL,
): string | undefined {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx
  const baseSuffix = getFileTypeIconSuffix(size, imageFileType); // eg: 96_3x_svg or 96_png
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
