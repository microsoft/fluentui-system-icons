import type * as React from 'react';
import { useIconContext } from '../contexts';
import { DATA_FUI_ICON } from '../utils/constants';
import type { FluentIconsProps } from '../utils/FluentIconsProps.types';

export type UseIconStateOptions = {
  flipInRtl?: boolean;
};

export type BaseIconState<
  TBaseAttributes extends React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>,
  TRefType extends HTMLElement | SVGSVGElement,
> = Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'>;

/**
 * Styling-agnostic icon state shared by the Griffel and headless APIs.
 *
 * Handles the parts that are identical regardless of styling strategy:
 * - strips non-DOM props (`filled`)
 * - maps `primaryFill` -> `fill`
 * - applies a11y (`title` -> `aria-label`, otherwise `aria-hidden`; `role="img"`)
 * - sets the base `data-fui-icon` attribute so any icon is CSS-selectable
 * - resolves the RTL flip decision from icon context
 *
 * Callers layer their own className / additional `data-*` attribute styling on
 * top, and apply the visual RTL flip using `isRtlFlip`.
 */
export const useBaseIconState = <
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement,
>(
  props: FluentIconsProps<TBaseAttributes, TRefType>,
  options?: UseIconStateOptions,
): { state: BaseIconState<TBaseAttributes, TRefType>; isRtlFlip: boolean } => {
  const {
    // remove unwanted props to be set on the svg/html element
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filled,
    // consumed by the icon factory to scope color-icon ids, never a DOM attribute
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    idPrefix,
    title,
    primaryFill = 'currentColor',
    ...rest
  } = props;
  const state = {
    ...rest,
    fill: primaryFill,
  } as BaseIconState<TBaseAttributes, TRefType>;

  const iconContext = useIconContext();
  const isRtlFlip = Boolean(options?.flipInRtl && iconContext?.textDirection === 'rtl');

  if (title) {
    state['aria-label'] = title;
  }

  if (!state['aria-label'] && !state['aria-labelledby']) {
    state['aria-hidden'] = true;
  } else {
    state['role'] = 'img';
  }

  // Universal data attribute so any icon (SVG or font) can be targeted via `[data-fui-icon]`.
  state[DATA_FUI_ICON] = '';

  return { state, isRtlFlip };
};
