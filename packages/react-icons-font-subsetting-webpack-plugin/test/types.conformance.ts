// Type-level conformance test — no runtime behaviour, checked by `tsc` only.
//
// Asserts that the hand-maintained bundler interfaces in `src/index.ts` remain supertypes of the
// real webpack and rspack types. If either bundler changes a signature we depend on, this fails to
// compile, which is the drift protection that justifies maintaining those interfaces by hand.
import type * as webpack from 'webpack';
import type * as rspack from '@rspack/core';

import type { BundlerCompiler, BundlerPlugin } from '../src/index';
import FluentUIReactIconsFontSubsettingPlugin from '../src/index';

/** Fails to compile unless `Actual` is assignable to `Expected`. */
type AssertAssignable<Expected, Actual extends Expected> = Actual;

// Contravariance: `apply(compiler: BundlerCompiler)` is only sound if every real compiler is a
// BundlerCompiler. This is what makes `implements` work without casting.
type WebpackCompilerConforms = AssertAssignable<BundlerCompiler, webpack.Compiler>;
type RspackCompilerConforms = AssertAssignable<BundlerCompiler, rspack.Compiler>;

// The plugin must remain usable in both bundlers' `plugins` arrays.
type IsWebpackPlugin = AssertAssignable<webpack.WebpackPluginInstance, FluentUIReactIconsFontSubsettingPlugin>;
type IsRspackPlugin = AssertAssignable<rspack.RspackPluginInstance, FluentUIReactIconsFontSubsettingPlugin>;

// The exported plugin contract is satisfied by the class.
type ImplementsContract = AssertAssignable<BundlerPlugin, FluentUIReactIconsFontSubsettingPlugin>;

declare const webpackCompiler: webpack.Compiler;
declare const rspackCompiler: rspack.Compiler;

// No cast at the callsite: real compilers are accepted directly.
new FluentUIReactIconsFontSubsettingPlugin().apply(webpackCompiler);
new FluentUIReactIconsFontSubsettingPlugin().apply(rspackCompiler);

const webpackConfig: webpack.Configuration = { plugins: [new FluentUIReactIconsFontSubsettingPlugin()] };
const rspackConfig: rspack.Configuration = { plugins: [new FluentUIReactIconsFontSubsettingPlugin()] };

export type { WebpackCompilerConforms, RspackCompilerConforms, IsWebpackPlugin, IsRspackPlugin, ImplementsContract };
export { webpackConfig, rspackConfig };
