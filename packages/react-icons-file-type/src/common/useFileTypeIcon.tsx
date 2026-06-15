import * as React from 'react';
import { getFileTypeIconSrc, getFileTypeIconSrcSet } from './fileTypeIconResolver';
import type { FileTypeIconOptions } from './fileTypeIconResolver';
import { useFileTypeIconsContext } from './FileTypeIconsContext';
import { DEFAULT_ICON_SIZE } from './constants';

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
 * The resolved `<img>` props produced by {@link useFileTypeIcon} and consumed by
 * {@link renderFileTypeIcon}. Following the Fluent v9 pattern, the state is a plain,
 * mutable bag of slot props so a style hook (e.g. `useFileTypeIconStyles`) can layer
 * additional classes on top before rendering.
 */
export interface FileTypeIconState extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  'data-fui-filetype-icon': '';
}

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
 * State hook: resolves {@link FileTypeIconProps} into the {@link FileTypeIconState} `<img>`
 * props. This is the shared core used by both the headless and the Griffel-styled
 * `FileTypeIcon` components — the latter runs a style hook over the returned state before
 * rendering.
 *
 * The asset host is resolved from the nearest `FileTypeIconsProvider`, falling back to the
 * Fluent CDN default when no provider is present.
 */
export function useFileTypeIcon(props: FileTypeIconProps): FileTypeIconState {
  const { extension, type, size = DEFAULT_ICON_SIZE, imageFileType, className, ...imgProps } = props;

  const { baseUrl } = useFileTypeIconsContext();

  const iconOptions: FileTypeIconOptions = { extension, type, size, imageFileType };
  // `src` is the deterministic 1x fallback; `srcset` lets the browser pick the right density for
  // the device pixel ratio. Resolving density in the browser (rather than from `devicePixelRatio`
  // in JS) keeps server and client markup identical — no hydration mismatch, no post-mount swap.
  const src = getFileTypeIconSrc(iconOptions, baseUrl);
  const srcSet = getFileTypeIconSrcSet(iconOptions, baseUrl);

  const a11yProps = getImageA11yProps(props);

  return {
    ...imgProps,
    ...a11yProps,
    src,
    srcSet,
    width: size,
    height: size,
    className,
    [fileTypeIconDataAttribute]: '',
  };
}

/**
 * Render hook: turns a resolved {@link FileTypeIconState} into the `<img>` element. Returns
 * `null` when there is no resolvable `src`.
 */
export function renderFileTypeIcon(state: FileTypeIconState): React.ReactElement | null {
  if (!state.src) {
    return null;
  }

  return <img {...state} />;
}
