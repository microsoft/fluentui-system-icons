// Image (CSS mask / <img>) Fluent Icons API — shared types, constants, and helpers.
// The shipped image.css file uses these data-attribute and class selectors for styling.

import type * as React from 'react';

/** Base data attribute applied to all image icons (mask `<span>` and color `<img>`). */
export const DATA_FUI_ICON = 'data-fui-icon';

/** Data attribute applied to icons that should flip in RTL text direction. */
export const DATA_FUI_ICON_RTL = 'data-fui-icon-rtl';

/** CSS class applied to the mask `<span>` icon (monochrome, recolorable). */
export const imageIconClassName = 'fui-Icon-Image';

/** CSS class applied to the color `<img>` icon (multicolor, not recolorable). */
export const imageColorIconClassName = 'fui-Icon-Image-Color';

/** CSS custom property carrying the per-icon mask source `url(...)`. */
export const IMAGE_URL_CSS_VAR = '--fui-img';

// Re-export the shared props contract so the image API stays consistent with the other APIs.
export type { FluentIconsProps } from '../utils/FluentIconsProps.types';

/**
 * Props for image-based icons. Mask icons render a `<span>` and color icons render an `<img>`,
 * so the base attribute type is the HTML element attribute set (not SVG).
 */
export type FluentImageIconsProps = import('../utils/FluentIconsProps.types').FluentIconsProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLElement
>;

/** React component type produced by the image icon factories. */
export type FluentImageIcon = React.FC<FluentImageIconsProps>;

export type CreateImageIconOptions = {
  flipInRtl?: boolean;
};

/**
 * Joins class name strings, filtering out falsy values.
 */
export function cx(...classes: (string | false | undefined | null)[]): string | undefined {
  const result = classes.filter(Boolean).join(' ');
  return result || undefined;
}

/**
 * Resolve the inline `font-size` used to size a non-resizable ("sized") icon.
 *
 * Image icons are a `1em` box scaled by `font-size` (matching the `"1em"` width convention used
 * by the SVG/font APIs). Resizable icons (`width === '1em'`) inherit `font-size` from context and
 * therefore receive no inline size. Sized icons (e.g. `width === '24'`) are pinned to that pixel
 * size via `font-size`.
 *
 * @param width - The intrinsic width string of the icon (`'1em'`, `'20'`, `'24'`, ...).
 * @returns A CSS `font-size` value (e.g. `'24px'`) or `undefined` for resizable icons.
 */
export function fontSizeForWidth(width: string): string | undefined {
  if (width === '1em' || width === '') {
    return undefined;
  }
  return /^\d+$/.test(width) ? `${width}px` : undefined;
}
