"use strict";
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
exports.useIconState = void 0;
const react_1 = require("@griffel/react");
const useRootStyles = react_1.makeStyles({
    root: {
        display: 'inline',
        lineHeight: 0,
        "@media (forced-colors: active)": {
            forcedColorAdjust: 'auto',
        }
    }
});
const useIconState = (props) => {
    const { title, primaryFill = "currentColor" } = props, rest = __rest(props, ["title", "primaryFill"]);
    const state = Object.assign(Object.assign({}, rest), { title: undefined, fill: primaryFill });
    const styles = useRootStyles();
    state.className = react_1.mergeClasses(styles.root, state.className);
    if (title) {
        state['aria-label'] = title;
    }
    if (!state['aria-label'] && !state['aria-labelledby']) {
        state['aria-hidden'] = true;
    }
    else {
        state['role'] = 'img';
    }
    return state;
};
exports.useIconState = useIconState;
//# sourceMappingURL=useIconState.js.map