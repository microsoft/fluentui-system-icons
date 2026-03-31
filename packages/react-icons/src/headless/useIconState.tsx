import * as React from 'react';
import { useIconContext } from '../contexts';
import type { FluentIconsProps } from './shared';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL } from './shared';

export type UseIconStateOptions = {
  flipInRtl?: boolean;
};

/**
 * Headless version of useIconState
 *
 * Handles:
 * - a11y: aria-hidden, aria-label, role="img"
 * - RTL: sets data-fui-icon-rtl attribute when flipInRtl + RTL context
 * - Base: sets data-fui-icon attribute for CSS targeting
 * - Fill: maps primaryFill to fill prop
 */
export const useIconState = <
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement,
>(
  props: FluentIconsProps<TBaseAttributes, TRefType>,
  options?: UseIconStateOptions,
): Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'> => {
  const {
    // remove unwanted props to be set on the svg/html element
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    filled,
    title,

    primaryFill = 'currentColor',
    ...rest
  } = props;
  const state = {
    ...rest,
    fill: primaryFill,
  } as Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'>;

  const iconContext = useIconContext();
  const isRtlFlip = options?.flipInRtl && iconContext?.textDirection === 'rtl';

  // Data attributes for CSS targeting
  state[DATA_FUI_ICON] = '';
  if (isRtlFlip) {
    state[DATA_FUI_ICON_RTL] = '';
  }

  if (title) {
    state['aria-label'] = title;
  }

  if (!state['aria-label'] && !state['aria-labelledby']) {
    state['aria-hidden'] = true;
  } else {
    state['role'] = 'img';
  }

  return state;
};
