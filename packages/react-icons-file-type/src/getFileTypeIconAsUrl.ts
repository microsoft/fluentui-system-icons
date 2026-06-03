import { getFileTypeIconSrc } from './getFileTypeIconSrc';
import { DEFAULT_BASE_URL } from './constants';
import type { FileTypeIconOptions } from './getFileTypeIconProps';

/**
 * Given the `options`, this function returns the CDN-based URL for a file type icon.
 * Similar to `getFileTypeIconProps`, this accepts the same type of object but rather
 * than returning the `iconName`, this returns the raw URL.
 * @param options
 * @param baseUrl - optionally provide a custom CDN base url to fetch icons from. Defaults to the Fluent CDN.
 */
export function getFileTypeIconAsUrl(
  options: FileTypeIconOptions,
  baseUrl: string = DEFAULT_BASE_URL,
): string | undefined {
  return getFileTypeIconSrc(options, baseUrl);
}
