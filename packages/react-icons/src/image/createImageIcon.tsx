import * as React from 'react';

import { useIconContext } from '../contexts';
import type { CreateImageIconOptions, FluentImageIcon, FluentImageIconsProps } from './shared';
import {
  cx,
  DATA_FUI_ICON,
  DATA_FUI_ICON_RTL,
  fontSizeForWidth,
  imageIconClassName,
  IMAGE_URL_CSS_VAR,
} from './shared';

export type { CreateImageIconOptions, FluentImageIcon } from './shared';

/**
 * Image `createFluentIcon` for monochrome, CSS-mask based icons (zero icon rendering in JS).
 *
 * Returns a React component that renders a `<span>` whose `mask-image` is the icon SVG referenced
 * via a CSS custom property (`--fui-img`). Color comes from CSS `background-color: currentColor`
 * (set in `image.css`), so the icon is recolorable like text via the `color` property or the
 * `primaryFill` prop. No icon path data lives in the JS bundle — only a short hashed URL string.
 *
 * Styling is opt-in via the shipped `image.css` file (attribute/class selectors, no CSS-in-JS).
 *
 * @param displayName - The display name for the component (used in React DevTools).
 * @param url - The bundler-resolved URL of the icon SVG (mask source).
 * @param width - The intrinsic width of the icon (`'1em'` for resizable, `'20'`/`'24'`/... for sized).
 * @param options - Optional configuration.
 *
 * @access private
 * @alpha
 */
export const createImageIcon = (
  displayName: string,
  url: string,
  width: string = '1em',
  options?: CreateImageIconOptions,
): FluentImageIcon => {
  const fontSize = fontSizeForWidth(width);

  const Icon = React.forwardRef<HTMLElement, FluentImageIconsProps>((props, ref) => {
    const {
      className,
      primaryFill,
      title,
      // strip props that should not land on the DOM element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      filled,
      style,
      ...rest
    } = props;

    const iconContext = useIconContext();
    const isRtlFlip = options?.flipInRtl && iconContext?.textDirection === 'rtl';

    const mergedStyle = {
      ...style,
      [IMAGE_URL_CSS_VAR]: `url("${url}")`,
      ...(fontSize ? { fontSize } : null),
      // `background-color: currentColor` in image.css colors the mask; overriding `color`
      // recolors the icon when an explicit fill (other than currentColor) is requested.
      ...(primaryFill && primaryFill.toLowerCase() !== 'currentcolor' ? { color: primaryFill } : null),
    } as React.CSSProperties;

    const state: Record<string, unknown> = {
      ...rest,
      ref,
      className: cx(imageIconClassName, className),
      style: mergedStyle,
      [DATA_FUI_ICON]: '',
    };

    if (isRtlFlip) {
      state[DATA_FUI_ICON_RTL] = '';
    }

    if (title) {
      state['aria-label'] = title;
    }

    if (!state['aria-label'] && !state['aria-labelledby']) {
      state['aria-hidden'] = true;
    } else {
      state['role'] = 'img';
    }

    return React.createElement('span', state);
  }) as FluentImageIcon;

  Icon.displayName = displayName;
  return Icon;
};
