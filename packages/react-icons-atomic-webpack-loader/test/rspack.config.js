// @ts-check
const { makeConfigs } = require('./make-configs');

// Intentionally the same ts-loader setup as webpack: the fixtures are only compiled so the atomic
// transform has something to run against, and keeping the pipelines identical means any difference
// in the emitted output comes from the bundler rather than from the TypeScript toolchain.
module.exports = makeConfigs({
  name: 'rspack',
  typescriptRule: (dirname) => ({
    test: /\.[jt]sx?$/,
    exclude: /\.js$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          compilerOptions: { jsx: 'react', module: 'es2020', allowJs: true, rootDir: dirname },
        },
      },
    ],
  }),
});
