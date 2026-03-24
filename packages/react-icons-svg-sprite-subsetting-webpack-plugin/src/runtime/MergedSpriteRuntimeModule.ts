import * as webpack from 'webpack';

const MERGED_SPRITE_URL_GLOBAL = '__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__';

/**
 * A Webpack RuntimeModule that emits bootstrap code setting a global variable
 * (`__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__`) to the public URL of the merged
 * sprite asset.
 *
 * Used in `merged` mode (non-inline) so that `mergedSpriteUrlModule` can read
 * the URL at runtime. Runs at `STAGE_ATTACH` to ensure `__webpack_public_path__`
 * is already initialised.
 */
export default class MergedSpriteRuntimeModule extends webpack.RuntimeModule {
  private readonly assetName: string;

  constructor(assetName: string) {
    // Run after webpack publicPath init so __webpack_public_path__ is defined before we use it.
    super('fluentui react-icons merged sprite url', webpack.RuntimeModule.STAGE_ATTACH);
    this.assetName = assetName;
  }

  generate() {
    const publicPath = webpack.RuntimeGlobals.publicPath;

    return [
      `var mergedSpriteUrl = ${publicPath} + ${JSON.stringify(this.assetName)};`,
      `var globalRef = typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : (typeof window !== 'undefined' ? window : {}));`,
      `globalRef.${MERGED_SPRITE_URL_GLOBAL} = mergedSpriteUrl;`,
    ].join('\n');
  }
}
