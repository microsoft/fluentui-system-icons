import * as webpack from 'webpack';

export const MERGED_SPRITE_URL_GLOBAL = '__FLUENTUI_REACT_ICONS_SVG_SPRITE_URL__';

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
