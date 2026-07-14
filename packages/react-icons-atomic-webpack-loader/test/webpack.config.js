// @ts-check
const { resolve } = require('path');
const { readdirSync, readFileSync } = require('fs');

/**
 * @typedef {object} EntryConfig
 * @property {string} src Entry source file, relative to this config.
 * @property {object} loaderOptions Options passed to the atomic import loader.
 * @property {string[]} mustInclude Substrings the emitted bundle must contain.
 * @property {string[]} mustExclude Substrings the emitted bundle must NOT contain.
 * @property {string[]} [mustWarn] Substrings each of which must appear in at least
 *   one emitted build warning. When set, all warnings are also printed so they are
 *   directly visible in the test output.
 */

/** @type {Record<string, EntryConfig>} */
const entries = {
  'svg-imports': {
    src: './src/svg-imports.js',
    loaderOptions: {},
    mustInclude: [
      '@fluentui/react-icons/svg/add',
      '@fluentui/react-icons/svg/arrow-left',
      '@fluentui/react-icons/svg/arrow-circle-down',
      '@fluentui/react-icons/svg/people',
      '@fluentui/react-icons/providers',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'svg-reexports': {
    src: './src/svg-reexports.js',
    loaderOptions: {},
    mustInclude: [
      '@fluentui/react-icons/svg/add',
      '@fluentui/react-icons/svg/arrow-left',
      '@fluentui/react-icons/svg/arrow-circle-down',
      '@fluentui/react-icons/svg/add-circle',
      '@fluentui/react-icons/providers',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'indirect-reexports': {
    src: './src/indirect-reexports.js',
    loaderOptions: {},
    mustInclude: [
      '@fluentui/react-icons/svg/add',
      '@fluentui/react-icons/svg/arrow-left',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'aliased-indirect-reexports': {
    src: './src/aliased-indirect-reexports.js',
    loaderOptions: {},
    mustInclude: ['@fluentui/react-icons/svg/add', '@fluentui/react-icons/svg/arrow-left'],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'renamed-indirect-reexports': {
    src: './src/renamed-indirect-reexports.js',
    loaderOptions: {},
    mustInclude: ['@fluentui/react-icons/svg/add', '@fluentui/react-icons/svg/arrow-left'],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'mixed-reexports': {
    src: './src/mixed-reexports.js',
    loaderOptions: {},
    mustInclude: [
      '@fluentui/react-icons/svg/add',
      '@fluentui/react-icons/svg/arrow-left',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'fonts-imports': {
    src: './src/fonts-imports.js',
    loaderOptions: { iconVariant: 'fonts' },
    mustInclude: [
      '@fluentui/react-icons/fonts/add',
      '@fluentui/react-icons/fonts/arrow-left',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"', '@fluentui/react-icons/svg/'],
  },
  'color-fonts-imports': {
    src: './src/color-fonts-imports.js',
    // Color icons are SVG-only; under 'fonts' they reroute to svg while their
    // non-color siblings stay on the font build.
    loaderOptions: { iconVariant: 'fonts' },
    mustInclude: ['@fluentui/react-icons/fonts/add', '@fluentui/react-icons/svg/add-circle'],
    mustExclude: ['"@fluentui/react-icons"', '@fluentui/react-icons/fonts/add-circle'],
  },
  'svg-sprite-imports': {
    src: './src/svg-sprite-imports.js',
    loaderOptions: { iconVariant: 'svg-sprite' },
    mustInclude: [
      '@fluentui/react-icons/svg-sprite/add',
      '@fluentui/react-icons/svg-sprite/arrow-left',
      '@fluentui/react-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-icons"', '@fluentui/react-icons/svg/', '@fluentui/react-icons/fonts/'],
  },

  'headless-imports': {
    src: './src/headless-imports.js',
    loaderOptions: { headless: true },
    mustInclude: [
      '@fluentui/react-icons/headless/svg/add',
      '@fluentui/react-icons/headless/svg/arrow-left',
      '@fluentui/react-icons/headless/svg/arrow-circle-down',
      '@fluentui/react-icons/headless/svg/people',
      // context stays on the shared (non-headless) providers entry
      '@fluentui/react-icons/providers',
      '@fluentui/react-icons/headless/utils',
    ],
    // no standard (non-headless) svg/utils paths should leak through
    mustExclude: ['"@fluentui/react-icons"', '@fluentui/react-icons/svg/', '@fluentui/react-icons/utils'],
  },

  'color-headless-fonts-imports': {
    src: './src/color-headless-fonts-imports.js',
    // Under headless fonts, color icons reroute to the headless svg build while
    // their non-color siblings stay on the headless font build.
    loaderOptions: { iconVariant: 'fonts', headless: true },
    mustInclude: ['@fluentui/react-icons/headless/fonts/add', '@fluentui/react-icons/headless/svg/add-circle'],
    mustExclude: ['"@fluentui/react-icons"', '@fluentui/react-icons/headless/fonts/add-circle'],
  },

  'brand-icons-imports': {
    src: './src/brand-icons-imports.js',
    loaderOptions: {},
    mustInclude: [
      '@fluentui/react-brand-icons/svg/calendar-taskbar',
      '@fluentui/react-brand-icons/svg/project',
      '@fluentui/react-brand-icons/utils',
    ],
    mustExclude: ['"@fluentui/react-brand-icons"'],
  },

  'mixed-modules-fonts': {
    src: './src/mixed-modules-fonts.js',
    // react-icons honors 'fonts'; react-brand-icons only ships 'svg', so it
    // falls back via the explicit fallbackVariant without erroring.
    loaderOptions: { iconVariant: 'fonts', fallbackVariant: 'svg' },
    mustInclude: ['@fluentui/react-icons/fonts/add', '@fluentui/react-brand-icons/svg/project'],
    mustExclude: ['"@fluentui/react-icons"', '"@fluentui/react-brand-icons"', '@fluentui/react-brand-icons/fonts/'],
  },

  'jsx-component': {
    src: './src/jsx-component.jsx',
    loaderOptions: {},
    mustInclude: ['@fluentui/react-icons/svg/add', '@fluentui/react-icons/svg/arrow-left'],
    mustExclude: ['"@fluentui/react-icons"'],
  },
  'tsx-component': {
    src: './src/tsx-component.tsx',
    loaderOptions: {},
    mustInclude: ['@fluentui/react-icons/svg/add', '@fluentui/react-icons/svg/arrow-left'],
    mustExclude: ['"@fluentui/react-icons"'],
  },

  'dynamic-barrel-imports': {
    src: './src/dynamic-barrel-imports.js',
    loaderOptions: {},
    // Dynamic imports are code-split into separate async chunks and left
    // untouched by the loader, so there is nothing to assert on the main bundle
    // content — the point of this fixture is the emitted warnings below.
    mustInclude: [],
    mustExclude: [],
    // Each barrel dynamic import must surface a warning; the atomic one must not.
    mustWarn: [
      'dynamic import of the "@fluentui/react-icons" barrel cannot be atomized',
      'dynamic import of the "@fluentui/react-brand-icons" barrel cannot be atomized',
    ],
  },

  'dynamic-atomize': {
    src: './src/dynamic-atomize.js',
    loaderOptions: { allowDynamicImports: true },
    // With allowDynamicImports the barrel dynamic import is rewritten to atomic
    // dynamic imports; the bare barrel specifier must be gone.
    mustInclude: ['@fluentui/react-icons/svg/add', '@fluentui/react-icons/svg/arrow-left'],
    mustExclude: ['"@fluentui/react-icons"'],
  },
};

/**
 * @param {string} name
 * @param {EntryConfig} entry
 * @returns {import('webpack').Configuration}
 */
function createConfig(name, entry) {
  return {
    name,
    context: __dirname,
    mode: 'production',
    optimization: { minimize: false },
    entry: { [name]: entry.src },
    experiments: { outputModule: true },
    output: {
      path: resolve(__dirname, 'dist', name),
      filename: '[name].js',
      library: { type: 'module' },
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.jsx', '.js'],
    },
    externals: [/^@fluentui\/react-icons/, /^@fluentui\/react-brand-icons/, /^react$/],
    module: {
      rules: [
        {
          test: /\.(jsx?|tsx?)$/,
          enforce: 'pre',
          use: [
            {
              loader: resolve(__dirname, '../lib/index.js'),
              options: entry.loaderOptions,
            },
          ],
        },
        {
          test: /\.[jt]sx?$/,
          exclude: /\.js$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
                compilerOptions: { jsx: 'react', module: 'es2020', allowJs: true },
              },
            },
          ],
        },
      ],
    },
    plugins: [
      {
        apply(compiler) {
          compiler.hooks.afterEmit.tap('verify-transforms', (compilation) => {
            // Read every emitted JS chunk from disk (entry chunk + async chunks)
            // so assertions also cover code split behind a dynamic import().
            // afterEmit sources are size-only, hence reading the written files.
            const outDir = resolve(__dirname, 'dist', name);
            const output = readdirSync(outDir)
              .filter((file) => file.endsWith('.js'))
              .map((file) => readFileSync(resolve(outDir, file), 'utf8'))
              .join('\n');

            for (const pattern of entry.mustInclude) {
              if (!output.includes(pattern)) {
                throw new Error(`[${name}] Expected output to contain "${pattern}" but it was not found.`);
              }
            }

            for (const pattern of entry.mustExclude) {
              if (output.includes(pattern)) {
                throw new Error(`[${name}] Expected output NOT to contain "${pattern}" but it was found.`);
              }
            }

            if (entry.mustWarn && entry.mustWarn.length > 0) {
              const warnings = compilation.warnings.map((w) => (w instanceof Error ? w.message : String(w)));

              for (const warning of warnings) {
                console.log(`  ⚠ ${name}: ${warning}`);
              }

              for (const expected of entry.mustWarn) {
                if (!warnings.some((w) => w.includes(expected))) {
                  throw new Error(`[${name}] Expected a build warning containing "${expected}" but none was emitted.`);
                }
              }
            }

            console.log(`  ✓ ${name}: all assertions passed`);
          });
        },
      },
    ],
  };
}

const testConfigs = Object.entries(entries).map(([name, entry]) => createConfig(name, entry));

module.exports = testConfigs;
