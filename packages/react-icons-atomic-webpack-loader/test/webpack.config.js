// @ts-check
const { resolve } = require('path');
const { readFileSync } = require('fs');

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
};

/**
 * @param {string} name
 * @param {typeof entries[keyof typeof entries]} entry
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
    externals: [/^@fluentui\/react-icons/, /^react$/],
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
          compiler.hooks.afterEmit.tap('verify-transforms', () => {
            const outputPath = resolve(__dirname, 'dist', name, `${name}.js`);
            const output = readFileSync(outputPath, 'utf8');

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

            console.log(`  ✓ ${name}: all assertions passed`);
          });
        },
      },
    ],
  };
}

const testConfigs = Object.entries(entries).map(([name, entry]) => createConfig(name, entry));

module.exports = testConfigs;
