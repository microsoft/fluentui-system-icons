// TODO(monosize): Migrate these fixtures, measurements, and baselines to the existing
// monosize pipeline, then remove this temporary runner and its package/Nx target.
// This may require monosize changes: combined totals can hide CSS growth behind a
// JS reduction. Preserve independent zero-growth gates for JS and CSS, including
// minified, gzip, and Brotli metrics; keep approved font/whole-library growth separate.
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const { parseArgs } = require('node:util');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const {
  values: { baseline, record, 'package-root': packageRoot },
} = parseArgs({
  options: {
    baseline: { type: 'string' },
    record: { type: 'boolean', default: false },
    'package-root': { type: 'string' },
  },
});
if (!baseline) throw new Error('Specify --baseline <directory>; use --record before implementation.');

const root = path.resolve(__dirname, '../../..');
const output = path.resolve(baseline);
const fixtures = {
  svg: ['@fluentui/react-icons', 'TextBoldRegular, TextBold24Regular, AirplaneRegular'],
  atomic: ['@fluentui/react-icons/svg/text-bold', 'TextBoldRegular, TextBold24Regular'],
  headless: ['@fluentui/react-icons/headless/svg/text-bold', 'TextBoldRegular, TextBold24Regular'],
  fonts: ['@fluentui/react-icons/fonts', 'TextBoldRegular, TextBold24Regular'],
  'atomic-fonts': ['@fluentui/react-icons/fonts/text-bold', 'TextBoldRegular, TextBold24Regular'],
  'headless-fonts': ['@fluentui/react-icons/headless/fonts/text-bold', 'TextBoldRegular, TextBold24Regular'],
  'font-condition': ['@fluentui/react-icons', 'TextBoldRegular, TextBold24Regular'],
};

async function main() {
  fs.mkdirSync(output, { recursive: true });
  const resolutionRoot = path.join(output, record ? 'before-resolution' : 'after-resolution', 'node_modules');
  fs.rmSync(resolutionRoot, { recursive: true, force: true });
  fs.mkdirSync(path.join(resolutionRoot, '@fluentui'), { recursive: true });
  fs.symlinkSync(
    path.resolve(packageRoot || path.join(root, 'packages/react-icons')),
    path.join(resolutionRoot, '@fluentui/react-icons'),
    'dir',
  );
  const report = {};
  for (const [name, [specifier, names]] of Object.entries(fixtures)) {
    const css =
      name === 'headless'
        ? '@fluentui/react-icons/headless/styles.css'
        : name === 'headless-fonts'
          ? '@fluentui/react-icons/headless/fonts/styles.css'
          : undefined;
    const directory = path.join(output, record ? 'before' : 'after', name);
    const compiler = webpack({
      mode: 'production',
      context: root,
      entry:
        'data:text/javascript,' +
        encodeURIComponent(
          `import {${names}} from '${specifier}'; ${css ? `import '${css}';` : ''} console.log(${names});`,
        ),
      output: { path: directory, filename: 'bundle.js', assetModuleFilename: '[name][ext]' },
      resolve: {
        modules: [resolutionRoot, path.join(root, 'node_modules')],
        conditionNames: name === 'font-condition' ? ['fluentIconFont', '...'] : ['...'],
      },
      optimization: { moduleIds: 'natural', chunkIds: 'natural' },
      externals: { react: 'commonjs react' },
      module: {
        rules: [
          { test: /\.(ttf|woff2?)$/, type: 'asset/resource' },
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ],
      },
      plugins: [new MiniCssExtractPlugin({ filename: 'styles.css' })],
    });
    await new Promise((resolve, reject) =>
      compiler.run((error, stats) =>
        compiler.close(() => {
          if (error || !stats || stats.hasErrors())
            reject(
              error || new Error(stats?.toString({ all: false, errors: true }) || 'Missing webpack compilation result'),
            );
          else resolve(undefined);
        }),
      ),
    );
    report[name] = {};
    for (const extension of ['js', 'css']) {
      const files = fs.readdirSync(directory).filter((file) => file.endsWith(`.${extension}`));
      const bytes = Buffer.concat(files.map((file) => fs.readFileSync(path.join(directory, file))));
      report[name][extension] = {
        bytes: bytes.length,
        gzip: zlib.gzipSync(bytes).length,
        brotli: zlib.brotliCompressSync(bytes).length,
      };
    }
  }
  const reportPath = path.join(output, 'bundles.json');
  if (record) fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  else {
    const previous = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
    for (const [name, formats] of Object.entries(report)) {
      for (const [format, sizes] of Object.entries(formats)) {
        for (const [compression, size] of Object.entries(sizes)) {
          if (size > previous[name][format][compression])
            throw new Error(
              `${name} ${format} ${compression} grew by ${size - previous[name][format][compression]} bytes`,
            );
        }
      }
    }
  }
  console.log(JSON.stringify(report, null, 2));
  console.log(record ? `Baseline recorded in ${output}` : 'No named-import JS/CSS growth.');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
