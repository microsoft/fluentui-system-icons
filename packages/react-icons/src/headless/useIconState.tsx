import type { FluentIconsProps } from './shared';
import { DATA_FUI_ICON, DATA_FUI_ICON_RTL } from './shared';
import { useBaseIconState } from '../core/useBaseIconState';
import type { UseIconStateOptions } from '../core/useBaseIconState';

export type { UseIconStateOptions };

/**
 * Headless version of useIconState
 *
 * Handles:
 * - a11y: aria-hidden, aria-label, role="img"
 * - RTL: sets data-fui-icon-rtl attribute when flipInRtl + RTL context
 * - Headless: sets data-fui-icon attribute for CSS targeting
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
  const { state, isRtlFlip } = useBaseIconState(props, options);

  // Data attributes for CSS targeting
  state[DATA_FUI_ICON] = '';
  if (isRtlFlip) {
    state[DATA_FUI_ICON_RTL] = '';
  }

  return state;
};
