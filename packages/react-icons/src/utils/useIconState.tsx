import type { FluentIconsProps } from './FluentIconsProps.types';
import { DATA_FUI_ICON_RTL } from './constants';
import { useBaseIconState } from '../core/useBaseIconState';
import type { UseIconStateOptions } from '../core/useBaseIconState';

export type { UseIconStateOptions };

/**
 * Resolves the DOM state shared by every icon factory.
 *
 * Handles:
 * - a11y: `aria-hidden`, `aria-label`, `role="img"`
 * - fill: maps `primaryFill` to the `fill` prop
 * - CSS targeting: sets the `data-fui-icon` attribute
 * - RTL: sets `data-fui-icon-rtl` when `flipInRtl` is set and the icon context is RTL
 *
 * The visual result of the last two comes from the shipped stylesheet, which
 * consumers must import (`@fluentui/react-icons/styles.css`).
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

  if (isRtlFlip) {
    state[DATA_FUI_ICON_RTL] = '';
  }

  return state;
};
