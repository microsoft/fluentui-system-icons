import * as React from 'react';

import type { FluentIconsProps } from './shared';
import { iconClassName, cx } from './shared';
import { useIconState } from './useIconState';

export type FluentIcon = React.FC<FluentIconsProps>;

export type CreateFluentIconOptions = {
  flipInRtl?: boolean;
  color?: boolean;
};

/**
 * Headless createFluentIcon — SVG icon factory without Styles.
 *
 * Returns a React component that renders an SVG icon with:
 * - data-fui-icon attribute for CSS targeting
 * - a11y attributes (aria-hidden, aria-label, role)
 * - RTL flip via data-fui-icon-rtl attribute
 * - HCM forced-color-adjust via CSS attribute selector
 *
 * @access private
 * @alpha
 */
export const createFluentIcon = (
  displayName: string,
  width: string,
  pathsOrSvg: string[] | string,
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = width === '1em' ? '20' : width;
  const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
    const iconState = useIconState(props, { flipInRtl: options?.flipInRtl });
    const state = {
      ...iconState,
      className: cx(iconClassName, iconState.className),
      ref,
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };
    if (typeof pathsOrSvg === 'string') {
      return React.createElement('svg', { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
    } else {
      return React.createElement(
        'svg',
        state,
        ...pathsOrSvg.map((d) => React.createElement('path', { d, fill: state.fill })),
      );
    }
  }) as FluentIcon;
  Icon.displayName = displayName;
  return Icon;
};
