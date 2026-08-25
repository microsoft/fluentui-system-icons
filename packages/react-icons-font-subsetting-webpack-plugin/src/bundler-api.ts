/**
 * Hand-maintained description of the bundler APIs this plugin touches.
 *
 * Deliberately not `import type ... from 'webpack'`: both bundlers are optional peers, so
 * referencing webpack's types here would leak into the generated `.d.ts` and break type-checking
 * for consumers who only installed `@rspack/core`.
 *
 * Every member is intentionally *wider* than the corresponding webpack and rspack type, so both
 * real compilers remain assignable to `BundlerCompiler`. That contravariance is what lets `apply()`
 * take a typed parameter instead of `unknown`. `test/types.conformance.ts` fails to compile if
 * either bundler ever drifts out of these bounds.
 */

export interface BundlerSource {
  source(): string | Buffer;
}

/** `type` is present on both bundlers' modules; `resource` only on normal modules. */
export interface BundlerModule {
  readonly type?: string;
  readonly resource?: string;
}

export interface BundlerNormalModule extends BundlerModule {
  readonly resource: string;
}

export interface BundlerModuleGraph {
  /** webpack passes a `RuntimeSpec`; rspack requires explicit runtime names. */
  getUsedExports(
    module: BundlerModule,
    runtime: string | string[] | ReadonlySet<string> | undefined,
  ): ReadonlySet<string> | readonly string[] | boolean | null;
  /** Exposed to rspack's JS API only in 2.1.0, which is what sets the `@rspack/core` peer floor. */
  getProvidedExports(module: BundlerModule): readonly string[] | boolean | null;
}

export interface BundlerAsset {
  name: string;
  source: BundlerSource;
  info?: { sourceFilename?: string };
}

export interface BundlerCompilation {
  hooks: {
    processAssets: {
      tapPromise(options: { name: string; stage: number }, fn: () => Promise<void>): void;
    };
  };
  modules: Iterable<BundlerModule>;
  moduleGraph: BundlerModuleGraph;
  entrypoints: ReadonlyMap<string, unknown>;
  warnings: Error[];
  getAsset(name: string): BundlerAsset | undefined | void;
  getAssets(): readonly BundlerAsset[];
  /**
   * `any` is load-bearing: both bundlers accept a full `webpack-sources` `Source` here, and only
   * `any` is assignable to that, which is what keeps real compilers assignable to this interface.
   * The value passed is always one the bundler itself constructed via `sources.RawSource`.
   */
  updateAsset(name: string, source: any): void;
}

export interface BundlerCompiler {
  context: string;
  /** rspack aliases this to its own namespace, which is why no bundler is imported at runtime. */
  webpack: {
    Compilation: { PROCESS_ASSETS_STAGE_OPTIMIZE: number };
    sources: { RawSource: new (value: string | Buffer, ...rest: any[]) => BundlerSource };
  };
  hooks: {
    compilation: {
      tap(name: string, fn: (compilation: BundlerCompilation) => void): void;
    };
  };
}

/** The shape both bundlers require of a plugin instance. */
export interface BundlerPlugin {
  apply(compiler: BundlerCompiler): void;
}

export type BundlerRawSource = BundlerCompiler['webpack']['sources']['RawSource'];
