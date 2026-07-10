import * as React from 'react';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';
import type { FluentIconsProps } from '../FluentIconsProps.types';
import { useIconState } from '../useIconState';

// Currently logic for font icons is not implemented
// for React Native

export const enum FontFile {
  Filled = 0,
  Regular = 1,
  Resizable = 2,
  Light = 3,
}

export function createFluentFontIcon(
  displayName: string,
  codepoint: string,
  _font: FontFile,
  fontSize?: number,
): React.FC<FluentIconsProps<TextProps>> & { codepoint: string } {
  const Component: React.FC<FluentIconsProps<TextProps>> & { codepoint: string } = (props) => {
    const state = useIconState<TextProps>(props);

    if (state.style == undefined && (props.primaryFill || fontSize)) {
      state.style = {};
    }

    // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
    if (props.primaryFill) {
      // @ts-expect-error TypeScript cannot infer that `state.style` is defined
      state.style['color'] = props.primaryFill;
    }

    if (fontSize) {
      // @ts-expect-error TypeScript cannot infer that `state.style` is defined
      state.style['fontSize'] = fontSize;
    }

    return <Text {...state}>{codepoint}</Text>;
  };
  Component.displayName = displayName;
  Component.codepoint = codepoint;
  return Component;
}
