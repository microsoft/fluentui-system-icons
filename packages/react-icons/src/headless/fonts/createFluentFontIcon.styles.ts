import fontFilledTtf from '../../utils/fonts/FluentSystemIcons-Filled.ttf';
import fontFilledWoff from '../../utils/fonts/FluentSystemIcons-Filled.woff';
import fontFilledWoff2 from '../../utils/fonts/FluentSystemIcons-Filled.woff2';

import fontRegularTtf from '../../utils/fonts/FluentSystemIcons-Regular.ttf';
import fontRegularWoff from '../../utils/fonts/FluentSystemIcons-Regular.woff';
import fontRegularWoff2 from '../../utils/fonts/FluentSystemIcons-Regular.woff2';

import fontLightTtf from '../../utils/fonts/FluentSystemIcons-Light.ttf';
import fontLightWoff from '../../utils/fonts/FluentSystemIcons-Light.woff';
import fontLightWoff2 from '../../utils/fonts/FluentSystemIcons-Light.woff2';

import fontOneSizeTtf from '../../utils/fonts/FluentSystemIcons-Resizable.ttf';
import fontOneSizeWoff from '../../utils/fonts/FluentSystemIcons-Resizable.woff';
import fontOneSizeWoff2 from '../../utils/fonts/FluentSystemIcons-Resizable.woff2';

import { FontFile } from '../../utils/fonts/createFluentFontIcon.shared';

const FONT_FAMILY_MAP = {
  [FontFile.Filled]: 'FluentSystemIconsFilled',
  [FontFile.Regular]: 'FluentSystemIconsRegular',
  [FontFile.Light]: 'FluentSystemIconsLight',
  [FontFile.Resizable]: 'FluentSystemIcons',
} as const;

export function createFluentIconFontFaceCSS(): string {
  return `
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
`;
}
