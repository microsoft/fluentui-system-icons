// @ts-check
const { readFileSync } = require('fs');
const { join, resolve } = require('path');

const { default: FluentUIReactIconsSvgSpriteSubsettingPlugin } = require('../lib/');

const isMerged = process.env.SVG_SPRITE_MODE === 'merged';

console.log(`Running svg-sprite subsetting test in ${isMerged ? 'merged' : 'atomic'} mode`);

/** @type {import('webpack').Configuration} */
module.exports = {
  context: __dirname,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: `[name]-[contenthash][ext]`,
        },
      },
    ],
  },
  entry: isMerged ? { merged: './src/merged.js' } : { atomic: './src/atomic.js' },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: isMerged ? 'merged' : 'atomic',
      mergedSpriteFilename: 'fluentui-react-icons.svg',
    }),
    {
      apply(compiler) {
        compiler.hooks.afterEmit.tap('test-svg-sprite-subsetting', compilation => {
          const outDir = compilation.outputOptions.path || resolve(__dirname, 'dist');
          const svgAssets = compilation
            .getAssets()
            .map(a => a.name)
            .filter(name => name.endsWith('.svg'))
            .map(name => ({ name, source: readFileSync(join(outDir, name), 'utf8') }));

          if (isMerged) {
            const merged = svgAssets.find(a => a.name === 'fluentui-react-icons.svg');
            if (!merged) {
              throw new Error('Merged sprite asset was not emitted');
            }
            if (!merged.source.includes('id="BackpackFilled"') || !merged.source.includes('id="CalculatorFilled"')) {
              throw new Error('Merged sprite does not contain required symbols');
            }
            if (merged.source.includes('id="BackpackRegular"')) {
              throw new Error('Merged sprite still contains unused symbols');
            }
            const atomicSprites = svgAssets.filter(a => a.name.startsWith('backpack-') || a.name.startsWith('calculator-'));
            if (atomicSprites.length > 0) {
              throw new Error(`Atomic sprite assets should not be emitted in merged mode: ${atomicSprites.map(a => a.name).join(', ')}`);
            }
          } else {
            const backpack = svgAssets.find(a => a.name.startsWith('backpack-'));
            if (!backpack) {
              throw new Error('Backpack sprite asset was not emitted');
            }
            if (!backpack.source.includes('id="BackpackFilled"')) {
              throw new Error('Backpack sprite is missing BackpackFilled symbol');
            }
            if (backpack.source.includes('id="BackpackRegular"') || backpack.source.includes('id="Backpack12Filled"')) {
              throw new Error('Atomic sprite was not subset down to only used symbols');
            }
          }
        });
      },
    },
  ],
};
