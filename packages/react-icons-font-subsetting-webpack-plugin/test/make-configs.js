// @ts-check
/**
 * Shared test configuration factory for the font subsetting plugin.
 *
 * The same entries, thresholds and assertions run against both webpack and rspack; only the
 * CSS-extraction and HTML plugins differ, so they are injected by the bundler-specific configs.
 */
const { resolve, join } = require('path');
const { readFileSync } = require('fs');

const { default: FluentUIReactIconsFontSubsettingPlugin } = require('../lib/');

// Per-entry subset font size thresholds.
// Full (un-subset) fonts are 100 KB+, so even the higher limit validates that subsetting actually happened.
// Each entry is compiled separately (multi-compiler) so fonts are independently subset
//  — this gives accurate per-entry size measurement in the build output.
const entries = {
  index: { src: './src/index.js', threshold: 2 * 1_024 }, // 2 KB
  atoms: { src: './src/atoms.js', threshold: 2 * 1_024 }, // 2 KB
  // atomsImportStar uses `import *` and references more icon variants, producing a larger (but still properly subset) font.
  atomsImportStar: { src: './src/atoms-import-star.js', threshold: 3 * 1_024 }, // 3.0 KB
  // Headless font atoms — fonts arrive via the headless `styles.css` import (css-loader) rather than Griffel.
  // No Griffel runtime is involved, so a tighter threshold is used to validate subsetting.
  headlessAtoms: { src: './src/headless-atoms.js', threshold: 1.5 * 1_024, assertNoGriffel: true }, // 1.5 KB
  // End-to-end: a *barrel* import is rewritten by the atomic loader (headless + fonts) into
  // headless font atoms, then subset here. Also asserts the graph stays Griffel-free.
  e2eBarrelHeadlessFonts: {
    src: './src/e2e-barrel-headless-fonts.js',
    threshold: 1.5 * 1_024, // 1.5 KB
    useAtomicLoader: true,
    assertNoGriffel: true,
  },
  // Async chunks: one icon is eager, the other reachable only through `import()`, and they live in
  // different font families. The size ceiling cannot police this on its own — losing the async
  // glyph makes the font *smaller* — so both families are also asserted to retain a real glyph.
  lazyAtoms: {
    src: './src/lazy-atoms.js',
    threshold: 2 * 1_024, // 2 KB
    fontsWithGlyphs: ['FluentSystemIcons-Resizable', 'FluentSystemIcons-Filled'],
  },
};

/**
 * @typedef {object} BundlerAdapter
 * @property {'webpack' | 'rspack'} name
 * @property {new (...args: any[]) => any} CssExtractPlugin
 *   mini-css-extract-plugin is incompatible with rspack, which ships CssExtractRspackPlugin instead.
 * @property {(new (...args: any[]) => any) | null} HtmlPlugin dev-server only; may be omitted.
 */

/**
 * @param {BundlerAdapter} adapter
 * @param {{ isDevServer?: boolean }} [options]
 * @returns {import('webpack').Configuration[]}
 */
function makeConfigs(adapter, options = {}) {
  const isDevServer = options.isDevServer ?? false;

  return Object.entries(entries).map(([name, entry]) => createConfig(name, entry, adapter, isDevServer));
}

// ====================================

/**
 * @param {string} name
 * @param {{ src: string, threshold: number, useAtomicLoader?: boolean, assertNoGriffel?: boolean }} entry
 * @param {BundlerAdapter} adapter
 * @param {boolean} isDevServer
 * @returns {import('webpack').Configuration}
 */
function createConfig(name, entry, adapter, isDevServer) {
  const { CssExtractPlugin, HtmlPlugin } = adapter;

  return {
    name,
    context: __dirname,
    // FluentUIReactIconsFontSubsettingPlugin requires `optimization.usedExports: true` to determine
    // which icon exports are actually used.
    // This is enabled by default in production mode.
    // In development mode, used exports aren't tracked, so the plugin skips subsetting.
    mode: 'production',
    // Keep modules un-concatenated for entries that assert Griffel-freedom so the assertion
    // can inspect individual module resources (scope hoisting would merge them into a
    // ConcatenatedModule with no per-module `resource`, hiding a leaked @griffel module).
    optimization: entry.assertNoGriffel ? { concatenateModules: false } : undefined,
    module: {
      rules: [
        ...(entry.useAtomicLoader
          ? [
              {
                // Rewrite barrel `@fluentui/react-icons` imports to headless font atoms
                // before the bundler parses them.
                test: /\.js$/,
                include: resolve(__dirname, 'src'),
                enforce: /** @type {'pre'} */ ('pre'),
                use: [
                  {
                    loader: resolve(__dirname, '../../react-icons-atomic-webpack-loader/lib/index.js'),
                    options: { headless: true, iconVariant: 'fonts' },
                  },
                ],
              },
            ]
          : []),
        {
          test: /\.(ttf|woff2?)$/,
          type: 'asset',
          generator: {
            filename: `[name]-[contenthash][ext]`,
            dataUrl: {},
          },
        },
        {
          // Headless fonts pull their `@font-face` (and font files) in via CSS.
          // The CSS extraction plugin emits a real `[name].css` asset (instead of inlining the CSS
          // string into the JS bundle), and css-loader resolves the `url(...)` references into
          // asset modules so the subsetting plugin has font files to process.
          test: /\.css$/,
          use: [CssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    entry: { [name]: entry.src },
    output: {
      path: resolve(__dirname, 'dist', adapter.name, name),
      filename: '[name].js',
    },
    resolve: {
      conditionNames: ['fluentIconFont', 'import'],
    },
    plugins: [
      ...(isDevServer && HtmlPlugin
        ? [
            new HtmlPlugin({
              title: `FluentUIReactIconsFontSubsettingPlugin Demo - ${name}`,
            }),
          ]
        : []),
      new CssExtractPlugin(),
      new FluentUIReactIconsFontSubsettingPlugin(),
      createAssertionPlugin(name, entry, adapter),
    ],
  };
}

/**
 * Fails the build when a font asset was not subset, or when a headless entry leaked Griffel.
 *
 * @param {string} name
 * @param {{ threshold: number, assertNoGriffel?: boolean, fontsWithGlyphs?: string[] }} entry
 * @param {BundlerAdapter} adapter
 */
function createAssertionPlugin(name, entry, adapter) {
  return {
    apply(/** @type {import('webpack').Compiler} */ compiler) {
      compiler.hooks.afterEmit.tap('test-subsetting', (compilation) => {
        const fontAssets = compilation.getAssets().filter(({ name: assetName }) => /\.(ttf|woff2?)$/.test(assetName));

        if (fontAssets.length === 0) {
          throw new Error(`[${adapter.name}/${name}] No font assets were emitted — the test cannot verify subsetting.`);
        }

        for (const { name: assetName, source } of fontAssets) {
          if (source.size() > entry.threshold) {
            throw new Error(
              `[${adapter.name}/${name}] Asset "${assetName}" (${source.size()} bytes) exceeds the ` +
                `${entry.threshold}-byte threshold — font may not have been properly subset.`,
            );
          }
        }

        for (const fontBaseName of entry.fontsWithGlyphs ?? []) {
          // Only .ttf is inspected; .woff/.woff2 wrap the same glyphs in a compressed container.
          const asset = fontAssets.find(({ name: assetName }) =>
            new RegExp(`^${fontBaseName}[.-][^/]*\\.ttf$`).test(assetName),
          );

          if (!asset) {
            throw new Error(`[${adapter.name}/${name}] No emitted .ttf asset for "${fontBaseName}".`);
          }

          // `afterEmit` downgrades sources to size-only, so the bytes come back off disk.
          const glyphCount = readGlyphCount(readFileSync(join(compiler.outputPath, asset.name)));
          // Every subset keeps .notdef, so a font stripped of all real glyphs still reports 1.
          if (glyphCount < 2) {
            throw new Error(
              `[${adapter.name}/${name}] Asset "${asset.name}" contains no glyphs beyond .notdef — ` +
                `an icon that should have been kept was subset away.`,
            );
          }
        }

        // Headless builds must not pull in Griffel.
        if (entry.assertNoGriffel) {
          for (const m of compilation.modules) {
            const resource = /** @type {{ resource?: string }} */ (m).resource;
            if (resource && /[\\/]@griffel[\\/]/.test(resource)) {
              throw new Error(
                `[${adapter.name}/${name}] Module graph includes a @griffel module (${resource}) — ` +
                  `headless build expected to be Griffel-free.`,
              );
            }
          }
        }
      });
    },
  };
}

/**
 * Reads `numGlyphs` out of a TrueType font's `maxp` table.
 *
 * Byte sizes make a poor correctness signal here: a font that wrongly dropped a glyph is *smaller*,
 * so it slips under any ceiling. The glyph count says outright whether an icon survived.
 *
 * @param {Buffer} ttf
 * @returns {number}
 */
function readGlyphCount(ttf) {
  const tableCount = ttf.readUInt16BE(4);

  for (let i = 0; i < tableCount; i++) {
    // Table directory: 12-byte header, then 16 bytes per record (tag, checksum, offset, length).
    const record = 12 + i * 16;
    if (ttf.toString('ascii', record, record + 4) === 'maxp') {
      return ttf.readUInt16BE(ttf.readUInt32BE(record + 8) + 4);
    }
  }

  throw new Error('Font has no `maxp` table — not a TrueType font?');
}

module.exports = { makeConfigs, entries };
