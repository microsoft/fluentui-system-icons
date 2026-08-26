import type { FluentIconsAtomicImportLoaderOptions } from './index';

/**
 * Hand-maintained description of the loader context members this loader uses.
 *
 * Deliberately not `import type { LoaderContext } from 'webpack'`: both bundlers are optional
 * peers, so referencing webpack's types here would leak into the generated `.d.ts` and break
 * type-checking for consumers who only installed `@rspack/core`.
 *
 * Members are intentionally wider than webpack's and rspack's, so both real loader contexts remain
 * assignable. `test/types.conformance.ts` fails to compile if either bundler drifts out of bounds.
 */
export interface AtomicLoaderContext {
  readonly resourcePath: string;
  getOptions(): FluentIconsAtomicImportLoaderOptions;
  callback(err: Error | null | undefined, content?: string | Buffer, sourceMap?: any, additionalData?: any): void;
  emitWarning(warning: Error): void;
}
