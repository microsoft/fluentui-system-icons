import * as React from 'react';
import type { FluentIconsProps } from './FluentIconsProps.types';
import { useIconState } from './useIconState';
import type { CreateFluentIconOptions, FluentIcon } from './createFluentIcon';

/**
 *
 * Wraps custom Svg Component with Fluent Icon behaviour
 *
 * The wrapped component receives the `data-fui-icon` / `data-fui-icon-rtl` attributes the
 * shipped stylesheet targets. Unlike every other factory it contributes no `fui-*` class,
 * so a wrapped icon with no consumer `className` carries no `class` attribute at all.
 *
 * @example
 * ```tsx
 const CustomSvg = (iconProps: FluentIconsProps) =>
  React.createElement(
    'svg',
    {
      width: '20',
      height: '20',
      viewBox: '0 0 20 20',
      xmlns: 'http://www.w3.org/2000/svg',
      ...iconProps
    },
    React.createElement('path', {
      fill: 'currentColor',
      d: 'M10 2l6 16H4l6-16z'
    })
  );

  const CustomIcon = wrapIcon(CustomSvg, 'CustomIcon');
  ```
 */
export const wrapIcon = (
  Icon: (iconProps: FluentIconsProps) => React.ReactElement,
  displayName?: string,
  options?: CreateFluentIconOptions,
) => {
  const WrappedIcon = React.forwardRef((props: FluentIconsProps, ref: FluentIconsProps['ref']) => {
    const state = {
      ...useIconState(props, { flipInRtl: options?.flipInRtl }),
      ref,
    };
    return <Icon {...state} />;
  }) as FluentIcon;
  WrappedIcon.displayName = displayName;
  return WrappedIcon;
};
