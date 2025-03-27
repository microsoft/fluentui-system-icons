import type { SvgProps } from "react-native-svg";
import type { FluentIconsProps } from "./FluentIconsProps.types";
import type { TextProps } from "react-native";

export const useIconState = <TBaseAttributes extends (SvgProps | TextProps) = SvgProps>(props: FluentIconsProps<TBaseAttributes>): Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'> => {
    const { title, primaryFill = "currentColor", ...rest } = props;
    const state = {
      ...rest,
      title: undefined,
      fill: primaryFill
    } as Omit<FluentIconsProps<TBaseAttributes>, 'primaryFill'>;
  
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
