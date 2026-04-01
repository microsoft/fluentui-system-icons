import * as webpack from 'webpack';
import { dirname, resolve } from 'path';
import { readFileSync } from 'fs';
import type { Schema } from 'schema-utils/declarations/validate';
import { validate } from 'schema-utils';
import MergedSpriteRuntimeModule from './runtime/MergedSpriteRuntimeModule';

import optionsSchema from './options.schema.json';

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

/** Matches individual `<symbol>` elements and captures their `id` attribute. */
const SYMBOL_ELEMENT_PATTERN = /<symbol\b[^>]*\bid="([^"]+)"[^>]*>[\s\S]*?<\/symbol>/g;

export type SvgSpriteOptimizationMode = 'atomic' | 'merged';

type InjectSpritesInTemplatesMode = 'inline' | 'reference';

type InjectSpritesInTemplatesOptions = false | { mode: InjectSpritesInTemplatesMode };

type RuntimeSpec = Parameters<webpack.Compilation['moduleGraph']['getUsedExports']>[1];

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

  /**
   * When true, emit sprites-manifest.json describing used symbols.
   */
  generateSpritesManifest?: boolean;

  /**
   * Optionally inject sprites into html-webpack-plugin templates.
   */
  injectSpritesInTemplates?: boolean | { mode: InjectSpritesInTemplatesMode };
}

interface NormalizedOptions {
  mode: SvgSpriteOptimizationMode;
  mergedSpriteFilename: string;
  forceEnableUsedExports: boolean;
  generateSpritesManifest: boolean;
  injectSpritesInTemplates: InjectSpritesInTemplatesOptions;
}

export default class FluentUIReactIconsSvgSpriteSubsettingPlugin implements webpack.WebpackPluginInstance {
  private options: NormalizedOptions;

  constructor(options: FluentUIReactIconsSvgSpriteSubsettingPluginOptions = {}) {
    validate(optionsSchema as Schema, options, { name: PLUGIN_NAME });
    this.options = normalizeOptions(options);
  }

  apply(compiler: webpack.Compiler) {
    if (this.options.forceEnableUsedExports) {
      compiler.options.optimization = compiler.options.optimization ?? {};
      // In production mode this is already enabled; in development it is often disabled.
      if (compiler.options.optimization.usedExports === undefined) {
        compiler.options.optimization.usedExports = true;
      }
    }

    const injectInline =
      this.options.injectSpritesInTemplates !== false && this.options.injectSpritesInTemplates.mode === 'inline';
    const rewriteSpriteImports = this.options.mode === 'merged' || injectInline;

    if (rewriteSpriteImports) {
      const runtimeModulePath = resolve(
        __dirname,
        'runtime',
        injectInline ? 'inlineSpriteUrlModule' : 'mergedSpriteUrlModule',
      );

      compiler.hooks.normalModuleFactory.tap(PLUGIN_NAME, (normalModuleFactory) => {
        normalModuleFactory.hooks.beforeResolve.tap(PLUGIN_NAME, (resolveData) => {
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

    compiler.hooks.compilation.tap(PLUGIN_NAME, (compilation) => {
      let entrypointToSpriteResourceToIds: Map<string, Map<string, Set<string>>> | null = null;
      let spriteResourceToAssetName: Map<string, string> | null = null;
      let mergedSpriteSvg: string | null = null;
      let mergedSpriteAssetName: string | null = null;

      const ensureEntrypointUsage = () => {
        if (!entrypointToSpriteResourceToIds) {
          entrypointToSpriteResourceToIds = collectEntrypointSpriteUsage(compilation);
        }
        if (!spriteResourceToAssetName) {
          spriteResourceToAssetName = getSpriteResourceToAssetName(compilation);
        }
      };

      const ensureMergedSpriteData = () => {
        if (mergedSpriteSvg && mergedSpriteAssetName) {
          return;
        }
        ensureEntrypointUsage();
        const combinedSpriteResourceToIds = combineSpriteUsage(entrypointToSpriteResourceToIds ?? new Map());
        if (this.options.mode === 'merged' && combinedSpriteResourceToIds.size > 0) {
          mergedSpriteSvg = buildMergedSprite(combinedSpriteResourceToIds);
          const contentHash = createContentHash(compilation, mergedSpriteSvg);
          mergedSpriteAssetName = resolveMergedSpriteFilename(
            this.options.mergedSpriteFilename,
            compilation.fullHash ?? compilation.hash ?? '',
            contentHash,
          );
        }
      };

      if (this.options.mode === 'merged' && !injectInline) {
        compilation.hooks.additionalTreeRuntimeRequirements.tap(PLUGIN_NAME, (chunk, runtimeRequirements) => {
          if (!chunk.hasRuntime()) {
            return;
          }
          ensureMergedSpriteData();
          if (!mergedSpriteAssetName) {
            return;
          }

          runtimeRequirements.add(webpack.RuntimeGlobals.publicPath);
          compilation.addRuntimeModule(chunk, new MergedSpriteRuntimeModule(mergedSpriteAssetName));
        });
      }

      if (this.options.injectSpritesInTemplates !== false) {
        const htmlWebpackPlugin = getHtmlWebpackPlugin();
        if (htmlWebpackPlugin) {
          const hooks = htmlWebpackPlugin.getHooks(compilation);
          hooks.beforeEmit.tap(
            PLUGIN_NAME,
            (data: { html: string; plugin?: { options?: { chunks?: 'all' | string[] } }; publicPath?: string }) => {
              ensureEntrypointUsage();
              const entrypointNames = getEntrypointNamesForHtml(compilation, data.plugin?.options?.chunks);
              if (entrypointNames.length === 0) {
                return data;
              }

              const entrypointSpriteUsage = collectSpriteUsageForEntrypoints(
                entrypointNames,
                entrypointToSpriteResourceToIds ?? new Map(),
              );
              if (entrypointSpriteUsage.size === 0) {
                return data;
              }

              if (this.options.injectSpritesInTemplates && this.options.injectSpritesInTemplates.mode === 'inline') {
                const inlineSprite = buildMergedSprite(entrypointSpriteUsage);
                const inlineSvg = stripXmlDeclaration(inlineSprite).trim();
                data.html = injectIntoBody(data.html, inlineSvg);
                return data;
              }

              const publicPath = getHtmlPublicPath(compilation, data);
              const preloadHrefs = new Set<string>();

              if (this.options.mode === 'merged') {
                ensureMergedSpriteData();
                if (mergedSpriteAssetName) {
                  preloadHrefs.add(publicPath + mergedSpriteAssetName);
                }
              } else {
                for (const spriteResource of entrypointSpriteUsage.keys()) {
                  const assetName = spriteResourceToAssetName?.get(spriteResource);
                  if (assetName) {
                    preloadHrefs.add(publicPath + assetName);
                  }
                }
              }

              if (preloadHrefs.size === 0) {
                return data;
              }

              const preloadLinks = Array.from(preloadHrefs)
                .map((href) => `<link rel="preload" as="image" type="image/svg+xml" href="${href}">`)
                .join('\n');
              data.html = injectIntoHead(data.html, preloadLinks);
              return data;
            },
          );
        }
      }

      compilation.hooks.processAssets.tap(
        {
          name: PLUGIN_NAME,
          stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
        },
        () => {
          ensureEntrypointUsage();
          const combinedSpriteResourceToIds = combineSpriteUsage(entrypointToSpriteResourceToIds ?? new Map());
          if (combinedSpriteResourceToIds.size === 0) {
            return;
          }

          if (this.options.mode === 'merged') {
            ensureMergedSpriteData();
            if (mergedSpriteSvg && mergedSpriteAssetName) {
              const source = new webpack.sources.RawSource(mergedSpriteSvg);
              if (compilation.getAsset(mergedSpriteAssetName)) {
                compilation.updateAsset(mergedSpriteAssetName, source);
              } else {
                compilation.emitAsset(mergedSpriteAssetName, source);
              }
            }
          } else {
            subsetAtomicSprites(compilation, spriteResourceToAssetName ?? new Map(), combinedSpriteResourceToIds);
          }

          if (this.options.generateSpritesManifest) {
            const manifest = buildSpritesManifest(
              entrypointToSpriteResourceToIds ?? new Map(),
              spriteResourceToAssetName ?? new Map(),
              mergedSpriteAssetName,
              this.options.mode,
            );
            const manifestText = JSON.stringify(manifest, null, 2);
            compilation.emitAsset('sprites-manifest.json', new webpack.sources.RawSource(manifestText));
          }
        },
      );
    });
  }
}

// =============================================================================
// Internal helper functions
// =============================================================================

/**
 * Validates and normalizes raw plugin options into a fully resolved configuration
 * with defaults applied.
 */
function normalizeOptions(options: FluentUIReactIconsSvgSpriteSubsettingPluginOptions): NormalizedOptions {
  const mode = options.mode ?? 'atomic';
  const injectSpritesInTemplates = normalizeInjectSpritesInTemplates(options.injectSpritesInTemplates);
  const mergedSpriteFilenameProvided = options.mergedSpriteFilename !== undefined;

  if (mode === 'atomic' && mergedSpriteFilenameProvided) {
    throw new Error(`${PLUGIN_NAME}: mergedSpriteFilename is only valid when mode is "merged".`);
  }

  const mergedSpriteFilename = options.mergedSpriteFilename ?? 'fluentui-react-icons.svg';

  if (mode === 'merged') {
    assertValidMergedSpriteFilename(mergedSpriteFilename);
  }

  return {
    mode,
    mergedSpriteFilename,
    forceEnableUsedExports: options.forceEnableUsedExports ?? true,
    generateSpritesManifest: options.generateSpritesManifest ?? false,
    injectSpritesInTemplates,
  };
}

/**
 * Normalizes the `injectSpritesInTemplates` option from its flexible user-facing
 * form (`true | false | { mode }`) into the canonical internal representation.
 */
function normalizeInjectSpritesInTemplates(
  input: FluentUIReactIconsSvgSpriteSubsettingPluginOptions['injectSpritesInTemplates'],
): InjectSpritesInTemplatesOptions {
  if (input === true) {
    return { mode: 'inline' };
  }
  if (!input) {
    return false;
  }
  return input;
}

/**
 * Throws if `mergedSpriteFilename` contains unsupported template placeholders.
 * Only `[fullhash]` and `[contenthash]` are allowed.
 */
function assertValidMergedSpriteFilename(filename: string) {
  const invalidToken = filename.match(/\[(?!fullhash|contenthash)[^\]]+\]/);
  if (invalidToken) {
    throw new Error(`${PLUGIN_NAME}: mergedSpriteFilename only supports [fullhash] and [contenthash] placeholders.`);
  }
}

/**
 * Resolves a merged sprite filename template by substituting `[fullhash]` and
 * `[contenthash]` placeholders with their actual values.
 */
function resolveMergedSpriteFilename(template: string, fullHash: string, contentHash: string): string {
  return template.replace(/\[fullhash\]/g, fullHash).replace(/\[contenthash\]/g, contentHash);
}

/**
 * Creates a content-based hash for the given string using the compilation's
 * configured hash function, digest format, and digest length.
 */
function createContentHash(compilation: webpack.Compilation, content: string): string {
  const { hashFunction, hashDigest, hashDigestLength } = compilation.outputOptions;
  const effectiveHashFunction = hashFunction || 'md4';
  const effectiveHashDigest = hashDigest || 'hex';
  const hash = webpack.util.createHash(effectiveHashFunction);
  hash.update(content);
  const digest = hash.digest(effectiveHashDigest) as string;
  const length = typeof hashDigestLength === 'number' ? hashDigestLength : digest.length;
  return digest.slice(0, length);
}

/**
 * Attempts to require `html-webpack-plugin` at runtime. Returns `null` if the
 * package is not installed, allowing the plugin to degrade gracefully.
 */
function getHtmlWebpackPlugin(): { getHooks: (compilation: webpack.Compilation) => any } | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require('html-webpack-plugin');
  } catch {
    return null;
  }
}

/**
 * Resolves the public path to use for HTML-injected asset references.
 * Handles Webpack 5's `"auto"` default by treating it as an empty string.
 */
function getHtmlPublicPath(compilation: webpack.Compilation, data: { publicPath?: string }): string {
  if (typeof data.publicPath === 'string') {
    // Webpack 5 defaults to "auto"; treat it as empty so HTML hrefs are not prefixed with "auto".
    return data.publicPath === 'auto' ? '' : data.publicPath;
  }
  const outputPublicPath = compilation.outputOptions.publicPath;
  if (typeof outputPublicPath === 'string') {
    // Same "auto" handling when only output.publicPath is available.
    return outputPublicPath === 'auto' ? '' : outputPublicPath;
  }
  return '';
}

/**
 * Returns the list of entrypoint names relevant to an HTML page, based on the
 * `chunks` option from `html-webpack-plugin`. Returns all entrypoints when
 * the option is `"all"` or unset.
 */
function getEntrypointNamesForHtml(compilation: webpack.Compilation, chunksOption?: 'all' | string[]): string[] {
  if (!chunksOption || chunksOption === 'all') {
    return Array.from(compilation.entrypoints.keys());
  }
  if (Array.isArray(chunksOption)) {
    return chunksOption.filter((name) => compilation.entrypoints.has(name));
  }
  return [];
}

/**
 * Injects markup immediately after the opening `<body>` tag in an HTML string.
 * If no `<body>` tag is found, prepends the markup to the entire HTML.
 */
function injectIntoBody(html: string, inlineSvg: string): string {
  const bodyTag = html.match(/<body[^>]*>/i);
  if (!bodyTag) {
    return `${inlineSvg}\n${html}`;
  }

  return html.replace(/<body[^>]*>/i, (match) => `${match}\n${inlineSvg}`);
}

/**
 * Injects markup immediately after the opening `<head>` tag in an HTML string.
 * If no `<head>` tag is found, prepends the markup to the entire HTML.
 */
function injectIntoHead(html: string, headMarkup: string): string {
  const headTag = html.match(/<head[^>]*>/i);
  if (!headTag) {
    return `${headMarkup}\n${html}`;
  }

  return html.replace(/<head[^>]*>/i, (match) => `${match}\n${headMarkup}`);
}

/**
 * Strips the leading `<?xml ... ?>` declaration from an SVG string, if present.
 */
function stripXmlDeclaration(svgText: string): string {
  return svgText.replace(/^<\?xml[^>]*>\s*/i, '');
}

/**
 * Walks all compilation modules to build a per-entrypoint map of sprite SVG
 * resources and the symbol IDs used from each. This is the core analysis step
 * that drives both atomic subsetting and merged sprite generation.
 */
function collectEntrypointSpriteUsage(compilation: webpack.Compilation): Map<string, Map<string, Set<string>>> {
  const entrypointToSpriteResourceToIds = new Map<string, Map<string, Set<string>>>();
  const entrypointRuntimeByName = new Map<string, RuntimeSpec>();
  const chunkToEntrypointNames = new Map<webpack.Chunk, string[]>();

  for (const [entrypointName, entrypoint] of compilation.entrypoints) {
    entrypointRuntimeByName.set(entrypointName, getEntrypointRuntime(entrypoint));
    for (const chunk of entrypoint.chunks) {
      const existing = chunkToEntrypointNames.get(chunk) ?? [];
      existing.push(entrypointName);
      chunkToEntrypointNames.set(chunk, existing);
    }
  }

  for (const m of compilation.modules) {
    if (!isFluentUIReactSvgSpriteEntrypointModule(m)) {
      continue;
    }

    const moduleSource = getModuleSource(m);
    const spriteFileAbsPath = getReferencedSpritePath(m, moduleSource);
    if (!spriteFileAbsPath) {
      continue;
    }

    const exportNameToSymbolId = getExportNameToSymbolIdMap(moduleSource);
    if (exportNameToSymbolId.size === 0) {
      continue;
    }

    const entrypointNamesForModule = new Set<string>();
    for (const chunk of compilation.chunkGraph.getModuleChunksIterable(m)) {
      const entrypointNames = chunkToEntrypointNames.get(chunk);
      if (!entrypointNames) {
        continue;
      }
      for (const entrypointName of entrypointNames) {
        entrypointNamesForModule.add(entrypointName);
      }
    }

    if (entrypointNamesForModule.size === 0) {
      for (const entrypointName of entrypointRuntimeByName.keys()) {
        entrypointNamesForModule.add(entrypointName);
      }
    }

    for (const entrypointName of entrypointNamesForModule) {
      const runtime = entrypointRuntimeByName.get(entrypointName);
      const usedExports = getUsedExportsWithFallback(compilation, m, runtime);
      const symbolIds = getUsedSymbolIds(usedExports, exportNameToSymbolId);

      const spriteResourceToIds = entrypointToSpriteResourceToIds.get(entrypointName) ?? new Map();
      const existing = spriteResourceToIds.get(spriteFileAbsPath) ?? new Set<string>();
      for (const id of symbolIds) {
        existing.add(id);
      }
      spriteResourceToIds.set(spriteFileAbsPath, existing);
      entrypointToSpriteResourceToIds.set(entrypointName, spriteResourceToIds);
    }
  }

  return entrypointToSpriteResourceToIds;
}

/**
 * Extracts the Webpack runtime spec from an entrypoint, used to query
 * per-entrypoint used-export information from the module graph.
 */
function getEntrypointRuntime(entrypoint: webpack.Entrypoint): RuntimeSpec {
  const runtimeChunk = entrypoint.getRuntimeChunk?.();
  return runtimeChunk?.runtime ?? (entrypoint as { runtime?: RuntimeSpec }).runtime;
}

/**
 * Retrieves used exports for a module under the given runtime. Falls back to
 * the undefined-runtime query when the primary result is inconclusive (`null`
 * or boolean), which can happen in development builds.
 */
function getUsedExportsWithFallback(
  compilation: webpack.Compilation,
  module: webpack.NormalModule,
  runtime: RuntimeSpec,
): ReturnType<webpack.Compilation['moduleGraph']['getUsedExports']> {
  const primary = compilation.moduleGraph.getUsedExports(module, runtime);
  if (primary === null || typeof primary === 'boolean') {
    const fallback = compilation.moduleGraph.getUsedExports(module, undefined);
    if (fallback !== null && typeof fallback !== 'boolean') {
      return fallback;
    }
  }
  return primary;
}

/**
 * Merges sprite usage across the specified entrypoints into a single map of
 * sprite resource paths to used symbol IDs. Used when building HTML-scoped
 * inline sprites or preload links.
 */
function collectSpriteUsageForEntrypoints(
  entrypointNames: string[],
  entrypointToSpriteResourceToIds: Map<string, Map<string, Set<string>>>,
): Map<string, Set<string>> {
  const spriteResourceToIds = new Map<string, Set<string>>();

  for (const entrypointName of entrypointNames) {
    const entrypointUsage = entrypointToSpriteResourceToIds.get(entrypointName);
    if (!entrypointUsage) {
      continue;
    }

    for (const [spriteResource, ids] of entrypointUsage) {
      const existing = spriteResourceToIds.get(spriteResource) ?? new Set<string>();
      for (const id of ids) {
        existing.add(id);
      }
      spriteResourceToIds.set(spriteResource, existing);
    }
  }

  return spriteResourceToIds;
}

/**
 * Combines sprite usage across all entrypoints into a single global map.
 * This gives the union of all used symbols per sprite resource, regardless
 * of which entrypoint uses them.
 */
function combineSpriteUsage(
  entrypointToSpriteResourceToIds: Map<string, Map<string, Set<string>>>,
): Map<string, Set<string>> {
  const combinedSpriteResourceToIds = new Map<string, Set<string>>();

  for (const spriteResourceToIds of entrypointToSpriteResourceToIds.values()) {
    for (const [spriteResource, ids] of spriteResourceToIds) {
      const existing = combinedSpriteResourceToIds.get(spriteResource) ?? new Set<string>();
      for (const id of ids) {
        existing.add(id);
      }
      combinedSpriteResourceToIds.set(spriteResource, existing);
    }
  }

  return combinedSpriteResourceToIds;
}

/**
 * Builds a map from sprite SVG resource paths to their emitted asset names
 * (filenames) in the compilation output. Only considers `.svg` files from
 * `react-icons` sprite directories.
 */
function getSpriteResourceToAssetName(compilation: webpack.Compilation): Map<string, string> {
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
    if (!ATOMS_SVG_SPRITE_DIR_PATTERN.test(resource)) {
      continue;
    }

    const assetName = m.buildInfo?.filename;
    if (assetName) {
      resourceToAssetName.set(resource, assetName);
    }
  }

  return resourceToAssetName;
}

/**
 * Performs in-place subsetting of individual (atomic) sprite assets by removing
 * unused `<symbol>` elements from each SVG file.
 */
function subsetAtomicSprites(
  compilation: webpack.Compilation,
  spriteResourceToAssetName: Map<string, string>,
  spriteResourceToIds: Map<string, Set<string>>,
) {
  for (const [spriteResource, usedIds] of spriteResourceToIds) {
    const assetName = spriteResourceToAssetName.get(spriteResource);
    if (!assetName) {
      continue;
    }

    const asset = compilation.getAsset(assetName);
    if (!asset) {
      continue;
    }

    let source = asset.source.source();
    if (typeof source !== 'string') {
      source = source.toString();
    }

    const next = subsetSpriteSvg(source, usedIds);
    compilation.updateAsset(assetName, new webpack.sources.RawSource(next));
  }
}

/**
 * Type guard that checks whether a Webpack module is a `NormalModule` instance.
 */
function isNormalModule(m: webpack.Module): m is webpack.NormalModule {
  return m instanceof webpack.NormalModule;
}

/**
 * Type guard that identifies modules matching the `@fluentui/react-icons`
 * SVG sprite entrypoint pattern (e.g., `lib/atoms/svg-sprite/backpack.js`).
 */
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

/**
 * Retrieves the original source code of a module. Prefers the in-memory
 * `originalSource()` and falls back to reading from disk if unavailable.
 */
function getModuleSource(m: webpack.NormalModule): string {
  const maybeSource = m.originalSource?.();
  if (maybeSource) {
    const src = maybeSource.source();
    if (typeof src === 'string') {
      return src;
    }
    return src.toString();
  }

  // Fallback (should be rare)
  return readFileSync(m.resource, 'utf8');
}

/**
 * Extracts the absolute path of the `.svg` sprite file referenced by a
 * sprite entrypoint module. Supports both ESM `import` and CJS `require` forms.
 */
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

/**
 * Parses a sprite entrypoint module's source to build a mapping from exported
 * component names to their corresponding SVG `<symbol>` IDs.
 */
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

/**
 * Maps used exports to their corresponding symbol IDs. When Webpack cannot
 * determine used exports (e.g., in development mode), all symbols are assumed used.
 */
function getUsedSymbolIds(
  usedExports: ReturnType<webpack.Compilation['moduleGraph']['getUsedExports']>,
  exportNameToSymbolId: Map<string, string>,
): Set<string> {
  const usedIds = new Set<string>();

  // If Webpack can't tell, assume all exports are used.
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

/**
 * Wraps an array of `<symbol>` element strings into a complete SVG sprite
 * document with an XML declaration. Each symbol is indented with two spaces
 * if not already indented.
 */
function wrapSymbolsInSvg(symbols: string[]): string {
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">\n' +
    symbols.map((s) => (s.startsWith('  ') ? s : `  ${s}`)).join('\n') +
    '\n</svg>\n'
  );
}

/**
 * Removes unused `<symbol>` elements from an SVG sprite string, keeping only
 * those whose IDs appear in `usedIds`. Returns the original SVG unchanged if
 * no symbols match (defensive fallback) or if `usedIds` is empty.
 */
function subsetSpriteSvg(svgText: string, usedIds: Set<string>): string {
  if (usedIds.size === 0) {
    return svgText;
  }

  const keptSymbols: string[] = [];

  let match: RegExpExecArray | null;
  while ((match = SYMBOL_ELEMENT_PATTERN.exec(svgText))) {
    const id = match[1];
    if (usedIds.has(id)) {
      keptSymbols.push(match[0]);
    }
  }

  // If the regex failed for some reason, fall back to original.
  if (keptSymbols.length === 0) {
    return svgText;
  }

  return wrapSymbolsInSvg(keptSymbols);
}

/**
 * Reads multiple sprite SVG files from disk and merges their used `<symbol>`
 * elements into a single SVG sprite document, deduplicating by symbol ID.
 */
function buildMergedSprite(spriteResourceToIds: Map<string, Set<string>>): string {
  const mergedSymbolsById = new Map<string, string>();

  for (const [spriteResource, usedIds] of spriteResourceToIds) {
    const svgText = readFileSync(spriteResource, 'utf8');

    let match: RegExpExecArray | null;

    while ((match = SYMBOL_ELEMENT_PATTERN.exec(svgText))) {
      const id = match[1];
      if (usedIds.has(id) && !mergedSymbolsById.has(id)) {
        mergedSymbolsById.set(id, match[0]);
      }
    }
  }

  const mergedSymbols = Array.from(mergedSymbolsById.values());

  return wrapSymbolsInSvg(mergedSymbols);
}

/**
 * Builds a JSON-serializable manifest describing which sprite symbols are used
 * per entrypoint. In `merged` mode, reports a single merged sprite asset; in
 * `atomic` mode, reports individual sprite assets with their used symbol IDs.
 */
function buildSpritesManifest(
  entrypointToSpriteResourceToIds: Map<string, Map<string, Set<string>>>,
  spriteResourceToAssetName: Map<string, string>,
  mergedSpriteAssetName: string | null,
  mode: SvgSpriteOptimizationMode,
) {
  const manifest: Record<string, unknown> = {};

  for (const [entrypointName, spriteResourceToIds] of entrypointToSpriteResourceToIds) {
    if (mode === 'merged') {
      manifest[entrypointName] = {
        mergedSprite: {
          assetName: mergedSpriteAssetName ?? undefined,
          ids: collectSortedIds(spriteResourceToIds),
        },
      };
      continue;
    }

    const sprites = Array.from(spriteResourceToIds.entries()).map(([spriteResourceAbsPath, ids]) => {
      const assetName = spriteResourceToAssetName.get(spriteResourceAbsPath);
      return {
        spriteResourceAbsPath,
        assetName,
        ids: Array.from(ids).sort(),
      };
    });

    manifest[entrypointName] = {
      sprites,
    };
  }

  return manifest;
}

/**
 * Collects all symbol IDs from a sprite-resource-to-IDs map and returns them
 * as a sorted array. Used for deterministic manifest output.
 */
function collectSortedIds(spriteResourceToIds: Map<string, Set<string>>): string[] {
  const ids = new Set<string>();
  for (const spriteIds of spriteResourceToIds.values()) {
    for (const id of spriteIds) {
      ids.add(id);
    }
  }
  return Array.from(ids).sort();
}
