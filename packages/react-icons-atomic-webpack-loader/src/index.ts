import { transformSource, transformSourceRegex } from './transform.js';
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
  const resourcePath = this.resourcePath;

  if (!REACT_ICONS_IMPORT_REGEX.test(sourceCode)) {
    return this.callback(null, sourceCode);
  }

  const { iconVariant = 'svg' } = this.getOptions();
  const isTsx = resourcePath.endsWith('.tsx');
  const isTypescript = TS_EXT_REGEX.test(resourcePath);

  let result;

  try {
    result = transformSource(sourceCode, { iconVariant, isTypescript, isTsx });
  } catch {
    result = null;
  }

  if (!result) {
    try {
      result = transformSourceRegex(sourceCode, { iconVariant });
    } catch {
      this.emitWarning(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}"`));
      return this.callback(null, sourceCode);
    }
  }

  return this.callback(null, result.code, result.map);
}
