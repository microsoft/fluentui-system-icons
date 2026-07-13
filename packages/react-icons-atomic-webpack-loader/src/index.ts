import { transformSource } from './transform';
import { SUPPORTED_MODULE_NAMES } from './modules';
import type { IconVariant } from './modules';
import type { LoaderContext } from 'webpack';

export type { IconVariant };

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
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  const { resourcePath } = this;

  // Cheap pre-skip only: a false positive here just means we parse the file and
  // let the module record decide. Diagnostics are driven by actual imports.
  if (!SUPPORTED_MODULE_NAMES.some((name) => sourceCode.includes(name))) {
    return this.callback(null, sourceCode);
  }

  const { iconVariant = 'svg', fallbackVariant, headless = false, allowDynamicImports = false } = this.getOptions();

  let code: string;
  let map: ReturnType<typeof transformSource>['map'];
  let diagnostics: ReturnType<typeof transformSource>['diagnostics'];

  try {
    ({ code, map, diagnostics } = transformSource(sourceCode, {
      iconVariant,
      fallbackVariant,
      headless,
      allowDynamicImports,
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

  return this.callback(null, code, map);
}
