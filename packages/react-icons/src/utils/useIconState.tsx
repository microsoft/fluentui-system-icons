import { mergeClasses } from '@griffel/react';
import type { FluentIconsProps } from './FluentIconsProps.types';
import { useStyles } from './useIconStyles.styles';
import { useBaseIconState } from '../core/useBaseIconState';
import type { UseIconStateOptions } from '../core/useBaseIconState';

export type { UseIconStateOptions };

export const useIconState = <
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement,
>(
  props: FluentIconsProps<TBaseAttributes, TRefType>,
  options?: UseIconStateOptions,
): Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'> => {
  const styles = useStyles();
  const { state, isRtlFlip } = useBaseIconState(props, options);
  state.className = mergeClasses(styles.root, isRtlFlip && styles.rtl, state.className);
  return state;
};
