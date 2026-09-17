// @ts-check
const { readFileSync } = require('fs');
const { join, resolve } = require('path');

const { default: FluentUIReactIconsSvgSpriteSubsettingPlugin } = require('../lib/');

/** @type {import('webpack').Configuration} */
module.exports = {
  context: __dirname,
  mode: 'production',
  optimization: { concatenateModules: true },
  resolve: {
    alias: {
      '@fluentui/react-icons/svg-sprite/backpack': resolve(
        __dirname,
        '__mock__/react-icons/lib/atoms/svg-sprite/backpack.js',
      ),
      '@fluentui/react-icons/svg-sprite/calculator': resolve(
        __dirname,
        '__mock__/react-icons/lib/atoms/svg-sprite/calculator.js',
      ),
    },
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource',
      },
    ],
  },
  entry: {
    backpack: './src/multi-entry-backpack.js',
    calculator: './src/multi-entry-calculator.js',
  },
  output: {
    path: resolve(__dirname, 'dist/multi-entry'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: 'atomic',
      generateSpritesManifest: true,
    }),
    {
      apply(compiler) {
        compiler.hooks.afterEmit.tap('verify-multi-entry-attribution', (compilation) => {
          const manifest = JSON.parse(
            readFileSync(join(compilation.outputOptions.path, 'sprites-manifest.json'), 'utf8'),
          );
          const idsFor = (entry) => manifest[entry].sprites.flatMap((sprite) => sprite.ids);

          if (JSON.stringify(idsFor('backpack')) !== JSON.stringify(['BackpackFilled'])) {
            throw new Error(`Backpack entrypoint has incorrect sprite usage: ${JSON.stringify(manifest.backpack)}`);
          }
          if (JSON.stringify(idsFor('calculator')) !== JSON.stringify(['CalculatorFilled'])) {
            throw new Error(`Calculator entrypoint has incorrect sprite usage: ${JSON.stringify(manifest.calculator)}`);
          }
        });
      },
    },
  ],
};
