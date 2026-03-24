import * as webpack from 'webpack';
import subsetFont from 'subset-font';
import { extname, dirname, resolve } from 'path';
import { readFile } from 'fs/promises';

const PLUGIN_NAME = 'FluentUIReactIconsFontSubsettingPlugin';

const FONT_FILES_BASE_NAMES = [
  'FluentSystemIcons-Filled',
  'FluentSystemIcons-Resizable',
  'FluentSystemIcons-Regular',
  'FluentSystemIcons-Light',
];

const FONT_EXTENSIONS = ['.ttf', '.woff', '.woff2'];

/**
 *  Match both chunk files and atomic font imports:
 *  - lib/fonts/sizedIcons/chunk-0.js (chunk-based)
 *  - lib/atoms/fonts/access-time.js (atomic imports)
 */
const REACT_ICONS_FONT_MODULE_IMPORT_PATTERN =
  /react-icons[\/\\]lib(-cjs)?[\/\\](fonts[\/\\](sizedIcons|icons)[\/\\]chunk-\d+|atoms[\/\\]fonts[\/\\][\w-]+)\.js$/;

export default class FluentUIReactIconsFontSubsettingPlugin implements webpack.WebpackPluginInstance {
  /**
   * Entry point for the Webpack plugin that registers hooks to perform font subsetting for `@fluentui/react-icons`.
   *
   * This method is executed **once** by Webpack when the plugin is initialized during the compiler's
   * bootstrap phase. The internal logic hooked into `optimizeAssets` is executed **once per compilation**
   * (whenever Webpack processes the module graph and prepares to output assets) during the
   * asset optimization stage.
   *
   * It analyzes the module graph to determine which specific icons are used from Fluent UI icon packages
   * and triggers font subsetting to remove unused glyphs from the final output assets.
   *
   * @param compiler - The Webpack compiler instance.
   */
  apply(compiler: webpack.Compiler) {
    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation: webpack.Compilation) => {
      compilation.hooks.optimizeAssets.tapPromise(PLUGIN_NAME, async () => {
        // There could be multiple instances of `@fluentui/react-icons`, and they need to be subset separately
        const packageToUsedFontExports: Map<string, Set<string>> = new Map<string, Set<string>>();
        for (const m of compilation.modules) {
          if (isFluentUIReactFontChunk(m)) {
            const icons = resolveUsedIconExports(m, compilation.moduleGraph);
            if (icons === null) {
              continue;
            }

            const pkgLibPath = resolve(dirname(m.resource), '../..');
            const usedPkgExports = packageToUsedFontExports.get(pkgLibPath) ?? new Set<string>();
            for (const icon of icons) {
              usedPkgExports.add(icon);
            }
            packageToUsedFontExports.set(pkgLibPath, usedPkgExports);
          }
        }
        const optimizationPromises: Promise<void>[] = [];

        for (const [pkgLibPath, usedExports] of packageToUsedFontExports) {
          for (const { assetName, codepoints: codepointMap } of await getFontAssetsAndCodepoints(
            pkgLibPath,
            compilation,
          )) {
            optimizationPromises.push(optimizeFontAsset(codepointMap, usedExports, compilation, assetName));
          }
        }

        // IMPORTANT: actually await all subsetting work
        await Promise.all(optimizationPromises);
      });
    });
  }
}

async function optimizeFontAsset(
  codepointMap: Record<string, number>,
  usedExports: Set<string>,
  compilation: webpack.Compilation,
  assetName: string,
) {
  // Build subset text from the used exports set (usually small) instead of scanning all glyphs
  let subsetText = '';
  for (const glyphName of usedExports) {
    const codepoint = codepointMap[glyphName];
    if (codepoint !== undefined) {
      subsetText += String.fromCodePoint(codepoint);
    }
  }

  let source = compilation.assets[assetName].source();

  if (typeof source === 'string') {
    source = Buffer.from(source);
  }

  compilation.assets[assetName] = new webpack.sources.RawSource(
    await subsetFont(source, subsetText, {
      targetFormat: getTargetFormat(assetName),
    }),
  );
}

function getTargetFormat(assetName: string) {
  switch (extname(assetName)) {
    case '.woff':
      return 'woff';
    case '.woff2':
      return 'woff2';
    default:
      return 'sfnt';
  }
}

/**
 * Resolves the set of icon export names that are actually consumed from a font chunk module.
 *
 * Uses Webpack's `moduleGraph.getUsedExports()` which returns one of four shapes:
 *
 * | Return value    | Meaning                                                            | Action                                     |
 * | --------------- | ------------------------------------------------------------------ | ------------------------------------------ |
 * | `null`          | `optimization.usedExports` is disabled — no usage info available   | Skip (cannot determine which glyphs to keep)|
 * | `false`         | Module has zero consumers — nothing is imported from it            | Skip (nothing to subset)                   |
 * | `true`          | All exports are consumed (e.g. `import * as ns from '...'`)       | Fall back to `getProvidedExports()` ¹       |
 * | `Set<string>`   | Exact set of named exports that are consumed                      | Use directly for subsetting                |
 *
 * ¹ When all exports are marked as used we can still subset: `getProvidedExports()` tells us
 *   which exports this specific module **declares** (not the entire font), so we subset the font
 *   to exactly the glyphs this module provides.
 *
 *   This is **critical for atomic font imports** (e.g. `import * as XboxConsoleGroup from
 *   '@fluentui/react-icons/fonts/xbox-console'`) — each atomic module only provides a small icon
 *   group, so `getProvidedExports()` returns just those few icons, enabling proper subsetting even
 *   with namespace imports. Without this, namespace imports would skip subsetting entirely and ship
 *   the full unsubsetted font.
 *
 * Returns `null` when subsetting cannot be performed, so the caller can skip the module.
 */
function resolveUsedIconExports(m: webpack.NormalModule, moduleGraph: webpack.ModuleGraph): string[] | null {
  const usedModuleExports = moduleGraph.getUsedExports(m, undefined);

  if (usedModuleExports === null) {
    // No info on used exports (optimization.usedExports is disabled) - subsetting requires knowing exactly which exports are used.
    return null;
  }

  if (usedModuleExports === false) {
    // No exports are used from this module - nothing to subset.
    return null;
  }

  if (usedModuleExports === true) {
    // All exports are used (e.g. `import * as ns from '...'` or similar namespace import).
    // Retrieve statically-provided exports from the module graph so we can subset to exactly
    // the glyphs this module declares (rather than the full font or nothing).
    const providedExports = moduleGraph.getProvidedExports(m);
    if (providedExports === null || providedExports === true) {
      // Provided exports not statically known (optimization.providedExports disabled) - skip.
      return null;
    }
    return providedExports;
  }

  // usedModuleExports is a Set<string> with the exact named exports that are used.
  return Array.from(usedModuleExports);
}

function isNormalModule(m: webpack.Module): m is webpack.NormalModule {
  return m instanceof webpack.NormalModule;
}

function isFluentUIReactFontChunk(m: webpack.Module): m is webpack.NormalModule {
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

  return REACT_ICONS_FONT_MODULE_IMPORT_PATTERN.test(resource);
}

async function getFontAssetsAndCodepoints(
  pkgLibPath: string,
  compilation: webpack.Compilation,
): Promise<{ assetName: string; codepoints: Record<string, number> }[]> {
  const utilsFontsFolder = resolve(pkgLibPath, 'utils/fonts');
  const codepoints: Record<string, Record<string, number>> = Object.fromEntries(
    await Promise.all(
      FONT_FILES_BASE_NAMES.map(async (fontBaseName) => [
        fontBaseName,
        JSON.parse(await readFile(resolve(utilsFontsFolder, `${fontBaseName}.json`), 'utf8')),
      ]),
    ),
  );
  const fontPaths = new Map<string, Record<string, number>>(
    FONT_FILES_BASE_NAMES.flatMap((fontBaseName) =>
      FONT_EXTENSIONS.map((ext) => [resolve(utilsFontsFolder, `${fontBaseName}${ext}`), codepoints[fontBaseName]]),
    ),
  );

  const result: { assetName: string; codepoints: Record<string, number> }[] = [];

  for (const m of compilation.modules) {
    if (isNormalModule(m) && fontPaths.has(m.resource)) {
      const assetName = m.buildInfo?.filename;
      if (assetName) {
        result.push({ assetName, codepoints: fontPaths.get(m.resource)! });
      }
    }
  }

  return result;
}
