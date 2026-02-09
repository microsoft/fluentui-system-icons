declare const __webpack_public_path__: string;
// Defined by the plugin via `webpack.DefinePlugin`.
declare const __FLUENTUI_REACT_ICONS_SVG_SPRITE_FILENAME__: string;

const publicPath = typeof __webpack_public_path__ === 'string' ? __webpack_public_path__ : '';

export default publicPath + __FLUENTUI_REACT_ICONS_SVG_SPRITE_FILENAME__;
