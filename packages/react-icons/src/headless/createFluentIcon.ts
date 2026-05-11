import * as React from 'react';

import type { FluentIconsProps } from './shared';
import { iconClassName, cx } from './shared';
import { useIconState } from './useIconState';

export type FluentIcon = React.FC<FluentIconsProps>;

export type CreateFluentIconOptions = {
  flipInRtl?: boolean;
  color?: boolean;
};

type SvgNode = [tag: string, attrs: Record<string, string> | null, ...children: SvgNode[]];

const renderSvgNode = (node: SvgNode, key: number): React.ReactElement => {
  const [tag, attrs, ...children] = node;
  return React.createElement(tag, { ...attrs, key }, ...children.map(renderSvgNode));
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
 * @param displayName - The display name for the component (used in React DevTools).
 * @param width - The intrinsic width/height of the icon (e.g. `"20"`, `"24"`, `"1em"`).
 * @param pathsOrSvg - Icon content in one of three forms:
 *   - `string[]` — Array of SVG path `d` attributes (mono-color icons).
 *   - `SvgNode[]` — Structured SVG element tree for color icons (CSP-safe).
 *   - `string` — Raw SVG innerHTML string.
 *     **Deprecated:** Use `SvgNode[]` with `options.color` instead. The `string` overload uses
 *     `dangerouslySetInnerHTML` which violates Trusted Types CSP policies.
 * @param options - Optional configuration.
 *
 * @access private
 * @alpha
 */
export const createFluentIcon = (
  displayName: string,
  width: string,
  pathsOrSvg: string[] | string | SvgNode[],
  options?: CreateFluentIconOptions,
): FluentIcon => {
  const viewBoxWidth = width === '1em' ? '20' : width;
  // Pre-render color SVG nodes once in the factory so the recursion
  // never runs during React renders.
  const colorChildren =
    typeof pathsOrSvg !== 'string' && (options?.color || Array.isArray(pathsOrSvg[0]))
      ? (pathsOrSvg as SvgNode[]).map(renderSvgNode)
      : undefined;
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
    }
    if (colorChildren) {
      return React.createElement('svg', state, ...colorChildren);
    }
    return React.createElement(
      'svg',
      state,
      ...(pathsOrSvg as string[]).map((d) => React.createElement('path', { d, fill: state.fill })),
    );
  }) as FluentIcon;
  Icon.displayName = displayName;
  return Icon;
};
