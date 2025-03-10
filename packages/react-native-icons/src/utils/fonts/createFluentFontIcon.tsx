import * as React from 'react';
import type { FluentIconsProps } from '../FluentIconsProps.types';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';
import { useIconState } from '../useIconState';

// Currently logic for font icons is not implemented
// for React Native

export const enum FontFile {
    Filled = 0,
    Regular = 1,
    Resizable = 2,
    Light = 3
}


export function createFluentFontIcon(displayName: string, codepoint: string, _font: FontFile, fontSize?: number): React.FC<FluentIconsProps<TextProps>> & { codepoint: string} {
    const Component: React.FC<FluentIconsProps<TextProps>> & { codepoint: string} = (props) => {
        const state = useIconState<TextProps>(props);

        if (state.style == undefined && (props.primaryFill || fontSize)) {
            state.style = {};
        }

        // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
        if (props.primaryFill) {
            state.style['color'] = props.primaryFill;
        }

        if (fontSize) {
            state.style['fontSize'] = fontSize;
        }

        return <Text {...state}>{codepoint}</Text>
    }
    Component.displayName = displayName;
    Component.codepoint = codepoint;
    return Component;
}