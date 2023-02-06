import * as React from 'react';
import { FluentIconsProps } from '../FluentIconsProps.types';
import { makeStyles, makeStaticStyles, mergeClasses } from "@griffel/react";
import { useIconState } from '../useIconState';

import fontFilledTtf from './FluentSystemIcons-Filled.ttf';
import fontFilledWoff from './FluentSystemIcons-Filled.woff';
import fontFilledWoff2 from './FluentSystemIcons-Filled.woff2';

import fontRegularTtf from './FluentSystemIcons-Regular.ttf';
import fontRegularWoff from './FluentSystemIcons-Regular.woff';
import fontRegularWoff2 from './FluentSystemIcons-Regular.woff2';

import fontOneSizeTtf from './FluentSystemIcons-Resizable.ttf';
import fontOneSizeWoff from './FluentSystemIcons-Resizable.woff';
import fontOneSizeWoff2 from './FluentSystemIcons-Resizable.woff2';

export const enum FontFile {
    Filled = 0,
    Regular = 1,
    Resizable = 2
}

const FONT_FAMILY_MAP = {
    [FontFile.Filled]: 'FluentSystemIconsFilled',
    [FontFile.Regular]: 'FluentSystemIconsRegular',
    [FontFile.Resizable]: 'FluentSystemIcons',
} as const;

const useStaticStyles = makeStaticStyles(`
@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Filled]};
    src: url(${JSON.stringify(fontFilledWoff2)}) format("woff2"),
    url(${JSON.stringify(fontFilledWoff)}) format("woff"),
    url(${JSON.stringify(fontFilledTtf)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Regular]};
    src: url(${JSON.stringify(fontRegularWoff2)}) format("woff2"),
    url(${JSON.stringify(fontRegularWoff)}) format("woff"),
    url(${JSON.stringify(fontRegularTtf)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Resizable]};
    src: url(${JSON.stringify(fontOneSizeWoff2)}) format("woff2"),
    url(${JSON.stringify(fontOneSizeWoff)}) format("woff"),
    url(${JSON.stringify(fontOneSizeTtf)}) format("truetype");
}
`)

const useRootStyles = makeStyles({
    root: {
        display: 'inline-block',
        fontStyle: 'normal',
        lineHeight: '1em',

        "@media (forced-colors: active)": {
            forcedColorAdjust: 'auto',
        }
    },
    [FontFile.Filled]: {
        fontFamily: 'FluentSystemIconsFilled',
    },
    [FontFile.Regular]: {
        fontFamily: 'FluentSystemIconsRegular',
    },
    [FontFile.Resizable]: {
        fontFamily: 'FluentSystemIcons',
    },
});

export function createFluentFontIcon(displayName: string, codepoint: string, font: FontFile, fontSize?: number): React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>>> & { codepoint: string} {
    const Component: React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>>> & { codepoint: string} = (props) => {
        useStaticStyles();
        const styles = useRootStyles();
        const className = mergeClasses(styles.root, styles[font], props.className);
        const state = useIconState<React.HTMLAttributes<HTMLElement>>({...props, className});


        // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
        if (props.primaryFill) {
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