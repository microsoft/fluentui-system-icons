import { getFileTypeIconNameFromExtensionOrType, getFileTypeIconSuffix } from './getFileTypeIconProps';
import type { FileTypeIconOptions } from './getFileTypeIconProps';
import { DEFAULT_BASE_URL, DEFAULT_ICON_SIZE } from './constants';

/**
 * Given the `options`, this function returns the DOM element for a file type icon
 * as an HTML string, for compatibility with non-React environments. Similar to
 * `getFileTypeIconProps`, this accepts the same type of object but rather than
 * returning the `iconName`, this returns the entire DOM element as a string.
 * @param options
 * @param baseUrl - optionally provide a custom CDN base url to fetch icons from. Defaults to the Fluent CDN.
 */
export function getFileTypeIconAsHTMLString(
  options: FileTypeIconOptions,
  baseUrl: string = DEFAULT_BASE_URL,
): string | undefined {
  const { extension, size = DEFAULT_ICON_SIZE, type, imageFileType } = options;
  const baseIconName = getFileTypeIconNameFromExtensionOrType(extension, type); // eg: docx
  const baseSuffix = getFileTypeIconSuffix(size, imageFileType); // eg: 96_3x_svg or 96_png
  const suffixArray = baseSuffix.split('_'); // eg: ['96', '3x', 'svg']

  let src: string | undefined;
  if (suffixArray.length === 3) {
    /** suffix is of type 96_3x_svg - it has a pixel ratio > 1 */
    src = `${baseUrl}${size}_${suffixArray[1]}/${baseIconName}.${suffixArray[2]}`;
    return `<img src="${src}" height="100%" width="100%" />`;
  } else if (suffixArray.length === 2) {
    /** suffix is of type 96_svg - it has a pixel ratio of 1 */
    src = `${baseUrl}${size}/${baseIconName}.${suffixArray[1]}`;
    return `<img src="${src}" alt="" />`;
  }

  return undefined;
}
