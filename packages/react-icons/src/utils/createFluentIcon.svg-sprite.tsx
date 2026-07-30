import * as React from 'react';

import type { FluentIconsProps } from './FluentIconsProps.types';
import { iconClassName } from './constants';
import { cx } from './cx';
import { useIconState } from './useIconState';
import type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';
import { computeViewBox, renderSpriteBody } from '../core/svg';

export type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';

/**
 * Creates a React component for a Fluent icon that references an SVG symbol from a sprite.
 *
 * @access private
 * @alpha
 *
 * @param iconId - The SVG symbol id in the sprite sheet.
 * @param size - The icon size (for example, `"1em"` or a numeric string).
 * @param spritePath - Optional path/URL to the SVG sprite file. If omitted, an in-document symbol reference is used.
 * @param options - Optional creation settings (for example RTL flipping and color behavior).
 * @returns A Fluent icon React component.
 */
export const createFluentIcon = (
  iconId: string,
  size: string,
  spritePath?: string,
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = computeViewBox(size);

  const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
    const iconState = useIconState(props, { flipInRtl: options?.flipInRtl });
    const state = {
      ...iconState,
      className: cx(iconClassName, iconState.className),
      ref,
      width: size,
      height: size,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };

    return renderSpriteBody(state, iconId, spritePath);
  }) as FluentIcon;
  Icon.displayName = iconId;
  return Icon;
};
