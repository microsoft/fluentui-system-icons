import * as React from 'react';
import { mergeClasses } from '@griffel/react';

import type { FluentIconsProps } from './FluentIconsProps.types';
import { useIconState } from './useIconState';
import { useRootStyles } from './createFluentIcon.styles';
import { iconClassName } from './constants';

export type SvgIconProps = FluentIconsProps & {
  /**
   * The icon identifier from the SVG sprite
   * @example "CalendarFilled", "AirplaneRegular", "Airplane24Filled"
   */
  iconId: string;
  /**
   * The path to the SVG sprite file
   */
  spritePath?: string;
  /**
   * The size of the icon (width and height)
   * @default "1em"
   */
  size?: string;
  /**
   * Whether the icon should flip in RTL mode
   * @default false
   */
  flipInRtl?: boolean;
};

/**
 * SvgIcon component renders icons from an SVG sprite.
 * It maintains the same styling and behavior as icons created with createFluentIcon.
 *
 * @example
 * ```tsx
 * <SvgIcon iconId="CalendarFilled" size="20" />
 * <SvgIcon iconId="AirplaneRegular" primaryFill="blue" />
 * <SvgIcon iconId="Airplane24Filled" size="24" flipInRtl />
 * ```
 */
export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  (
    { iconId, spritePath, size = '1em', flipInRtl = false, ...props },
    ref,
  ) => {
    const styles = useRootStyles();
    const iconState = useIconState(props, { flipInRtl });

    // Determine viewBox size based on the size prop
    const viewBoxWidth = size === '1em' ? '20' : size;

    const state = {
      ...iconState,
      className: mergeClasses(iconClassName, iconState.className, styles.root),
      ref,
      width: size,
      height: size,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };

    return React.createElement(
      'svg',
      state,
      React.createElement('use', {
        href: `${spritePath}#${iconId}`,
        // The fill is applied to the svg element and inherited by use
      }),
    );
  },
);

SvgIcon.displayName = 'SvgIcon';
