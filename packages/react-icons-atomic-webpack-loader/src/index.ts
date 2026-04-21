import { transformSource } from './transform';
import type { LoaderContext } from 'webpack';

export interface FluentIconsAtomicImportLoaderOptions {
  iconVariant?: 'svg' | 'fonts' | 'svg-sprite';
}

export default function fluentIconsAtomicImportLoader(
  this: LoaderContext<FluentIconsAtomicImportLoaderOptions>,
  sourceCode: string,
): void {
  const { resourcePath } = this;

  if (!sourceCode.includes('@fluentui/react-icons')) {
    return this.callback(null, sourceCode);
  }

  const { iconVariant = 'svg' } = this.getOptions();

  try {
    const { code, map } = transformSource(sourceCode, { iconVariant, path: resourcePath });
    return this.callback(null, code, map);
  } catch {
    return this.callback(new Error(`FluentIconsAtomicImportLoader: Failed to transform "${resourcePath}"`));
  }
}
