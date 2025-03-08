import * as React from 'react';
import type { FluentIconsProps } from '../FluentIconsProps.types';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';
import { useIconState } from '../useIconState';

// Comment out font work for RN - it's currently using
// web-specific logic and not being exported to the RN package,
// but good to have this here for future reference

// import fontFilledTtf from './FluentSystemIcons-Filled.ttf';
// import fontFilledWoff from './FluentSystemIcons-Filled.woff';
// import fontFilledWoff2 from './FluentSystemIcons-Filled.woff2';

// import fontRegularTtf from './FluentSystemIcons-Regular.ttf';
// import fontRegularWoff from './FluentSystemIcons-Regular.woff';
// import fontRegularWoff2 from './FluentSystemIcons-Regular.woff2';

// import fontLightTtf from './FluentSystemIcons-Light.ttf';
// import fontLightWoff from './FluentSystemIcons-Light.woff';
// import fontLightWoff2 from './FluentSystemIcons-Light.woff2';

// import fontOneSizeTtf from './FluentSystemIcons-Resizable.ttf';
// import fontOneSizeWoff from './FluentSystemIcons-Resizable.woff';
// import fontOneSizeWoff2 from './FluentSystemIcons-Resizable.woff2';

export const enum FontFile {
    Filled = 0,
    Regular = 1,
    Resizable = 2,
    Light = 3
}

// const FONT_FAMILY_MAP = {
//     [FontFile.Filled]: 'FluentSystemIconsFilled',
//     [FontFile.Regular]: 'FluentSystemIconsRegular',
//     [FontFile.Resizable]: 'FluentSystemIcons',
// } as const;

// const useStaticStyles = makeStaticStyles(`
// @font-face {
//     font-family: ${FONT_FAMILY_MAP[FontFile.Filled]};
//     src: url(${JSON.stringify(fontFilledWoff2)}) format("woff2"),
//     url(${JSON.stringify(fontFilledWoff)}) format("woff"),
//     url(${JSON.stringify(fontFilledTtf)}) format("truetype");
// }
// @font-face {
//     font-family: ${FONT_FAMILY_MAP[FontFile.Regular]};
//     src: url(${JSON.stringify(fontRegularWoff2)}) format("woff2"),
//     url(${JSON.stringify(fontRegularWoff)}) format("woff"),
//     url(${JSON.stringify(fontRegularTtf)}) format("truetype");
// }

// @font-face {
//     font-family: ${FONT_FAMILY_MAP[FontFile.Light]};
//     src: url(${JSON.stringify(fontLightWoff2)}) format("woff2"),
//     url(${JSON.stringify(fontLightWoff)}) format("woff"),
//     url(${JSON.stringify(fontLightTtf)}) format("truetype");
// }

// @font-face {
//     font-family: ${FONT_FAMILY_MAP[FontFile.Resizable]};
//     src: url(${JSON.stringify(fontOneSizeWoff2)}) format("woff2"),
//     url(${JSON.stringify(fontOneSizeWoff)}) format("woff"),
//     url(${JSON.stringify(fontOneSizeTtf)}) format("truetype");
// }
// `)

// const useRootStyles = makeStyles({
//     root: {
//         display: 'inline-block',
//         fontStyle: 'normal',
//         lineHeight: '1em',

//         "@media (forced-colors: active)": {
//             forcedColorAdjust: 'auto',
//         }
//     },
//     [FontFile.Filled]: {
//         fontFamily: 'FluentSystemIconsFilled',
//     },
//     [FontFile.Regular]: {
//         fontFamily: 'FluentSystemIconsRegular',
//     },
//     [FontFile.Resizable]: {
//         fontFamily: 'FluentSystemIcons',
//     },
//     [FontFile.Light]: {
//         fontFamily: 'FluentSystemIconsLight',
//     }
// });

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