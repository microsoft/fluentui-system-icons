import { ImageStyle, StyleProp, TextStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

export type FluentReactNativeIconsProps = SvgProps & {
	primaryFill?: string
	style?: StyleProp<ImageStyle | TextStyle>;
	filled?: boolean;
	title?: string;
}