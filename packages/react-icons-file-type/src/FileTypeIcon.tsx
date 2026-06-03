import * as React from 'react';
import { mergeClasses } from '@griffel/react';
import { getFileTypeIconSrc } from './getFileTypeIconSrc';
import { useFileTypeIconsContext } from './FileTypeIconsContext';
import { useFileTypeIconStyles } from './FileTypeIcon.styles';
import { DEFAULT_ICON_SIZE } from './constants';
import type { FileIconTypeInput } from './FileIconType';
import type { FileTypeIconSize, ImageFileType } from './constants';

export interface FileTypeIconProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {
  /**
   * The file extension, such as `pptx`, for which an icon is needed. For file type icons
   * that are not associated with a file extension, such as `folder`, use the `type` prop.
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
  /**
   * Override the base URL used to resolve this icon's asset. When omitted, the `baseUrl`
   * from the nearest `FileTypeIconsProvider` (or the Fluent CDN default) is used.
   */
  baseUrl?: string;
}

/**
 * Renders a file type icon as an `<img>` sourced from CDN-hosted assets.
 *
 * The asset host is resolved with the following precedence:
 * 1. the `baseUrl` prop (per-icon override)
 * 2. the `baseUrl` from the nearest `FileTypeIconsProvider`
 * 3. the Fluent CDN default
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const { extension, type, size = DEFAULT_ICON_SIZE, imageFileType, baseUrl, className, alt, ...imgProps } = props;

  const { baseUrl: contextBaseUrl } = useFileTypeIconsContext();
  const styles = useFileTypeIconStyles();

  const src = getFileTypeIconSrc({ extension, type, size, imageFileType }, baseUrl ?? contextBaseUrl);

  if (!src) {
    return null;
  }

  return (
    <img
      {...imgProps}
      src={src}
      width={size}
      height={size}
      alt={alt ?? extension ?? ''}
      className={mergeClasses(styles.root, className)}
    />
  );
};
