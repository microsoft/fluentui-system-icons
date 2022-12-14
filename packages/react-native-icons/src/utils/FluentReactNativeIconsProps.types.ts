import * as React from "react";
import { ImageStyle, StyleProp, TextStyle } from 'react-native';

export type FluentReactNativeIconsProps<TBaseAttributes extends (React.SVGAttributes<SVGElement> | React.HTMLAttributes<HTMLElement>) = React.SVGAttributes<SVGElement>> = (TBaseAttributes) & {
	primaryFill?: string
	style?: StyleProp<ImageStyle | TextStyle>;
	filled?: boolean;
	title?: string;
}