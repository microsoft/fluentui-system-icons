import { transformSource } from './transform';
import type { LoaderContext } from 'webpack';

const REACT_ICONS_IMPORT_REGEX = /['"]@fluentui\/react-icons['";\s]/;

export interface FluentIconsAtomicImportLoaderOptions {
  iconVariant?: 'svg' | 'fonts' | 'svg-sprite';
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  if (!REACT_ICONS_IMPORT_REGEX.test(sourceCode)) {
    this.callback(null, sourceCode);
    return;
  }

  const options = this.getOptions();
  const iconVariant = options.iconVariant ?? 'svg';
  const isTsx = this.resourcePath.endsWith('.tsx');
  const isTypescript = /\.[mc]?tsx?$/.test(this.resourcePath);

  try {
    const { code, map } = transformSource(sourceCode, { iconVariant, isTypescript, isTsx });
    this.callback(null, code, map);
  } catch {
    this.emitWarning(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${this.resourcePath}"`));
    this.callback(null, sourceCode);
  }
}
