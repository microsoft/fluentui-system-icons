const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { chromium } = require('playwright');
const { resolveFluentIconImport } = require('../../react-icons/fluent-icons-transform.cjs');
const { default: FontSubsettingPlugin } = require('../lib');

const root = path.resolve(__dirname, '../../..');
const output = path.join(root, 'tmp/localized-font-render');
const samples = [
  'TextBold24Regular_es',
  'TextItalic24Regular_es',
  'TextUnderline24Regular_es',
  'TextBold24Regular_srCyrl',
  'TextNumberListRtl90Regular',
];
const maps = ['Regular', 'Resizable'].map((family) =>
  JSON.parse(
    fs.readFileSync(path.join(root, `packages/react-icons/lib/utils/fonts/FluentSystemIcons-${family}.json`), 'utf8'),
  ),
);
const expectedGlyphs = Object.fromEntries(
  samples.map((name) => [name, maps.find((map) => map[name] !== undefined)?.[name]]),
);

async function main() {
  for (const variant of ['full', 'subset']) {
    const imports = samples.flatMap((name, index) =>
      ['fonts', 'headless/fonts', 'svg', 'headless/svg'].map(
        (target, targetIndex) =>
          `import { ${name} as Icon${index}_${targetIndex} } from '${resolveFluentIconImport(name, target)}';`,
      ),
    );
    const rows = samples
      .map((name, index) => `[${JSON.stringify(name)}, Icon${index}_0, Icon${index}_1, Icon${index}_2, Icon${index}_3]`)
      .join(',');
    const entry = `import * as React from 'react'; import { createRoot } from 'react-dom/client';
      import { IconDirectionContextProvider } from '@fluentui/react-icons/providers';
      import '@fluentui/react-icons/headless/fonts/styles.css';
      import '@fluentui/react-icons/headless/styles.css';
      ${imports.join('\n')}
      const rows = [${rows}];
      createRoot(document.getElementById('root')).render(React.createElement(React.Fragment, null,
        rows.map(([name, Font, HeadlessFont, Svg, HeadlessSvg]) => React.createElement('section', {key:name},
          React.createElement('h2', null, name),
          React.createElement('div', {className:'row'}, ['ltr','rtl'].flatMap(direction =>
            [[Font,Svg,'standard'],[HeadlessFont,HeadlessSvg,'headless']].map(([FontIcon,SvgIcon,api]) =>
              React.createElement(IconDirectionContextProvider, {key:direction+api,value:{textDirection:direction}},
                React.createElement('div', {className:'pair',dir:direction},
                  React.createElement('span', null, api+' '+direction),
                  React.createElement('div', null,
                    React.createElement(FontIcon, {'data-font-sample':name,fontSize:40}),
                    React.createElement(SvgIcon, {fontSize:40})))))))))));
    `;
    const compiler = webpack({
      context: root,
      mode: 'production',
      performance: false,
      entry: 'data:text/javascript,' + encodeURIComponent(entry),
      output: { path: path.join(output, variant), filename: 'bundle.js', assetModuleFilename: '[name][ext]' },
      module: {
        rules: [
          { test: /\.(ttf|woff2?)$/, type: 'asset/resource' },
          { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ],
      },
      plugins: [
        new MiniCssExtractPlugin({ filename: 'styles.css' }),
        ...(variant === 'subset' ? [new FontSubsettingPlugin()] : []),
      ],
    });
    await new Promise((resolve, reject) =>
      compiler.run((error, stats) =>
        compiler.close(() => {
          if (error || !stats || stats.hasErrors() || stats.hasWarnings())
            reject(error || new Error(stats?.toString({ all: false, errors: true, warnings: true })));
          else resolve(undefined);
        }),
      ),
    );
  }

  const server = http.createServer((request, response) => {
    const pathname = new URL(request.url || '/', 'http://localhost').pathname;
    if (/^\/(full|subset)\/$/.test(pathname)) {
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.end(`<html><head><meta charset="utf-8"><link rel="stylesheet" href="styles.css"><style>
        body{margin:24px;background:white;color:black;font:14px monospace}h2{font-size:14px;overflow-wrap:anywhere}
        .row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}.pair{min-width:0;padding:8px;border:1px solid #ccc}
        .pair span{display:block;font-size:12px;overflow-wrap:anywhere}.pair div{display:flex;align-items:center;gap:8px;height:64px}
        @media(max-width:600px){.row{grid-template-columns:repeat(2,minmax(0,1fr))}}
      </style></head><body><div id="root"></div><script src="bundle.js"></script></body></html>`);
      return;
    }
    const file = path.resolve(output, '.' + pathname);
    if (!file.startsWith(output + path.sep) || !fs.existsSync(file)) {
      response.statusCode = 404;
      response.end();
      return;
    }
    response.setHeader(
      'Content-Type',
      file.endsWith('.js')
        ? 'text/javascript; charset=utf-8'
        : file.endsWith('.css')
          ? 'text/css; charset=utf-8'
          : 'application/octet-stream',
    );
    response.end(fs.readFileSync(file));
  });
  const browser = await chromium.launch({ headless: true });
  try {
    await new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(undefined)));
    const address = server.address();
    if (!address || typeof address === 'string') throw new Error('Missing browser test address');
    for (const variant of ['full', 'subset']) {
      for (const width of [1000, 390]) {
        const page = await browser.newPage({ viewport: { width, height: 850 } });
        const errors = [];
        page.on('pageerror', (error) => errors.push(error.message));
        await page.goto(`http://127.0.0.1:${address.port}/${variant}/`);
        await page.waitForFunction(() => document.querySelectorAll('[data-font-sample]').length === 20);
        const results = await page.evaluate(async (expected) => {
          await document.fonts.ready;
          return Promise.all(
            Array.from(document.querySelectorAll('[data-font-sample]'), async (icon) => {
              const style = getComputedStyle(icon);
              await document.fonts.load(`${style.fontSize} ${style.fontFamily}`, icon.textContent || '');
              const canvas = document.createElement('canvas');
              canvas.width = 100;
              canvas.height = 100;
              const context = canvas.getContext('2d');
              if (!context) throw new Error('Missing canvas context');
              context.font = `48px ${style.fontFamily}`;
              context.fillText(icon.textContent || '', 10, 65);
              const pixels = context.getImageData(0, 0, 100, 100).data;
              const name = icon.getAttribute('data-font-sample') || '';
              const text = icon.textContent || '';
              return {
                name,
                family: style.fontFamily,
                correctCodepoint: Array.from(text).length === 1 && text.codePointAt(0) === expected[name],
                loaded: document.fonts.check(`${style.fontSize} ${style.fontFamily}`, icon.textContent || ''),
                transform: style.transform,
                painted: pixels.some((value, index) => index % 4 === 3 && value > 0),
              };
            }),
          );
        }, expectedGlyphs);
        if (
          errors.length ||
          results.some(
            (result) => !result.correctCodepoint || !result.loaded || !result.painted || result.transform !== 'none',
          )
        ) {
          throw new Error(JSON.stringify({ errors, results }));
        }
        await page.screenshot({ path: path.join(output, `${variant}-${width}.png`), fullPage: true });
        console.log(
          `${variant} ${width}px: ${results.length} localized standard/headless glyphs loaded, painted, and not double-mirrored`,
        );
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
