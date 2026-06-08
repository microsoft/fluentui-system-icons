import { transformSource } from './transform';
import type { LoaderContext } from 'webpack';

export interface FluentIconsAtomicImportLoaderOptions {
  iconVariant?: 'svg' | 'fonts' | 'svg-sprite';
  /** Icon package names to transform. Defaults to `['@fluentui/react-icons', '@fluentui/react-brand-icons']`. */
  modules?: string[];
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  const { resourcePath } = this;
  const { iconVariant = 'svg', modules } = this.getOptions();

  const activeModules = modules ?? ['@fluentui/react-icons', '@fluentui/react-brand-icons'];

  if (!activeModules.some((m) => sourceCode.includes(m))) {
    return this.callback(null, sourceCode);
  }

  try {
    const { code, map } = transformSource(sourceCode, { iconVariant, path: resourcePath, modules: activeModules });
    return this.callback(null, code, map);
  } catch {
    return this.callback(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}"`));
  }
}
