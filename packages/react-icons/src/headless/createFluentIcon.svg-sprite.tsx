import * as React from 'react';

import type { FluentIconsProps } from './shared';
import { cx, iconClassName } from './shared';
import { useIconState } from './useIconState';
import type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';
import { computeViewBox, renderSpriteBody } from '../core/svg';

export type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';

/**
 * Headless createFluentIcon for sprite-based icons.
 *
 * @access private
 * @alpha
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
