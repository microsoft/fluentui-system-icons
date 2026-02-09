import * as webpack from 'webpack';
import { dirname, resolve } from 'path';
import { readFile } from 'fs/promises';

const PLUGIN_NAME = 'FluentUIReactIconsSvgSpriteSubsettingPlugin';

/**
 * Matches the ESM and CJS `@fluentui/react-icons/svg-sprite/*` entrypoints.
 *
 * Examples:
 * - .../react-icons/lib/atoms/svg-sprite/backpack.js
 * - .../react-icons/lib-cjs/atoms/svg-sprite/backpack.js
 */
const REACT_ICONS_SVG_SPRITE_JS_MODULE_IMPORT_PATTERN =
  /react-icons[\/\\]lib(-cjs)?[\/\\]atoms[\/\\]svg-sprite[\/\\][\w-]+\.js$/;

const ATOMS_SVG_SPRITE_DIR_PATTERN = /(^|[\/\\])atoms[\/\\]svg-sprite([\/\\]|$)/;

export type SvgSpriteOptimizationMode = 'atomic' | 'merged';

export interface FluentUIReactIconsSvgSpriteSubsettingPluginOptions {
  /**
   * `atomic`: subset each imported sprite file.
   * `merged`: emit a single merged sprite and redirect sprite imports to it.
   */
  mode?: SvgSpriteOptimizationMode;

  /**
   * Output filename for merged sprite, relative to webpack output path.
   * Only used in `merged` mode.
   */
  mergedSpriteFilename?: string;

  /**
   * When true, the plugin will set `optimization.usedExports = true` if it is unset.
   * This improves the chances that Webpack provides used-export info needed for subsetting.
   */
  forceEnableUsedExports?: boolean;
}

export default class FluentUIReactIconsSvgSpriteSubsettingPlugin implements webpack.WebpackPluginInstance {
  private options: Required<FluentUIReactIconsSvgSpriteSubsettingPluginOptions>;

  constructor(options: FluentUIReactIconsSvgSpriteSubsettingPluginOptions = {}) {
    this.options = {
      mode: options.mode ?? 'atomic',
      mergedSpriteFilename: options.mergedSpriteFilename ?? 'fluentui-react-icons.svg',
      forceEnableUsedExports: options.forceEnableUsedExports ?? true,
    };
  }

  apply(compiler: webpack.Compiler) {
    if (this.options.forceEnableUsedExports) {
      compiler.options.optimization = compiler.options.optimization ?? {};
      // In production mode this is already enabled; in development it is often disabled.
      if (compiler.options.optimization.usedExports === undefined) {
        compiler.options.optimization.usedExports = true;
      }
    }

    if (this.options.mode === 'merged') {
      // Make merged sprite filename available to the runtime module.
      new webpack.DefinePlugin({
        __FLUENTUI_REACT_ICONS_SVG_SPRITE_FILENAME__: JSON.stringify(this.options.mergedSpriteFilename),
      }).apply(compiler);

      const runtimeModulePath = resolve(__dirname, 'runtime', 'mergedSpriteUrl');

      compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, normalModuleFactory => {
        normalModuleFactory.hooks.beforeResolve.tap(PLUGIN_NAME, resolveData => {
          if (!resolveData) {
            return;
          }

          // Only rewrite sprite SVG imports that happen *inside* the react-icons svg-sprite modules.
          // In those modules we always see `import sprite from './<name>.svg'`.
          if (typeof resolveData.request === 'string' && resolveData.request.endsWith('.svg')) {
            if (typeof resolveData.context === 'string' && ATOMS_SVG_SPRITE_DIR_PATTERN.test(resolveData.context)) {
              resolveData.request = runtimeModulePath;
            }
          }
        });
      });
    }

    compiler.hooks.compilation.tap(PLUGIN_NAME, compilation => {
      compilation.hooks.optimizeAssets.tapPromise(PLUGIN_NAME, async () => {
        const pkgToSpriteResourceToUsedIds = new Map<string, Map<string, Set<string>>>();

        for (const m of compilation.modules) {
          if (!isFluentUIReactSvgSpriteEntrypointModule(m)) {
            continue;
          }

          const moduleSource = await getModuleSource(m);
          const spriteFileAbsPath = getReferencedSpritePath(m, moduleSource);
          if (!spriteFileAbsPath) {
            continue;
          }

          const exportNameToSymbolId = getExportNameToSymbolIdMap(moduleSource);
          if (exportNameToSymbolId.size === 0) {
            continue;
          }

          const usedExports = compilation.moduleGraph.getUsedExports(m, undefined);
          const symbolIds = getUsedSymbolIds(usedExports, exportNameToSymbolId);

          const pkgLibPath = resolve(dirname(m.resource), '../..');
          const spriteMap = pkgToSpriteResourceToUsedIds.get(pkgLibPath) ?? new Map<string, Set<string>>();

          const existing = spriteMap.get(spriteFileAbsPath) ?? new Set<string>();
          for (const id of symbolIds) {
            existing.add(id);
          }
          spriteMap.set(spriteFileAbsPath, existing);

          pkgToSpriteResourceToUsedIds.set(pkgLibPath, spriteMap);
        }

        if (this.options.mode === 'merged') {
          if (pkgToSpriteResourceToUsedIds.size === 0) {
            return;
          }

          const combinedSpriteResourceToIds = new Map<string, Set<string>>();
          for (const spriteResourceToIds of pkgToSpriteResourceToUsedIds.values()) {
            for (const [spriteResource, ids] of spriteResourceToIds) {
              const existing = combinedSpriteResourceToIds.get(spriteResource) ?? new Set<string>();
              for (const id of ids) {
                existing.add(id);
              }
              combinedSpriteResourceToIds.set(spriteResource, existing);
            }
          }

          const mergedSvg = await buildMergedSprite(combinedSpriteResourceToIds);

          compilation.emitAsset(this.options.mergedSpriteFilename, new webpack.sources.RawSource(mergedSvg));
          return;
        }

        // Atomic mode: subset each emitted sprite SVG asset down to only the used symbol IDs.
        for (const [pkgLibPath, spriteResourceToIds] of pkgToSpriteResourceToUsedIds) {
          await subsetAtomicSpritesForPackage(compilation, pkgLibPath, spriteResourceToIds);
        }
      });
    });
  }
}

async function subsetAtomicSpritesForPackage(
  compilation: webpack.Compilation,
  pkgLibPath: string,
  spriteResourceToIds: Map<string, Set<string>>,
) {
  const resourceToAssetName = new Map<string, string>();

  for (const m of compilation.modules) {
    if (!isNormalModule(m)) {
      continue;
    }
    const resource = m.resource;
    if (!resource || !resource.endsWith('.svg')) {
      continue;
    }
    if (!resource.includes('react-icons')) {
      continue;
    }
    if (!resource.includes(pkgLibPath)) {
      continue;
    }
    if (!ATOMS_SVG_SPRITE_DIR_PATTERN.test(resource)) {
      continue;
    }

    const assetName = m.buildInfo?.filename;
    if (assetName) {
      resourceToAssetName.set(resource, assetName);
    }
  }

  const optimizationPromises: Promise<void>[] = [];

  for (const [spriteResource, usedIds] of spriteResourceToIds) {
    const assetName = resourceToAssetName.get(spriteResource);
    if (!assetName) {
      continue;
    }

    optimizationPromises.push(
      (async () => {
        let source = compilation.assets[assetName].source();
        if (typeof source !== 'string') {
          source = source.toString();
        }

        const next = subsetSpriteSvg(source, usedIds);
        compilation.assets[assetName] = new webpack.sources.RawSource(next);
      })(),
    );
  }

  await Promise.all(optimizationPromises);
}

function isNormalModule(m: webpack.Module): m is webpack.NormalModule {
  return m instanceof webpack.NormalModule;
}

function isFluentUIReactSvgSpriteEntrypointModule(m: webpack.Module): m is webpack.NormalModule {
  if (!isNormalModule(m)) {
    return false;
  }

  const resource = m.resource;
  if (!resource) {
    return false;
  }

  // Cheap pre-filter before regex
  if (!resource.includes('react-icons')) {
    return false;
  }

  return REACT_ICONS_SVG_SPRITE_JS_MODULE_IMPORT_PATTERN.test(resource);
}

async function getModuleSource(m: webpack.NormalModule): Promise<string> {
  const maybeSource = m.originalSource?.();
  if (maybeSource) {
    const src = maybeSource.source();
    if (typeof src === 'string') {
      return src;
    }
    return src.toString();
  }

  // Fallback (should be rare)
  return readFile(m.resource, 'utf8');
}

function getReferencedSpritePath(module: webpack.NormalModule, moduleSource: string): string | null {
  // ESM form: `import sprite from './backpack.svg';`
  const esm = moduleSource.match(/import\s+\w+\s+from\s+['"](.+?\.svg)['"];?/);
  const rawPath = esm?.[1];
  if (rawPath) {
    return resolve(dirname(module.resource), rawPath);
  }

  // CJS form: `var sprite = require('./backpack.svg');`
  const cjs = moduleSource.match(/require\(['"](.+?\.svg)['"]\)/);
  const rawPath2 = cjs?.[1];
  if (rawPath2) {
    return resolve(dirname(module.resource), rawPath2);
  }

  return null;
}

function getExportNameToSymbolIdMap(moduleSource: string): Map<string, string> {
  const map = new Map<string, string>();

  // Matches: `export const BackpackFilled = ( /*#__PURE__*/createFluentIcon('BackpackFilled', "1em", sprite));`
  const exportRegex = /export\s+const\s+(\w+)\s*=\s*\([^)]*?createFluentIcon\(\s*['"]([^'"]+)['"]/g;

  let match: RegExpExecArray | null;
  while ((match = exportRegex.exec(moduleSource))) {
    const exportName = match[1];
    const symbolId = match[2];
    map.set(exportName, symbolId);
  }

  return map;
}

function getUsedSymbolIds(
  usedExports: ReturnType<webpack.Compilation['moduleGraph']['getUsedExports']>,
  exportNameToSymbolId: Map<string, string>,
): Set<string> {
  const usedIds = new Set<string>();

  // If Webpack can’t tell, assume all exports are used.
  if (usedExports === null || typeof usedExports === 'boolean') {
    for (const symbolId of exportNameToSymbolId.values()) {
      usedIds.add(symbolId);
    }
    return usedIds;
  }

  for (const exportName of usedExports) {
    const symbolId = exportNameToSymbolId.get(exportName);
    if (symbolId) {
      usedIds.add(symbolId);
    }
  }

  return usedIds;
}

function subsetSpriteSvg(svgText: string, usedIds: Set<string>): string {
  if (usedIds.size === 0) {
    return svgText;
  }

  const symbolRegex = /<symbol\b[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<\/symbol>/g;
  const keptSymbols: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = symbolRegex.exec(svgText))) {
    const id = match[1];
    if (usedIds.has(id)) {
      keptSymbols.push(match[0]);
    }
  }

  // If the regex failed for some reason, fall back to original.
  if (keptSymbols.length === 0) {
    return svgText;
  }

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n' +
    keptSymbols.map(s => (s.startsWith('  ') ? s : `  ${s}`)).join('\n') +
    '\n</svg>\n'
  );
}

async function buildMergedSprite(spriteResourceToIds: Map<string, Set<string>>): Promise<string> {
  const mergedSymbolsById = new Map<string, string>();

  for (const [spriteResource, usedIds] of spriteResourceToIds) {
    const svgText = await readFile(spriteResource, 'utf8');

    const symbolRegex = /<symbol\b[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<\/symbol>/g;
    let match: RegExpExecArray | null;

    while ((match = symbolRegex.exec(svgText))) {
      const id = match[1];
      if (usedIds.has(id) && !mergedSymbolsById.has(id)) {
        mergedSymbolsById.set(id, match[0]);
      }
    }
  }

  const mergedSymbols = Array.from(mergedSymbolsById.values());

  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n' +
    mergedSymbols.map(s => (s.startsWith('  ') ? s : `  ${s}`)).join('\n') +
    '\n</svg>\n'
  );
}
