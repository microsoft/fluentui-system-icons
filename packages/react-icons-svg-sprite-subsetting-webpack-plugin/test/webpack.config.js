// @ts-check
const { readFileSync } = require('fs');
const { join, resolve } = require('path');

const { default: FluentUIReactIconsSvgSpriteSubsettingPlugin } = require('../lib/');

const isMerged = process.env.SVG_SPRITE_MODE === 'merged';
const injectMode = process.env.SVG_SPRITE_INJECT;
const generateManifest = process.env.SVG_SPRITE_MANIFEST === '1';
const mergedSpriteFilename = process.env.SVG_SPRITE_MERGED_FILENAME;
const entryName = isMerged ? 'merged' : 'atomic';

const hasHtmlInjection = injectMode === 'inline' || injectMode === 'reference';
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
    path: resolve(__dirname, 'dist', isMerged ? 'merged' : 'atomic'),
    filename: '[name].js',
    clean: true,
  },
  plugins: [
    new FluentUIReactIconsSvgSpriteSubsettingPlugin({
      mode: isMerged ? 'merged' : 'atomic',
      mergedSpriteFilename: isMerged ? mergedSpriteFilename || 'fluentui-react-icons.svg' : undefined,
      generateSpritesManifest: generateManifest,
      injectSpritesInTemplates: hasHtmlInjection ? { mode: injectMode } : false,
    }),
    ...(hasHtmlInjection
      ? [
          new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: [entryName],
          }),
        ]
      : []),
    {
      apply(compiler) {
        compiler.hooks.afterEmit.tap('test-svg-sprite-subsetting', (compilation) => {
          const outDir = compilation.outputOptions.path || resolve(__dirname, 'dist');
          const svgAssets = compilation
            .getAssets()
            .map((a) => a.name)
            .filter((name) => name.endsWith('.svg'))
            .map((name) => ({ name, source: readFileSync(join(outDir, name), 'utf8') }));

          const mergedFilenamePattern = (mergedSpriteFilename || 'fluentui-react-icons.svg').replace(/\./g, '\\.');
          const mergedFilenameRegex = new RegExp(
            `^${mergedFilenamePattern.replace(/\[contenthash\]/g, '[a-f0-9]+').replace(/\[fullhash\]/g, '[a-f0-9]+')}$`,
          );

          if (isMerged) {
            const merged = svgAssets.find((a) => mergedFilenameRegex.test(a.name));
            if (!merged) {
              throw new Error('Merged sprite asset was not emitted');
            }
            if (!merged.source.includes('id="BackpackFilled"') || !merged.source.includes('id="CalculatorFilled"')) {
              throw new Error('Merged sprite does not contain required symbols');
            }
            if (merged.source.includes('id="BackpackRegular"')) {
              throw new Error('Merged sprite still contains unused symbols');
            }
            const atomicSprites = svgAssets.filter(
              (a) => a.name.startsWith('backpack-') || a.name.startsWith('calculator-'),
            );
            if (atomicSprites.length > 0) {
              throw new Error(
                `Atomic sprite assets should not be emitted in merged mode: ${atomicSprites.map((a) => a.name).join(', ')}`,
              );
            }
          } else {
            if (!hasHtmlInjection || injectMode !== 'inline') {
              const backpack = svgAssets.find((a) => a.name.startsWith('backpack-'));
              if (!backpack) {
                throw new Error('Backpack sprite asset was not emitted');
              }
              if (!backpack.source.includes('id="BackpackFilled"')) {
                throw new Error('Backpack sprite is missing BackpackFilled symbol');
              }
              if (
                backpack.source.includes('id="BackpackRegular"') ||
                backpack.source.includes('id="Backpack12Filled"')
              ) {
                throw new Error('Atomic sprite was not subset down to only used symbols');
              }
            }
          }

          if (generateManifest) {
            const manifestText = readFileSync(join(outDir, 'sprites-manifest.json'), 'utf8');
            const manifest = JSON.parse(manifestText);
            if (!manifest.atomic) {
              throw new Error('sprites-manifest.json missing atomic entrypoint');
            }
            if (!Array.isArray(manifest.atomic.sprites) || manifest.atomic.sprites.length === 0) {
              throw new Error('sprites-manifest.json atomic sprites list missing');
            }
          }

          if (hasHtmlInjection) {
            const html = readFileSync(join(outDir, 'index.html'), 'utf8');
            if (injectMode === 'inline') {
              if (!html.includes('<svg') || !html.includes('id="BackpackFilled"')) {
                throw new Error('Inline sprite was not injected into HTML');
              }
            }
            if (injectMode === 'reference') {
              if (!html.includes('rel="preload"') || !html.includes('.svg')) {
                throw new Error('Reference preload links were not injected into HTML');
              }
            }
          }
        });
      },
    },
  ],
};
