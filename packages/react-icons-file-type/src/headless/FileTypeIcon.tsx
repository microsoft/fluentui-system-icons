import * as React from 'react';
import { getFileTypeIconSrc } from '../fileTypeIconResolver';
import type { FileTypeIconOptions } from '../fileTypeIconResolver';
import { useFileTypeIconsContext } from '../FileTypeIconsContext';
import { DEFAULT_ICON_SIZE } from '../constants';

export interface FileTypeIconProps
  extends FileTypeIconOptions,
    Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src' | 'width' | 'height'> {}

/**
 * Data attribute set on the rendered `<img>`. It is the styling hook targeted by the
 * opt-in `@fluentui/react-icons-file-type/headless/styles.css` (or by a consumer's own
 * CSS). The attribute is inert until such CSS is loaded, so it is harmless for the default
 * (Griffel-styled) entry point.
 */
export const fileTypeIconDataAttribute = 'data-fui-filetype-icon';

/**
 * Resolves the accessibility attributes for the rendered `<img>`.
 *
 * The icon is considered *labelled* when it has an accessible name — a non-empty `alt`
 * (or `extension` fallback), an `aria-label`, an `aria-labelledby`, or the native `title`
 * tooltip. Otherwise it is treated as purely decorative.
 *
 * Notes:
 * - `role` is intentionally omitted. A native `<img>` already exposes the implicit `img`
 *   role when it has an accessible name, so setting `role="img"` would be redundant.
 * - We do NOT mirror the `title` -> `aria-label` mapping used for SVG icons (see
 *   `useIconState` in `@fluentui/react-icons`). That mapping is an SVG-specific workaround
 *   because SVG `<title>` is a child element, not an attribute. On a native `<img>`, `title`
 *   is a real HTML attribute that both renders a tooltip and participates in the accessible
 *   name computation (priority: `aria-labelledby` > `aria-label` > `alt` > `title`).
 * - When labelled by `aria-*` or `title`, we omit `alt` entirely rather than emit `alt=""`.
 *   An empty `alt` forces the decorative (`presentation`) role and suppresses those name
 *   sources, which would hide the icon from assistive technologies.
 * - For truly decorative icons we emit `alt=""` (the spec-defined decorative opt-out) and
 *   additionally set `aria-hidden` as a defensive guard against browser auto-labelling
 *   heuristics (e.g. generated image descriptions) that could otherwise surface the image
 *   to assistive technologies.
 */
function getImageA11yProps(props: FileTypeIconProps): { alt?: string; 'aria-hidden'?: true } {
  const resolvedAlt = props.alt ?? props.extension;

  // Labelled by alt/extension -> use it as the accessible name.
  if (resolvedAlt) {
    return { alt: resolvedAlt };
  }

  // Labelled by aria-* or the native title tooltip -> keep the icon in the a11y tree and
  // omit alt so those sources can supply the accessible name (alt="" would force a
  // decorative role and suppress them).
  if (props['aria-label'] || props['aria-labelledby'] || props.title) {
    return {};
  }

  // Truly decorative -> spec-defined opt-out plus defensive guard against auto-labelling.
  return { alt: '', 'aria-hidden': true };
}

/**
 * Headless (Griffel-free) file type icon. Renders an `<img>` sourced from CDN-hosted assets
 * and tagged with the {@link fileTypeIconDataAttribute} styling hook, but ships **no** styling
 * runtime — bring your own styles via `@fluentui/react-icons-file-type/headless/styles.css`, a
 * `className`, or your own CSS targeting `[data-fui-filetype-icon]`.
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 *
 * Prefer the default `@fluentui/react-icons-file-type` entry point unless you specifically
 * want to avoid the Griffel runtime.
 */
export const FileTypeIcon: React.FC<FileTypeIconProps> = (props) => {
  const { extension, type, size = DEFAULT_ICON_SIZE, imageFileType, className, ...imgProps } = props;

  const { baseUrl, targetWindow } = useFileTypeIconsContext();

  const src = getFileTypeIconSrc({ extension, type, size, imageFileType }, baseUrl, targetWindow);

  if (!src) {
    return null;
  }

  const a11yProps = getImageA11yProps(props);

  return (
    <img
      {...imgProps}
      {...a11yProps}
      src={src}
      width={size}
      height={size}
      className={className}
      {...{ [fileTypeIconDataAttribute]: '' }}
    />
  );
};
