import * as React from 'react';

import type { FluentIconsProps } from './shared';
import { cx, iconClassName } from './shared';
import { useIconState } from './useIconState';
import type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';

export type SvgIconProps = FluentIconsProps & {
  /** The icon identifier from the SVG sprite */
  iconId: string;
  /** The path to the SVG sprite file. If not provided, uses the sprite in the same document. */
  spritePath?: string;
  /** The size of the icon (width and height). @default "1em" */
  size?: string;
  /** Whether the icon should flip in RTL mode. @default false */
  flipInRtl?: boolean;
};

/**
 * Headless SvgIcon — renders icons from an SVG sprite without Griffel.
 *
 * @example
 * ```tsx
 * <SvgIcon iconId="CalendarFilled" size="20" />
 * <SvgIcon iconId="AirplaneRegular" primaryFill="blue" />
 * ```
 */
export const SvgIcon = React.forwardRef<SVGSVGElement, SvgIconProps>(
  ({ iconId, spritePath, size = '1em', flipInRtl = false, ...props }, ref) => {
    const iconState = useIconState(props, { flipInRtl });
    const viewBoxWidth = size === '1em' ? '20' : size;

    const state = {
      ...iconState,
      className: cx(iconClassName, iconState.className),
      ref,
      width: size,
      height: size,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };

    const href = spritePath ? `${spritePath}#${iconId}` : `#${iconId}`;

    return React.createElement('svg', state, React.createElement('use', { href }));
  },
);

SvgIcon.displayName = 'SvgIcon';

export type { FluentIcon, CreateFluentIconOptions } from './createFluentIcon';

/**
 * Headless createFluentIcon for sprite-based icons.
 */
export const createFluentIcon = (
  iconId: string,
  size: string,
  spritePath?: string,
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = size === '1em' ? '20' : size;

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

    const href = spritePath ? `${spritePath}#${iconId}` : `#${iconId}`;

    return React.createElement('svg', state, React.createElement('use', { href }));
  }) as FluentIcon;
  Icon.displayName = iconId;
  return Icon;
};
