import { describe, expect, it } from 'vitest';
import { copyFileSync, mkdirSync, mkdtempSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import FluentUIReactIconsFontSubsettingPlugin from '../src/index';
import type { BundlerCompiler } from '../src/bundler-api';

// The package's `exports` map hides package.json, so the sibling workspace path is used instead.
const REACT_ICONS_LIB = resolve(dirname(fileURLToPath(import.meta.url)), '../../react-icons/lib');
const FONT_FILE = resolve(REACT_ICONS_LIB, 'utils/fonts/FluentSystemIcons-Regular.ttf');
const FONT_MODULE = resolve(REACT_ICONS_LIB, 'atoms/fonts/games.js');
/** A second module in the *same* package, so both share one set of font assets. */
const SIBLING_FONT_MODULE = resolve(REACT_ICONS_LIB, 'atoms/fonts/add.js');

const FONT_BASE_NAMES = [
  'FluentSystemIcons-Filled',
  'FluentSystemIcons-Resizable',
  'FluentSystemIcons-Regular',
  'FluentSystemIcons-Light',
];

/**
 * A second installed copy of the package, as produced by peer-dependency variants in a virtual
 * store. Only the codepoint tables are materialised — the plugin reads those, and derives
 * everything else from path arithmetic.
 */
function createDuplicateInstance() {
  const lib = resolve(mkdtempSync(resolve(tmpdir(), 'react-icons-copy-')), 'react-icons/lib');
  mkdirSync(resolve(lib, 'utils/fonts'), { recursive: true });

  for (const baseName of FONT_BASE_NAMES) {
    copyFileSync(
      resolve(REACT_ICONS_LIB, `utils/fonts/${baseName}.json`),
      resolve(lib, `utils/fonts/${baseName}.json`),
    );
  }

  return { lib, fontModule: resolve(lib, 'atoms/fonts/games.js') };
}

/**
 * webpack's `RuntimeSpec` value meaning "do not scope this query — merge across every runtime".
 * rspack has no equivalent and rejects it, which is why the two bundlers take different paths.
 */
const MERGED_ACROSS_ALL_RUNTIMES = undefined;

/** Deliberately different from the entrypoint name, which is what the runtime bug confused it with. */
const RUNTIME_CHUNK_NAME = 'shared-runtime';
const ENTRYPOINT_NAME = 'main';

interface HarnessOptions {
  /** Adds the `rspack` marker so the plugin takes the explicit-runtime path. */
  isRspack?: boolean;
  /** Whether the bundler exposes the 2.1-only API. */
  hasProvidedExports?: boolean;
  /** Font module resources to place in the graph. */
  moduleResources?: string[];
  /** Emitted font assets, as `sourceFilename` values. Defaults to the one real font file. */
  assetSources?: string[];
  pluginOptions?: ConstructorParameters<typeof FluentUIReactIconsFontSubsettingPlugin>[0];
  usedExports: (resource: string) => ReadonlySet<string> | readonly string[] | boolean | null;
}

/**
 * Drives `apply()` against a minimal fake compiler.
 *
 * The bundler-integration suite cannot express "an rspack without `getProvidedExports`" or assert
 * which runtime was queried, so both live here instead.
 */
async function harness(options: HarnessOptions) {
  const originalFont = readFileSync(FONT_FILE);
  /** Every `runtime` argument the plugin passed to `getUsedExports`, in call order. */
  const runtimesSeen: unknown[] = [];
  const updatedAssets: { name: string; size: number }[] = [];
  const warnings: Error[] = [];
  const errors: Error[] = [];

  /** Captures the callback the plugin registers on `processAssets`, so the test can invoke it. */
  let processAssets: (() => Promise<void>) | undefined;

  const moduleGraph = {
    getUsedExports(m: { resource: string }, runtime: unknown) {
      runtimesSeen.push(runtime);
      return options.usedExports(m.resource);
    },
    // Omitted entirely when absent, mirroring rspack 2.0.x where the method does not exist.
    ...(options.hasProvidedExports ? { getProvidedExports: () => ['GamesFilled'] as readonly string[] } : {}),
  };

  const compilation = {
    hooks: {
      processAssets: {
        tapPromise(_options: unknown, fn: () => Promise<void>) {
          processAssets = fn;
        },
      },
    },
    modules: (options.moduleResources ?? [FONT_MODULE]).map((resource) => ({
      type: 'javascript/auto',
      resource,
    })),
    // rspack exposes `chunk.runtime` as a Set; webpack's may also be a bare string.
    chunks: [{ runtime: new Set([RUNTIME_CHUNK_NAME]) }],
    moduleGraph,
    entrypoints: new Map([[ENTRYPOINT_NAME, {}]]),
    warnings,
    errors,
    getAsset: (name: string) => ({ name, source: { source: () => originalFont } }),
    // An absolute `sourceFilename` resolves independently of `context`.
    getAssets: () =>
      (options.assetSources ?? [FONT_FILE]).map((sourceFilename, i) => ({
        name: `Regular-${i}.ttf`,
        source: { source: () => originalFont },
        info: { sourceFilename },
      })),
    updateAsset: (name: string, source: { source(): string | Buffer }) => {
      updatedAssets.push({ name, size: Buffer.from(source.source()).length });
    },
  };

  const compiler = {
    context: '/',
    // The plugin detects rspack via this marker.
    ...(options.isRspack ? { rspack: {} } : {}),
    webpack: {
      Compilation: { PROCESS_ASSETS_STAGE_OPTIMIZE: 0 },
      sources: {
        RawSource: class {
          constructor(private readonly value: string | Buffer) {}
          source() {
            return this.value;
          }
        },
      },
    },
    hooks: { compilation: { tap: (_name: string, fn: (c: unknown) => void) => fn(compilation) } },
  };

  new FluentUIReactIconsFontSubsettingPlugin(options.pluginOptions).apply(compiler as unknown as BundlerCompiler);
  await processAssets!();

  return { runtimesSeen, updatedAssets, warnings, errors, originalSize: originalFont.length };
}

describe('runtime resolution', () => {
  it('asks rspack about the runtime chunk, not the entrypoint', async () => {
    const { runtimesSeen } = await harness({
      isRspack: true,
      hasProvidedExports: true,
      usedExports: () => ['GamesFilled'],
    });

    // The two names coincide only when the runtime chunk is unnamed, which is true of every
    // fixture in the bundler suite. Query the entrypoint instead and rspack reports every module
    // unused, so the plugin skips everything and ships full fonts without failing the build.
    expect(runtimesSeen).toEqual([[RUNTIME_CHUNK_NAME]]);
    expect(runtimesSeen).not.toEqual([[ENTRYPOINT_NAME]]);
  });

  it('asks webpack for usage merged across all runtimes', async () => {
    const { runtimesSeen } = await harness({ hasProvidedExports: true, usedExports: () => ['GamesFilled'] });

    // Scoping webpack to specific runtimes would be the inverse failure: an icon used only in an
    // unlisted runtime would look unused and lose its glyph — a wrong subset, silently.
    expect(runtimesSeen).toEqual([MERGED_ACROSS_ALL_RUNTIMES]);
  });
});

describe('getProvidedExports capability guard', () => {
  it('warns and skips instead of throwing when the bundler lacks the API', async () => {
    const { updatedAssets, warnings } = await harness({
      isRspack: true,
      hasProvidedExports: false,
      // `true` is what both bundlers return for a namespace import: "every export is used".
      usedExports: () => true,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0].message).toContain('getProvidedExports');
    // Skipped, so the font is left whole rather than wrongly subset.
    expect(updatedAssets).toEqual([]);
  });

  it('subsets namespace imports when the API is available', async () => {
    const { updatedAssets, warnings, originalSize } = await harness({
      isRspack: true,
      hasProvidedExports: true,
      usedExports: () => true,
    });

    expect(warnings).toEqual([]);
    expect(updatedAssets).toHaveLength(1);
    expect(updatedAssets[0].size).toBeLessThan(originalSize);
  });

  it('subsets named imports without needing the API at all', async () => {
    const { updatedAssets, warnings, originalSize } = await harness({
      isRspack: true,
      // The rspack 2.0.x shape: no `getProvidedExports`, and named imports never need it.
      hasProvidedExports: false,
      usedExports: () => ['GamesFilled'],
    });

    expect(warnings).toEqual([]);
    expect(updatedAssets).toHaveLength(1);
    expect(updatedAssets[0].size).toBeLessThan(originalSize);
  });

  it('leaves the package whole when a namespace import sits alongside a named one', async () => {
    const { updatedAssets, warnings } = await harness({
      isRspack: true,
      hasProvidedExports: false,
      moduleResources: [FONT_MODULE, SIBLING_FONT_MODULE],
      usedExports: (resource) => (resource === FONT_MODULE ? true : ['AddFilled']),
    });

    // Both modules share one font, so subsetting to the named import alone would delete the
    // glyphs the unresolvable namespace import needs — a broken build that still looks green.
    expect(updatedAssets).toEqual([]);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].message).toContain(REACT_ICONS_LIB);
  });
});

describe('duplicate installed instances', () => {
  it('leaves fonts whole when a copy owns no emitted asset', async () => {
    const duplicate = createDuplicateInstance();

    const { updatedAssets, warnings } = await harness({
      moduleResources: [FONT_MODULE, duplicate.fontModule],
      // Identical fonts across copies collapse to one emitted asset, which can name only one copy.
      assetSources: [FONT_FILE],
      usedExports: (resource) => (resource === FONT_MODULE ? ['GamesFilled'] : ['AddFilled']),
    });

    // Subsetting the shared asset for the copy that happens to own it drops every glyph belonging
    // to the copies that do not — silently, which is how this reached production.
    expect(updatedAssets).toEqual([]);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].message).toContain(REACT_ICONS_LIB);
    expect(warnings[0].message).toContain(duplicate.lib);
  });

  it('fails the build instead when asked to', async () => {
    const duplicate = createDuplicateInstance();

    const { updatedAssets, warnings, errors } = await harness({
      moduleResources: [FONT_MODULE, duplicate.fontModule],
      assetSources: [FONT_FILE],
      pluginOptions: { onDuplicateInstances: 'error' },
      usedExports: (resource) => (resource === FONT_MODULE ? ['GamesFilled'] : ['AddFilled']),
    });

    expect(errors).toHaveLength(1);
    expect(errors[0].message).toContain(duplicate.lib);
    expect(warnings).toEqual([]);
    expect(updatedAssets).toEqual([]);
  });

  it('still reports a missing asset rule when no copy owns an asset', async () => {
    const { updatedAssets, warnings } = await harness({
      // Nothing emitted at all is a bundler misconfiguration, not duplicate instances.
      assetSources: [],
      usedExports: () => ['GamesFilled'],
    });

    expect(updatedAssets).toEqual([]);
    expect(warnings).toHaveLength(1);
    expect(warnings[0].message).toContain("type: 'asset'");
  });
});
