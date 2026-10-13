// @ts-check
const { makeConfigs } = require('./make-configs');

module.exports = makeConfigs({
  name: 'webpack',
  typescriptRule: (dirname) => ({
    test: /\.[jt]sx?$/,
    exclude: /\.js$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          // These fixtures live outside the package `rootDir`, and
          // ts-loader picks up the package tsconfig.json for them.
          compilerOptions: { jsx: 'react', module: 'es2020', allowJs: true, rootDir: dirname },
        },
      },
    ],
  }),
});
