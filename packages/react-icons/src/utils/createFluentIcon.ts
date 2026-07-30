import * as React from 'react';

import type { FluentIconsProps } from './FluentIconsProps.types';
import { iconClassName } from './constants';
import { cx } from './cx';
import { useIconState } from './useIconState';
import { computeViewBox, createColorChildrenResolver, renderSvgBody } from '../core/svg';
import type { SvgNode } from '../core/svg';

export type FluentIcon = React.FC<FluentIconsProps>;

export type CreateFluentIconOptions = {
  flipInRtl?: boolean;
  color?: boolean;
};

export type { SvgNode };

/**
 * Creates a Fluent icon React component.
 *
 * Styling is expressed as attributes (`data-fui-icon`, `data-fui-icon-rtl`) plus the
 * `fui-Icon` class, and resolved by the shipped stylesheet — consumers must import
 * `@fluentui/react-icons/styles.css`.
 *
 * @param displayName - The display name for the component (used in React DevTools).
 * @param width - The intrinsic width/height of the icon (e.g. `"20"`, `"24"`, `"1em"`).
 * @param pathsOrSvg - Icon content in one of three forms:
 *   - `string[]` — Array of SVG path `d` attributes (mono-color icons).
 *   - `SvgNode[]` — Structured SVG element tree for color icons (CSP-safe).
 *   - `string` — Raw SVG innerHTML string.
 *     **Deprecated:** Use `SvgNode[]` with `options.color` instead. The `string` overload uses
 *     `dangerouslySetInnerHTML` which violates Trusted Types CSP policies.
 * @param options - Optional configuration.
 */
export const createFluentIcon = (
  displayName: string,
  width: string,
  pathsOrSvg: string[] | string | SvgNode[],
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = computeViewBox(width);
  // Resolve color children once per component: mono-color icons pay nothing,
  // color icons get per-instance memoized `idPrefix` scoping.
  const useColorChildren = createColorChildrenResolver(pathsOrSvg, options);
  const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
    const iconState = useIconState(props, { flipInRtl: options?.flipInRtl });
    const colorChildren = useColorChildren(props.idPrefix);
    const state = {
      ...iconState,
      className: cx(iconClassName, iconState.className),
      ref,
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };
    return renderSvgBody(state, pathsOrSvg, colorChildren);
  }) as FluentIcon;
  Icon.displayName = displayName;
  return Icon;
};
