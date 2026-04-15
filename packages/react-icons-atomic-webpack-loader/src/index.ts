import { transformSource } from './transform';
import type { LoaderContext } from 'webpack';

const REACT_ICONS_IMPORT_REGEX = /['"]@fluentui\/react-icons['";\s]/;
const TS_EXT_REGEX = /\.[mc]?tsx?$/;

export interface FluentIconsAtomicImportLoaderOptions {
  iconVariant?: 'svg' | 'fonts' | 'svg-sprite';
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  const { resourcePath } = this;

  if (!REACT_ICONS_IMPORT_REGEX.test(sourceCode)) {
    return this.callback(null, sourceCode);
  }

  const { iconVariant = 'svg' } = this.getOptions();
  const isTypescript = TS_EXT_REGEX.test(resourcePath);

  try {
    const { code, map } = transformSource(sourceCode, { iconVariant, isTypescript, path: resourcePath });
    return this.callback(null, code, map);
  } catch {
    this.emitWarning(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}"`));
    return this.callback(null, sourceCode);
  }
}
