import * as React from 'react';
import { mergeClasses } from "@griffel/react";

import { FluentIconsProps } from '../FluentIconsProps.types';
import { useIconState } from '../useIconState';
import { fontIconClassName } from '../constants';

import { useRootStyles, useStaticStyles } from './createFluentFontIcon.styles';
import { FontFile } from './createFluentFontIcon.shared';

export type CreateFluentFontIconOptions = {
    flipInRtl?: boolean;
}

export function createFluentFontIcon(displayName: string, codepoint: string, font: FontFile, fontSize?: number, options?: CreateFluentFontIconOptions): React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & { codepoint: string} {
    const Component: React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>, HTMLElement>> & { codepoint: string} = (props) => {
        useStaticStyles();
        const styles = useRootStyles();
        const className = mergeClasses(styles.root, styles[font], fontIconClassName, props.className);
        const state = useIconState<React.HTMLAttributes<HTMLElement>, HTMLElement>({...props, className}, { flipInRtl: options?.flipInRtl });


        // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
        if (props.primaryFill && props.primaryFill.toLowerCase() !== 'currentcolor') {
            state.style = {
                ...state.style,
                color: props.primaryFill
            }
        }

        if (fontSize) {
            state.style = {
                ...state.style,
                fontSize
            }
        }

        return <i {...state}>{codepoint}</i>
    }
    Component.displayName = displayName;
    Component.codepoint = codepoint;
    return Component;
}