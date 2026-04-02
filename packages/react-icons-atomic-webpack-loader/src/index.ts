import { transformSource } from './transform';
import type { LoaderContext } from 'webpack';

const REACT_ICONS_IMPORT_REGEX = /['"]@fluentui\/react-icons['";\s]/;

export interface FluentIconsAtomicImportLoaderOptions {
  iconVariant?: 'svg' | 'fonts';
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): string {
  if (!REACT_ICONS_IMPORT_REGEX.test(sourceCode)) {
    return sourceCode;
  }

  const options = this.getOptions();
  const iconVariant = options.iconVariant ?? 'svg';
  const isTsx = this.resourcePath.endsWith('.tsx');
  const isTypescript = /\.[mc]?tsx?$/.test(this.resourcePath);

  try {
    return transformSource(sourceCode, { iconVariant, isTypescript, isTsx });
  } catch {
    this.emitWarning(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${this.resourcePath}"`));
    return sourceCode;
  }
}
