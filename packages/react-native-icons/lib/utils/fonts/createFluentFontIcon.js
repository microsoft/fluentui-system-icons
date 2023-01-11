"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFluentFontIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("@griffel/react");
const useIconState_1 = require("../useIconState");
const FluentSystemIcons_Filled_ttf_1 = __importDefault(require("./FluentSystemIcons-Filled.ttf"));
const FluentSystemIcons_Filled_woff_1 = __importDefault(require("./FluentSystemIcons-Filled.woff"));
const FluentSystemIcons_Filled_woff2_1 = __importDefault(require("./FluentSystemIcons-Filled.woff2"));
const FluentSystemIcons_Regular_ttf_1 = __importDefault(require("./FluentSystemIcons-Regular.ttf"));
const FluentSystemIcons_Regular_woff_1 = __importDefault(require("./FluentSystemIcons-Regular.woff"));
const FluentSystemIcons_Regular_woff2_1 = __importDefault(require("./FluentSystemIcons-Regular.woff2"));
const FluentSystemIcons_Resizable_ttf_1 = __importDefault(require("./FluentSystemIcons-Resizable.ttf"));
const FluentSystemIcons_Resizable_woff_1 = __importDefault(require("./FluentSystemIcons-Resizable.woff"));
const FluentSystemIcons_Resizable_woff2_1 = __importDefault(require("./FluentSystemIcons-Resizable.woff2"));
const FONT_FAMILY_MAP = {
    [0 /* Filled */]: 'FluentSystemIconsFilled',
    [1 /* Regular */]: 'FluentSystemIconsRegular',
    [2 /* Resizable */]: 'FluentSystemIcons',
};
const useStaticStyles = react_1.makeStaticStyles(`
@font-face {
    font-family: ${FONT_FAMILY_MAP[0 /* Filled */]};
    src: url(${JSON.stringify(FluentSystemIcons_Filled_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Filled_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Filled_ttf_1.default)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[1 /* Regular */]};
    src: url(${JSON.stringify(FluentSystemIcons_Regular_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Regular_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Regular_ttf_1.default)}) format("truetype");
}
@font-face {
    font-family: ${FONT_FAMILY_MAP[2 /* Resizable */]};
    src: url(${JSON.stringify(FluentSystemIcons_Resizable_woff2_1.default)}) format("woff2"),
    url(${JSON.stringify(FluentSystemIcons_Resizable_woff_1.default)}) format("woff"),
    url(${JSON.stringify(FluentSystemIcons_Resizable_ttf_1.default)}) format("truetype");
}
`);
const useRootStyles = react_1.makeStyles({
    root: {
        display: 'inline-block',
        fontStyle: 'normal',
        lineHeight: '1em',
        "@media (forced-colors: active)": {
            forcedColorAdjust: 'auto',
        }
    },
    [0 /* Filled */]: {
        fontFamily: 'FluentSystemIconsFilled',
    },
    [1 /* Regular */]: {
        fontFamily: 'FluentSystemIconsRegular',
    },
    [2 /* Resizable */]: {
        fontFamily: 'FluentSystemIcons',
    },
});
function createFluentFontIcon(displayName, codepoint, font, fontSize) {
    const Component = (props) => {
        useStaticStyles();
        const styles = useRootStyles();
        const className = react_1.mergeClasses(styles.root, styles[font], props.className);
        const state = useIconState_1.useIconState(Object.assign(Object.assign({}, props), { className }));
        // We want to keep the same API surface as the SVG icons, so translate `primaryFill` to `color`
        if (props.primaryFill) {
            state.style = Object.assign(Object.assign({}, state.style), { color: props.primaryFill });
        }
        if (fontSize) {
            state.style = Object.assign(Object.assign({}, state.style), { fontSize });
        }
        return React.createElement("i", Object.assign({}, state), codepoint);
    };
    Component.displayName = displayName;
    Component.codepoint = codepoint;
    return Component;
}
exports.createFluentFontIcon = createFluentFontIcon;
//# sourceMappingURL=createFluentFontIcon.js.map