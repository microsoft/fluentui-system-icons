import { useIconContext } from "../contexts";
import { FluentIconsProps } from "./FluentIconsProps.types";
import { mergeClasses } from "@griffel/react";
import { useStyles } from "./useIconStyles.styles";


export type UseIconStateOptions = {
  flipInRtl?: boolean;
}

export const useIconState = <
  TBaseAttributes extends
    | React.SVGAttributes<SVGElement>
    | React.HTMLAttributes<HTMLElement> = React.SVGAttributes<SVGElement>,
  TRefType extends HTMLElement | SVGSVGElement = SVGSVGElement,
>(
  props: FluentIconsProps<TBaseAttributes, TRefType>,
  options?: UseIconStateOptions,
): Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentIconsProps<TBaseAttributes, TRefType>, 'primaryFill'>;

    const styles = useStyles();
    const iconContext = useIconContext();

    state.className = mergeClasses(
      styles.root,
      options?.flipInRtl && iconContext?.textDirection === 'rtl' && styles.rtl,
      state.className
    );

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
