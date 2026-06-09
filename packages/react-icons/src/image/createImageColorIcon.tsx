import * as React from 'react';

import { useIconContext } from '../contexts';
import type { CreateImageIconOptions, FluentImageIcon, FluentImageIconsProps } from './shared';
import { cx, DATA_FUI_ICON, DATA_FUI_ICON_RTL, fontSizeForWidth, imageColorIconClassName } from './shared';

export type { CreateImageIconOptions, FluentImageIcon } from './shared';

/**
 * Image `createFluentIcon` for multicolor (`*_color`) icons, rendered as a native `<img>`.
 *
 * Multicolor icons cannot be recolored via CSS (the `<img>` content is isolated), so they cannot
 * use the CSS-mask technique. They are served as a plain `<img src>` pointing at the icon SVG.
 * Accessibility mirrors the other Fluent icon APIs, expressed via native `<img>` semantics:
 * - `title` present → `alt={title}` (`role="img"` is implicit for `<img>`).
 * - no `title` → `alt=""` (decorative; hidden from assistive tech, the `<img>` equivalent of
 *   `aria-hidden`).
 *
 * @param displayName - The display name for the component (used in React DevTools).
 * @param url - The bundler-resolved URL of the icon SVG (image source).
 * @param width - The intrinsic width of the icon (`'1em'` for resizable, `'20'`/`'24'`/... for sized).
 * @param options - Optional configuration.
 *
 * @access private
 * @alpha
 */
export const createImageColorIcon = (
  displayName: string,
  url: string,
  width: string = '1em',
  options?: CreateImageIconOptions,
): FluentImageIcon => {
  const fontSize = fontSizeForWidth(width);

  const Icon = React.forwardRef<HTMLElement, FluentImageIconsProps>((props, ref) => {
    const {
      className,
      title,
      // strip props that are not valid on an <img> element
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      primaryFill,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      filled,
      style,
      ...rest
    } = props;

    const iconContext = useIconContext();
    const isRtlFlip = options?.flipInRtl && iconContext?.textDirection === 'rtl';

    const mergedStyle = {
      ...style,
      ...(fontSize ? { fontSize } : null),
    } as React.CSSProperties;

    const state: Record<string, unknown> = {
      ...rest,
      ref,
      src: url,
      alt: title ?? '',
      className: cx(imageColorIconClassName, className),
      style: mergedStyle,
      [DATA_FUI_ICON]: '',
    };

    if (isRtlFlip) {
      state[DATA_FUI_ICON_RTL] = '';
    }

    return React.createElement('img', state);
  }) as FluentImageIcon;

  Icon.displayName = displayName;
  return Icon;
};
