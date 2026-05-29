import type { ColorValue, TextProps } from 'react-native';
import type { SvgProps } from 'react-native-svg';

export type FluentIconsProps<TBaseAttributes extends SvgProps | TextProps = SvgProps> = TBaseAttributes & {
  primaryFill?: ColorValue;
  filled?: boolean;
  title?: string;
};
