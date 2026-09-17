import remapping, { type SourceMapInput } from '@ampproject/remapping';
import type MagicString from 'magic-string';

import { transformSource } from './transform';
import { SUPPORTED_MODULE_NAMES } from './modules';
import type { IconVariant } from './modules';
import type { AtomicLoaderContext } from './loader-context';
import { selectExports } from './select-export';
import {
  assertSelectableResource,
  getRegisteredSelectorCapabilities,
  getSelectorCapability,
  parseSelectorQuery,
  SELECTOR_PROTOCOL_VERSION,
} from './selector-protocol';

export type { IconVariant };
export type { AtomicLoaderContext };

export interface FluentIconsAtomicImportLoaderOptions {
  /**
   * The icon variant to resolve atomic imports to. Defaults to `'svg'`.
   *
   * Not every module supports every variant (e.g. `@fluentui/react-brand-icons`
   * only ships `svg`). When a referenced module does not support this variant,
   * `fallbackVariant` is used instead.
   *
   * Color icons are an exception: they are SVG-only (gradients cannot live in an
   * icon font), so a `*Color` import under `iconVariant: 'fonts'` is rerouted to
   * a color-capable variant (`svg` / `svg-sprite`) following the same
   * `iconVariant → fallbackVariant → svg` precedence, with a warning.
   */
  iconVariant?: IconVariant;
  /**
   * The variant to use for a referenced module that does not support
   * `iconVariant`. When omitted and a module cannot honor `iconVariant`, the
   * loader fails with a descriptive error.
   *
   * Also used as the preferred target when rerouting SVG-only color icons off a
   * color-less `iconVariant` (e.g. `fonts`), provided the fallback itself is
   * color-capable; otherwise the loader degrades to `svg`.
   */
  fallbackVariant?: IconVariant;
  /**
   * Resolve atomic imports to the **headless** (Griffel-free) build where the
   * referenced module ships one. Defaults to `false`.
   *
   * Headless is best-effort per module: a module without a headless build for
   * the resolved variant (e.g. headless `svg-sprite` which isn't generated yet)
   * degrades to its standard implementation with a warning instead of failing
   * the build.
   *
   * NOTE: the loader only rewrites component/utility imports — you must still
   * import the headless CSS (`@fluentui/react-icons/headless/styles.css`, plus
   * `headless/fonts/styles.css` for font icons) in your app entry point.
   */
  headless?: boolean;
  /**
   * Rewrite a **narrow, statically-provable** subset of dynamic `import()` barrel
   * calls into atomic dynamic imports. Defaults to `false`.
   *
   * Only two shapes are rewritten, where the imported names are known literals at
   * the call site:
   * - `const { AddFilled } = await import('@fluentui/react-icons')`
   * - `import('@fluentui/react-icons').then(({ AddFilled }) => …)`
   *
   * Names from the same atom are grouped into one import; names from different
   * atoms become a positional `Promise.all([...])`. Anything else (namespace
   * binding `const ns = await import(…)`, `.then(m => m.X)`, rest/computed/default
   * patterns, non-literal specifiers) is left untouched and still warns.
   *
   * Prefer a dedicated module of **static** atomic imports that you lazy-load
   * (`import('./icons')`) over relying on this; see the README for the gotchas.
   */
  allowDynamicImports?: boolean;
  /**
   * Module graph granularity for icon implementations. `"family"` preserves the
   * existing family-module behavior. `"icon"` emits query-addressed per-export
   * modules for independently placeable chunks.
   */
  moduleGranularity?: 'family' | 'icon';
}

export default function fluentIconsAtomicImportLoader(
  this: AtomicLoaderContext,
  sourceCode: string,
  inputSourceMap?: SourceMapInput,
): void {
  const { resourcePath, resourceQuery = '' } = this;
  const generateSourceMap = this.sourceMap !== false;

  try {
    const selector = parseSelectorQuery(resourceQuery);
    if (selector) {
      assertSelectableResource(resourcePath, selector);
      assertPluginCapability(this, resourcePath);
      const selected = selectExports(sourceCode, resourcePath, selector, generateSourceMap);
      const map = composeSourceMaps(selected.map, inputSourceMap);
      return this.callback(null, selected.code, map);
    }
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return this.callback(
      new Error(`FluentIconsAtomicImportLoader: Failed to select "${resourcePath}${resourceQuery}": ${reason}`),
    );
  }

  if (isGeneratedIconPackageResource(resourcePath)) {
    return this.callback(null, sourceCode, inputSourceMap);
  }

  // Cheap pre-skip only: a false positive here just means we parse the file and
  // let the module record decide. Diagnostics are driven by actual imports.
  if (!SUPPORTED_MODULE_NAMES.some((name) => sourceCode.includes(name))) {
    return this.callback(null, sourceCode, inputSourceMap);
  }

  const {
    iconVariant = 'svg',
    fallbackVariant,
    headless = false,
    allowDynamicImports = false,
    moduleGranularity = 'family',
  } = this.getOptions();

  let code: string;
  let map: ReturnType<typeof transformSource>['map'];
  let diagnostics: ReturnType<typeof transformSource>['diagnostics'];

  try {
    ({ code, map, diagnostics } = transformSource(sourceCode, {
      iconVariant,
      fallbackVariant,
      headless,
      allowDynamicImports,
      moduleGranularity,
      sourceMap: generateSourceMap,
      path: resourcePath,
    }));
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error);
    return this.callback(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}": ${reason}`));
  }

  for (const diagnostic of diagnostics) {
    if (diagnostic.level === 'warning') {
      this.emitWarning(new Error(`FluentIconsAtomicImportLoader: ${diagnostic.message}`));
    }
  }

  const firstError = diagnostics.find((d) => d.level === 'error');
  if (firstError) {
    return this.callback(new Error(`FluentIconsAtomicImportLoader: ${firstError.message}`));
  }

  return this.callback(null, code, composeSourceMaps(map, inputSourceMap));
}

function isGeneratedIconPackageResource(resourcePath: string): boolean {
  const normalized = resourcePath.replace(/\\/g, '/');
  return /\/react-(?:brand-)?icons\/lib(?:-cjs)?\//.test(normalized);
}

function composeSourceMaps(
  generatedMap: ReturnType<MagicString['generateMap']> | undefined,
  inputSourceMap: SourceMapInput | undefined,
): ReturnType<MagicString['generateMap']> | ReturnType<typeof remapping> | undefined {
  if (!generatedMap || !inputSourceMap) {
    return generatedMap;
  }
  const generatedMapInput: SourceMapInput = {
    version: 3,
    file: generatedMap.file,
    names: generatedMap.names,
    sources: generatedMap.sources,
    sourcesContent: generatedMap.sourcesContent,
    mappings: generatedMap.mappings,
    x_google_ignoreList: generatedMap.x_google_ignoreList,
  };
  return remapping([generatedMapInput, inputSourceMap], () => null);
}

function assertPluginCapability(context: AtomicLoaderContext, resourcePath: string): void {
  const capability = getSelectorCapability(resourcePath);
  if (!capability) {
    return;
  }

  const versions = context._compilation
    ? getRegisteredSelectorCapabilities(context._compilation).get(capability)
    : undefined;
  if (!versions?.has(SELECTOR_PROTOCOL_VERSION)) {
    throw new Error(
      `"${capability}" icon selection requires a query-aware subsetting plugin supporting ` +
        `selector protocol "${SELECTOR_PROTOCOL_VERSION}"`,
    );
  }
}
