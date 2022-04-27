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

import fontOneSizeTtf from './FluentSystemIcons-OneSize.ttf';
import fontOneSizeWoff from './FluentSystemIcons-OneSize.woff';
import fontOneSizeWoff2 from './FluentSystemIcons-OneSize.woff2';

export const enum FontFile {
    Filled = 0,
    Regular = 1,
    OneSize = 2
}

const FONT_FAMILY_MAP = {
    [FontFile.Filled]: 'FluentSystemIconsFilled',
    [FontFile.Regular]: 'FluentSystemIconsRegular',
    [FontFile.OneSize]: 'FluentSystemIcons',
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
    font-family: ${FONT_FAMILY_MAP[FontFile.OneSize]};
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
    [FontFile.OneSize]: {
        fontFamily: 'FluentSystemIcons',
    },
});

export function createFluentFontIcon(displayName: string, codepoint: string, font: FontFile, fontSize?: number): React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>>> {
    const Component: React.FC<FluentIconsProps<React.HTMLAttributes<HTMLElement>>> = (props) => {
        useStaticStyles();
        const styles = useRootStyles();
        props.className = mergeClasses(styles.root, styles[font], props.className);
        const { primaryFill, ...state } = useIconState<React.HTMLAttributes<HTMLElement>>(props);


        // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
        if (primaryFill) {
            state.style = {
                ...state.style,
                color: primaryFill
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
    return Component;
}