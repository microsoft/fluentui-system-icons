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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const constants_1 = require("./constants");
const react_1 = require("@griffel/react");
const useBundledIconStyles = react_1.makeStyles({
    root: { display: "none" },
    visible: { display: "inline" }
});
const bundleIcon = (FilledIcon, RegularIcon) => {
    const Component = (props) => {
        const { className, primaryFill = 'currentColor', filled } = props, rest = __rest(props, ["className", "primaryFill", "filled"]);
        const styles = useBundledIconStyles();
        return (React.createElement(React.Fragment, null,
            React.createElement(FilledIcon, Object.assign({}, rest, { className: react_1.mergeClasses(styles.root, filled && styles.visible, constants_1.iconFilledClassName, className), fill: primaryFill })),
            React.createElement(RegularIcon, Object.assign({}, rest, { className: react_1.mergeClasses(styles.root, !filled && styles.visible, constants_1.iconRegularClassName, className), fill: primaryFill }))));
    };
    Component.displayName = "CompoundIcon";
    return Component;
};
exports.default = bundleIcon;
//# sourceMappingURL=bundleIcon.js.map