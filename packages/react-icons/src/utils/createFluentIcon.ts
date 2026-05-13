import * as React from 'react';
import { mergeClasses } from '@griffel/react';
import { FluentIconsProps } from './FluentIconsProps.types';
import { useIconState } from './useIconState';
import { useRootStyles } from './createFluentIcon.styles';
import { iconClassName } from './constants';

export type FluentIcon = React.FC<FluentIconsProps>;

export type CreateFluentIconOptions = {
  flipInRtl?: boolean;
  color?: boolean;
};

export type SvgNode = [
  tag: string,
  attrs: Record<string, string | Record<string, string>> | null,
  ...children: SvgNode[],
];

const renderSvgNode = (node: SvgNode, key: number): React.ReactElement => {
  const [tag, attrs, ...children] = node;
  return React.createElement(tag, { ...attrs, key }, ...children.map(renderSvgNode));
};

/**
 * Creates a Fluent icon React component with Griffel styling.
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
  const viewBoxWidth = width === '1em' ? '20' : width;
  // Pre-render color SVG nodes once in the factory so the recursion
  // never runs during React renders.
  const colorChildren =
    typeof pathsOrSvg !== 'string' && (options?.color || Array.isArray(pathsOrSvg[0]))
      ? (pathsOrSvg as SvgNode[]).map(renderSvgNode)
      : undefined;
  const Icon = React.forwardRef((props: FluentIconsProps, ref: React.Ref<HTMLElement>) => {
    const styles = useRootStyles();
    const iconState = useIconState(props, { flipInRtl: options?.flipInRtl });
    const state = {
      ...iconState,
      className: mergeClasses(iconClassName, iconState.className, styles.root),
      ref,
      width,
      height: width,
      viewBox: `0 0 ${viewBoxWidth} ${viewBoxWidth}`,
      xmlns: 'http://www.w3.org/2000/svg',
    };
    // @deprecated - this branch is not used in our code, only keeping for backwards compatibility
    // Color icon: render raw SVG children
    if (typeof pathsOrSvg === 'string') {
      return React.createElement('svg', { ...state, dangerouslySetInnerHTML: { __html: pathsOrSvg } });
    }
    // Color icon: use pre-rendered elements
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
