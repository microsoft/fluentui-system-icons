import * as React from 'react';

/**
 * Structured SVG element tree used for color icons (CSP-safe alternative to
 * raw innerHTML strings).
 */
export type SvgNode = [
  tag: string,
  attrs: Record<string, string | Record<string, string>> | null,
  ...children: SvgNode[],
];

/** Recursively renders an {@link SvgNode} tree into React elements. */
export const renderSvgNode = (node: SvgNode, key: number): React.ReactElement => {
  const [tag, attrs, ...children] = node;
  return React.createElement(tag, { ...attrs, key }, ...children.map(renderSvgNode));
};

/** Normalizes the icon width into a square viewBox dimension. */
export const computeViewBox = (width: string): string => (width === '1em' ? '20' : width);

/**
 * Pre-renders color SVG node trees once (outside React render) so the recursion
 * never runs during component renders. Returns `undefined` for mono-color
 * (path `string[]`) icons.
 */
export const precomputeColorChildren = (
  pathsOrSvg: string[] | string | SvgNode[],
  options?: { color?: boolean },
): React.ReactElement[] | undefined =>
  typeof pathsOrSvg !== 'string' && (options?.color || Array.isArray(pathsOrSvg[0]))
    ? (pathsOrSvg as SvgNode[]).map(renderSvgNode)
    : undefined;

type RenderSvgState = { fill?: string };

/**
 * Renders the `<svg>` element body for an already-resolved element `state`.
 * Handles the three content forms:
 * - raw innerHTML `string` (deprecated, CSP-unsafe `dangerouslySetInnerHTML`),
 * - pre-rendered color children ({@link precomputeColorChildren}),
 * - mono-color path `d` strings.
 *
 * `state` must already carry className/fill/width/height/viewBox/xmlns/ref.
 */
export const renderSvgBody = <TState extends RenderSvgState>(
  state: TState,
  pathsOrSvg: string[] | string | SvgNode[],
  colorChildren: React.ReactElement[] | undefined,
): React.ReactElement => {
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
};

/**
 * Renders the `<svg>` element body for a sprite icon — references an external
 * symbol via `<use href>`. `state` must already carry
 * className/width/height/viewBox/xmlns/ref.
 */
export const renderSpriteBody = <TState extends object>(
  state: TState,
  iconId: string,
  spritePath?: string,
): React.ReactElement => {
  const href = spritePath ? `${spritePath}#${iconId}` : `#${iconId}`;
  return React.createElement('svg', state, React.createElement('use', { href }));
};
