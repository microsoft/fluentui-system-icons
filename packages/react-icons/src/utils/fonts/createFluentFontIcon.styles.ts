
import { makeStyles, makeStaticStyles, mergeClasses } from "@griffel/react";

import fontFilledTtf from './FluentSystemIcons-Filled.ttf';
import fontFilledWoff from './FluentSystemIcons-Filled.woff';
import fontFilledWoff2 from './FluentSystemIcons-Filled.woff2';

import fontRegularTtf from './FluentSystemIcons-Regular.ttf';
import fontRegularWoff from './FluentSystemIcons-Regular.woff';
import fontRegularWoff2 from './FluentSystemIcons-Regular.woff2';

import fontLightTtf from './FluentSystemIcons-Light.ttf';
import fontLightWoff from './FluentSystemIcons-Light.woff';
import fontLightWoff2 from './FluentSystemIcons-Light.woff2';

import fontOneSizeTtf from './FluentSystemIcons-Resizable.ttf';
import fontOneSizeWoff from './FluentSystemIcons-Resizable.woff';
import fontOneSizeWoff2 from './FluentSystemIcons-Resizable.woff2';
import { FontFile } from "./createFluentFontIcon.shared";


 const FONT_FAMILY_MAP = {
    [FontFile.Filled]: 'FluentSystemIconsFilled',
    [FontFile.Regular]: 'FluentSystemIconsRegular',
    [FontFile.Resizable]: 'FluentSystemIcons',
} as const;

export const useStaticStyles = makeStaticStyles(`
@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Filled]};
    font-display: "block";
    src: url(${JSON.stringify(fontFilledWoff2)}) format("woff2"),
    url(${JSON.stringify(fontFilledWoff)}) format("woff"),
    url(${JSON.stringify(fontFilledTtf)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Regular]};
    font-display: "block";
    src: url(${JSON.stringify(fontRegularWoff2)}) format("woff2"),
    url(${JSON.stringify(fontRegularWoff)}) format("woff"),
    url(${JSON.stringify(fontRegularTtf)}) format("truetype");
}

@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Light]};
    src: url(${JSON.stringify(fontLightWoff2)}) format("woff2"),
    url(${JSON.stringify(fontLightWoff)}) format("woff"),
    url(${JSON.stringify(fontLightTtf)}) format("truetype");
}

@font-face {
    font-family: ${FONT_FAMILY_MAP[FontFile.Resizable]};
    font-display: "block";
    src: url(${JSON.stringify(fontOneSizeWoff2)}) format("woff2"),
    url(${JSON.stringify(fontOneSizeWoff)}) format("woff"),
    url(${JSON.stringify(fontOneSizeTtf)}) format("truetype");
}
`)

export const useRootStyles = makeStyles({
    root: {
        display: 'inline-block',
        fontStyle: 'normal',
        lineHeight: '1em',
        color: 'currentColor',

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
    [FontFile.Light]: {
        fontFamily: 'FluentSystemIconsLight',
    }
});