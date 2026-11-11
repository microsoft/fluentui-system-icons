// @ts-check
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { expect, onTestFinished, test } from 'vitest';

const validatorScriptPath = fileURLToPath(new URL('./check-assets.mjs', import.meta.url));
const validMonochromeSvg = '<svg xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#212121" d="M0 0h1v1z"/></svg>';

function createAssetFixture() {
  const assetsRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'fluent-assets-contract-'));
  onTestFinished(() => fs.rmSync(assetsRoot, { recursive: true, force: true }));
  return {
    assetsRoot,
    writeSvg: (/** @type {string} */ assetRelativePath, /** @type {string} */ svgContent = validMonochromeSvg) => {
      const svgFilePath = path.join(assetsRoot, assetRelativePath);
      fs.mkdirSync(path.dirname(svgFilePath), { recursive: true });
      fs.writeFileSync(svgFilePath, svgContent);
      return svgFilePath;
    },
    runValidator: (/** @type {string[]} */ ...cliArguments) =>
      spawnSync(process.execPath, [validatorScriptPath, `--source=${assetsRoot}`, ...cliArguments], { encoding: 'utf8' }),
  };
}

test.each([
  { scenario: 'explicit canonical paint', svgContent: validMonochromeSvg },
  { scenario: 'root inheritance', svgContent: '<svg fill="#212121"><path d="M0 0h1v1z"/></svg>' },
  { scenario: 'group inheritance', svgContent: '<svg fill="none"><g fill="#212121"><path d="M0 0h1v1z"/></g></svg>' },
  { scenario: 'sibling inheritance restoration', svgContent: '<svg fill="#212121"><g fill="none"><path fill="#212121" d="M0 0h1v1z"/></g><path d="M2 2h1v1z"/></svg>' },
  { scenario: 'unused namespace declaration', svgContent: '<svg xmlns:s="http://www.w3.org/2000/svg" fill="#212121"><path d="M0 0h1v1z"/></svg>' },
  { scenario: 'XML declaration and comments', svgContent: '<?xml version="1.0" encoding="UTF-8"?><!-- artwork -->' + validMonochromeSvg },
])('asset accepts $scenario without rewriting it', ({ svgContent }) => {
  const { writeSvg, runValidator } = createAssetFixture();
  const svgFilePath = writeSvg('Example/SVG/ic_fluent_example_20_regular.svg', svgContent);
  const validationResult = runValidator();
  expect(validationResult.status, validationResult.stderr).toBe(0);
  expect(validationResult.stdout).toMatch(/Checked 1 monochrome SVG/);
  expect(fs.readFileSync(svgFilePath, 'utf8')).toBe(svgContent);
});

test.each(['#242424', 'white', 'currentColor', 'rgb(33,33,33)', 'url(#paint)'])('asset rejects path fill %s even beside canonical paint', (fill) => {
  const { writeSvg, runValidator } = createAssetFixture();
  const svgContent = `<svg><path fill="#212121" d="M0 0h1v1z"/><path fill="${fill}" d="M2 2h1v1z"/></svg>`;
  const svgFilePath = writeSvg('Example/SVG/ic_fluent_example_20_regular.svg', svgContent);
  const validationResult = runValidator();
  expect(validationResult.status).toBe(1);
  expect(validationResult.stderr).toContain(`<path> has fill="${fill}"`);
  expect(validationResult.stderr).toContain('Example/SVG/ic_fluent_example_20_regular.svg');
  expect(validationResult.stderr).not.toMatch(/Unsupported monochrome element/);
  expect(fs.readFileSync(svgFilePath, 'utf8')).toBe(svgContent);
});

test.each([
  { scenario: 'implicit black', svgContent: '<svg><path fill="#212121" d="M0 0h1v1z"/><path d="M2 2h10v10H2z"/></svg>', expectedDiagnostic: /effective fill="black"/ },
  { scenario: 'explicit invisible path', svgContent: '<svg><path fill="#212121" d="M0 0h1v1z"/><path fill="none" d="M0 0h20v20H0z"/></svg>', expectedDiagnostic: /effective fill="none"/ },
  { scenario: 'inherited invisible path', svgContent: '<svg fill="none"><path fill="#212121" d="M0 0h1v1z"/><g><path d="M0 0h20v20H0z"/></g></svg>', expectedDiagnostic: /effective fill="none"/ },
  { scenario: 'unused canonical container', svgContent: '<svg fill="#212121"><g/></svg>', expectedDiagnostic: /No canonical painted path geometry/ },
  { scenario: 'unused canonical definition', svgContent: '<svg fill="none"><defs><path fill="#212121" d="M0 0h1v1z"/></defs></svg>', expectedDiagnostic: /No canonical painted path geometry/ },
  { scenario: 'empty path', svgContent: '<svg fill="#212121"><path d=" "/></svg>', expectedDiagnostic: /nonempty path geometry/ },
  { scenario: 'dropped circle primitive', svgContent: '<svg fill="none"><circle cx="10" cy="10" r="6" fill="#212121"/></svg>', expectedDiagnostic: /Unsupported monochrome element <circle>/ },
  { scenario: 'invisible artboard rectangle', svgContent: '<svg fill="none"><rect width="20" height="20" fill="none"/><path fill="#212121" d="M4 4h12v12H4z"/></svg>', expectedDiagnostic: /Unsupported monochrome element <rect>/ },
  { scenario: 'path clipping definition', svgContent: '<svg fill="none"><defs><clipPath id="clip"><path fill="#212121" d="M0 0H16V16H0Z"/></clipPath></defs><path fill="#212121" clip-path="url(#clip)" d="M2 2h4v4H2z"/></svg>', expectedDiagnostic: /Unsupported monochrome element <clipPath>/ },
  { scenario: 'transformed clip consumer', svgContent: '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g transform="translate(8 0)" clip-path="url(#clip)"><path fill="#212121" d="M-4 2h12v12H-4z"/></g><defs><clipPath id="clip"><rect width="16" height="16" fill="#212121"/></clipPath></defs></svg>', expectedDiagnostic: /Unsupported monochrome element <clipPath>/ },
  { scenario: 'inline CSS', svgContent: '<svg><path style="fill:#242424" fill="#212121" d="M0 0h1v1z"/></svg>', expectedDiagnostic: /unsupported CSS styling/ },
  { scenario: 'stylesheet element', svgContent: '<svg><style>path { fill:#242424 }</style><path fill="#212121" d="M0 0h1v1z"/></svg>', expectedDiagnostic: /unsupported CSS styling/ },
  { scenario: 'prefixed stylesheet', svgContent: '<svg xmlns:s="http://www.w3.org/2000/svg"><s:style>path { fill:#242424 }</s:style><path fill="#212121" d="M0 0h1v1z"/></svg>', expectedDiagnostic: /Unsupported monochrome element <s:style>/ },
  { scenario: 'prefixed painting attribute', svgContent: '<svg xmlns:s="http://www.w3.org/2000/svg"><path fill="#212121" s:style="fill:#242424" d="M0 0h1v1z"/></svg>', expectedDiagnostic: /Unsupported attribute s:style/ },
  { scenario: 'foreign namespace', svgContent: '<svg xmlns="http://www.w3.org/1999/xhtml"><path fill="#212121" d="M0 0h1v1z"/></svg>', expectedDiagnostic: /Unsupported namespace/ },
  { scenario: 'namespace rebinding', svgContent: '<svg xmlns="http://www.w3.org/2000/svg"><g xmlns=""><path fill="#212121" d="M0 0h1v1z"/></g></svg>', expectedDiagnostic: /Unsupported namespace/ },
  { scenario: 'non-SVG root', svgContent: '<html/>', expectedDiagnostic: /Expected an SVG document root/ },
  { scenario: 'mismatched closing tag', svgContent: '<svg><path></svg>', expectedDiagnostic: /Malformed XML/ },
  { scenario: 'multiple roots', svgContent: validMonochromeSvg + validMonochromeSvg, expectedDiagnostic: /Malformed XML/ },
  { scenario: 'truncated trailing element', svgContent: validMonochromeSvg + '<svg fill="#242424"', expectedDiagnostic: /Malformed XML/ },
  { scenario: 'unclosed trailing comment', svgContent: validMonochromeSvg + '<!-- unfinished', expectedDiagnostic: /Malformed XML/ },
  { scenario: 'stylesheet instruction', svgContent: '<?xml-stylesheet type="text/css" href="data:text/css,path%7Bfill:%23242424%7D"?>' + validMonochromeSvg, expectedDiagnostic: /Unsupported processing instruction xml-stylesheet/ },
])('asset rejects $scenario without rewriting it', ({ svgContent, expectedDiagnostic }) => {
  const { writeSvg, runValidator } = createAssetFixture();
  const svgFilePath = writeSvg('Example/SVG/ic_fluent_example_20_regular.svg', svgContent);
  const validationResult = runValidator();
  expect(validationResult.status).toBe(1);
  expect(validationResult.stderr).toMatch(expectedDiagnostic);
  expect(validationResult.stderr).not.toMatch(/redundant|remove its reference/);
  expect(fs.readFileSync(svgFilePath, 'utf8')).toBe(svgContent);
});

test.each([
  { scenario: 'missing identity', assetRelativePath: 'Example/SVG/unknown.svg', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'missing prefix', assetRelativePath: 'Example/SVG/example_20_regular.svg', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'zero size', assetRelativePath: 'Example/SVG/ic_fluent_example_0_regular.svg', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'ambiguous Color suffix', assetRelativePath: 'Example/SVG/ic_fluent_example_20_color_filled.svg', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'staging suffix', assetRelativePath: 'Example/SVG/ic_fluent_example_20_regular_v2.svg', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'uppercase extension', assetRelativePath: 'Example/SVG/ic_fluent_example_20_regular.SVG', expectedDiagnostic: /Unrecognized SVG filename\/style/ },
  { scenario: 'nested qualifiers', assetRelativePath: 'Example/ko/RTL/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'duplicate direction', assetRelativePath: 'Example/RTL/SVG/ic_fluent_example_20_regular_rtl.svg', expectedDiagnostic: /Ambiguous icon qualifiers/ },
  { scenario: 'underscore locale alias', assetRelativePath: 'Example/sr_cyrl/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'Color in invalid qualifier folder', assetRelativePath: 'Example/ko_rtl/SVG/ic_fluent_example_20_color.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'lowercase direction folder', assetRelativePath: 'Example/rtl/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'direction suffix in locale', assetRelativePath: 'Example/ko-rtl/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'direction prefix in locale', assetRelativePath: 'Example/rtl-ko/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
  { scenario: 'direction inside locale', assetRelativePath: 'Example/sr-rtl-cyrl/SVG/ic_fluent_example_20_regular.svg', expectedDiagnostic: /Unrecognized asset SVG layout/ },
])('asset rejects $scenario before classifying artwork', ({ assetRelativePath, expectedDiagnostic }) => {
  const { writeSvg, runValidator } = createAssetFixture();
  writeSvg('Valid/SVG/ic_fluent_valid_20_regular.svg');
  const svgFilePath = writeSvg(assetRelativePath);
  const validationResult = runValidator();
  expect(validationResult.status).toBe(1);
  expect(validationResult.stderr).toMatch(expectedDiagnostic);
  expect(validationResult.stderr).toContain(assetRelativePath);
  expect(fs.readFileSync(svgFilePath, 'utf8')).toBe(validMonochromeSvg);
});

test('asset scans supported locale and direction layouts without metadata', () => {
  const { writeSvg, runValidator } = createAssetFixture();
  writeSvg('Example/ko/SVG/ic_fluent_example_20_filled.svg');
  writeSvg('Example/RTL/SVG/ic_fluent_example_20_regular.svg');
  writeSvg('Example/sr-cyrl/SVG/ic_fluent_example_24_regular.svg');
  writeSvg('Example/SVG/ic_fluent_example_24_light_rtl.svg');
  writeSvg('Example/SVG/ic_fluent_example_24_regular_ltr.svg');
  const validationResult = runValidator();
  expect(validationResult.status, validationResult.stderr).toBe(0);
  expect(validationResult.stdout).toMatch(/Checked 5 monochrome SVG/);
});

test('asset excludes actual Color styles but not names containing color', () => {
  const { writeSvg, runValidator } = createAssetFixture();
  writeSvg('Example/SVG/ic_fluent_example_20_regular.svg');
  const colorSvgContent = '<svg xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="clip"><rect width="4" height="4" fill="white"/></clipPath></defs><circle fill="#ff0000" clip-path="url(#clip)" r="4"/></svg>';
  const colorFilePaths = [
    'Example/ko/SVG/ic_fluent_example_20_color.svg',
    'Example/SVG/ic_fluent_example_20_color_rtl.svg',
  ].map((assetRelativePath) => writeSvg(assetRelativePath, colorSvgContent));
  const acceptedResult = runValidator();
  expect(acceptedResult.status, acceptedResult.stderr).toBe(0);
  expect(acceptedResult.stdout).toMatch(/skipped 2 Color SVG/);
  for (const svgFilePath of colorFilePaths) {
    expect(fs.readFileSync(svgFilePath, 'utf8')).toBe(colorSvgContent);
  }
  writeSvg('TextColor/SVG/ic_fluent_text_color_20_regular.svg', validMonochromeSvg.replace('#212121', '#123456'));
  const rejectedResult = runValidator();
  expect(rejectedResult.status).toBe(1);
  expect(rejectedResult.stderr).toContain('ic_fluent_text_color_20_regular.svg');
});

test('asset allows spaces inside a group name but rejects a trailing space', () => {
  const { writeSvg, runValidator } = createAssetFixture();
  writeSvg('Example Icon/SVG/ic_fluent_example_icon_20_regular.svg');
  const acceptedResult = runValidator();
  expect(acceptedResult.status, acceptedResult.stderr).toBe(0);
  writeSvg('TrailingSpace /SVG/ic_fluent_trailing_space_20_regular.svg');
  const rejectedResult = runValidator();
  expect(rejectedResult.status).toBe(1);
  expect(rejectedResult.stderr).toMatch(/"TrailingSpace " has a trailing space/);
});

test('asset rejects empty or missing scopes', () => {
  const { runValidator, assetsRoot } = createAssetFixture();
  const emptyRootResult = runValidator();
  expect(emptyRootResult.status).toBe(1);
  expect(emptyRootResult.stderr).toMatch(/No monochrome SVGs/);
  const missingRootResult = runValidator(`--source=${path.join(assetsRoot, 'missing')}`);
  expect(missingRootResult.status).toBe(1);
  expect(missingRootResult.stderr).toMatch(/ENOENT/);
});

test('asset reports all violations deterministically', () => {
  const { writeSvg, runValidator } = createAssetFixture();
  writeSvg('Zebra/SVG/ic_fluent_zebra_20_regular.svg', validMonochromeSvg.replace('#212121', '#123456'));
  writeSvg('Alpha/SVG/ic_fluent_alpha_20_regular.svg', validMonochromeSvg.replace('#212121', '#242424'));
  const firstResult = runValidator();
  expect(firstResult.status).toBe(1);
  expect(runValidator().stderr).toBe(firstResult.stderr);
  expect(firstResult.stderr).toContain('Alpha/');
  expect(firstResult.stderr).toContain('Zebra/');
  expect(firstResult.stderr.indexOf('Alpha/')).toBeLessThan(firstResult.stderr.indexOf('Zebra/'));
  expect(firstResult.stderr).toMatch(/#123456/);
  expect(firstResult.stderr).toMatch(/#242424/);
});

test('asset offers help and rejects unsupported options', () => {
  const { runValidator } = createAssetFixture();
  const helpResult = runValidator('--help');
  expect(helpResult.status).toBe(0);
  expect(helpResult.stderr).toMatch(/Usage:/);
  const invalidOptionResult = runValidator('--fix');
  expect(invalidOptionResult.status).toBe(1);
  expect(invalidOptionResult.stderr).toMatch(/Error parsing arguments/);
});