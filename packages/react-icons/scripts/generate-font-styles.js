// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Keeps every font-family declaration in the package derived from a single manifest
// (./font-families.js) so the Griffel (non-headless) and headless surfaces stay 1:1.
//
// Rather than owning whole files, this script rewrites delimited `#region @generated <name>`
// blocks in place. The surrounding code stays hand-written, type-checked and committed;
// only the derived data is generated.
//
// Run with `--check` to fail instead of writing — used by CI to catch a stale checkout.

const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');

const { FONT_FAMILIES, FONT_BINARY_EXTENSIONS, FONT_FORMAT_BY_EXTENSION } = require('./font-families');

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('[generate-font-styles] failed:', /** @type {Error} */ (err).message);
    process.exit(1);
  }
}

function main() {
  const {
    values: { dest, check, help },
  } = parseArgs({
    options: {
      dest: { type: 'string' },
      check: { type: 'boolean', default: false },
      help: { type: 'boolean', short: 'h' },
    },
  });

  if (help) {
    printUsage();
    return;
  }

  if (!dest) throw new Error('Source folder not specified by --dest');

  const srcDir = path.resolve(dest);
  const targets = buildTargets();

  /** @type {string[]} */
  const stale = [];

  for (const [relativePath, regions] of Object.entries(targets)) {
    const filePath = path.join(srcDir, relativePath);
    if (!fs.existsSync(filePath)) {
      throw new Error(`Target file not found: ${filePath}`);
    }

    const current = fs.readFileSync(filePath, 'utf8');
    const next = Object.entries(regions).reduce(
      (content, [name, lines]) => replaceRegion(content, name, lines, relativePath),
      current,
    );

    if (current === next) continue;

    if (check) {
      stale.push(relativePath);
      continue;
    }

    fs.writeFileSync(filePath, next);
    console.log(`  ✓ [font-families] ${relativePath}`);
  }

  if (stale.length > 0) {
    throw new Error(
      `Generated font-family regions are out of date in:\n  - ${stale.join('\n  - ')}\n` +
        'Run `yarn generate:font-styles` and commit the result.',
    );
  }
}

/**
 * @returns {Record<string, Record<string, string[]>>} file -> region name -> replacement lines
 */
function buildTargets() {
  return {
    'utils/fonts/createFluentFontIcon.shared.ts': {
      'font-file-enum': fontFileEnum(),
    },
    'utils/fonts/createFluentFontIcon.styles.ts': {
      'font-faces': griffelFontFaces(),
      'font-families': griffelFontFamilies(),
    },
    'headless/fonts/styles.css': {
      'font-faces': cssFontFaces('../../utils/fonts/'),
    },
    'headless/styles.css': {
      'font-families': cssFontFamilies(),
    },
    'headless/fonts/createFluentFontIcon.tsx': {
      'font-variants': headlessFontVariants(),
    },
  };
}

// =================================================================================================
// region contents
// =================================================================================================

/** `FontFile` enum — values are baked into the generated atoms, so the manifest pins them. */
function fontFileEnum() {
  return ['export const enum FontFile {', ...FONT_FAMILIES.map(({ key, value }) => `  ${key} = ${value},`), '}'];
}

/**
 * @param {string} key
 * @param {'woff2' | 'woff' | 'ttf'} ext
 */
function importName(key, ext) {
  const suffix = { woff2: 'Woff2', woff: 'Woff', ttf: 'Ttf' }[ext];
  return `font${key}${suffix}`;
}

/**
 * Font binary imports plus the `@font-face` CSS handed to `makeStaticStyles`.
 *
 * The template literal is kept inline in the call: Griffel's babel preset only drops the now
 * dead font imports when it can replace the whole call expression.
 *
 * Family names are emitted as literals on purpose — Griffel evaluates this file in a VM, and an
 * unresolvable lookup silently compiles to `font-family: undefined` rather than failing the build.
 */
function griffelFontFaces() {
  /** @type {string[]} */
  const imports = [];
  /** @type {string[]} */
  const fontFaces = [];

  for (const { key, family, file } of FONT_FAMILIES) {
    for (const ext of FONT_BINARY_EXTENSIONS) {
      imports.push(`import ${importName(key, ext)} from './${file}.${ext}';`);
    }
    imports.push('');

    const src = FONT_BINARY_EXTENSIONS.map(
      (ext) => `    url(\${JSON.stringify(${importName(key, ext)})}) format("${FONT_FORMAT_BY_EXTENSION[ext]}")`,
    ).join(',\n');
    fontFaces.push(
      '@font-face {',
      `    font-family: ${family};`,
      '    font-display: "block";',
      '    src:',
      `${src};`,
      '}',
    );
  }

  return [...imports, 'export const useStaticStyles = makeStaticStyles(`', ...fontFaces, '`);'];
}

/** Per-variant `makeStyles` entries — inlined into the `useRootStyles` object literal. */
function griffelFontFamilies() {
  return FONT_FAMILIES.flatMap(({ key, family }) => [`  [FontFile.${key}]: {`, `    fontFamily: '${family}',`, '  },']);
}

/**
 * Plain-CSS `@font-face` block, equivalent to the Griffel one.
 * @param {string} urlPrefix Path from the stylesheet to the font binaries.
 */
function cssFontFaces(urlPrefix) {
  /** @type {string[]} */
  const lines = [];

  for (const [index, { family, file }] of FONT_FAMILIES.entries()) {
    if (index > 0) lines.push('');
    const src = FONT_BINARY_EXTENSIONS.map(
      (ext) => `    url('${urlPrefix}${file}.${ext}') format('${FONT_FORMAT_BY_EXTENSION[ext]}')`,
    ).join(',\n');
    lines.push('@font-face {', `  font-family: '${family}';`, '  font-display: block;', '  src:', `${src};`, '}');
  }

  return lines;
}

/** Headless `data-fui-icon-font` → font-family rules. */
function cssFontFamilies() {
  return FONT_FAMILIES.flatMap(({ variant, family }) => [
    `[data-fui-icon-font='${variant}'] {`,
    `  font-family: '${family}';`,
    '}',
  ]);
}

/** Headless `FontFile` → `data-fui-icon-font` value map. */
function headlessFontVariants() {
  return [
    'const FONT_VARIANT_MAP: Record<FontFile, string> = {',
    ...FONT_FAMILIES.map(({ key, variant }) => `  [FontFile.${key}]: '${variant}',`),
    '};',
  ];
}

// =================================================================================================

/**
 * Replaces the content between the `#region <name>` / `#endregion <name>` markers, keeping the markers.
 *
 * @param {string} content
 * @param {string} name
 * @param {string[]} lines
 * @param {string} filePath Used for error messages only.
 */
function replaceRegion(content, name, lines, filePath) {
  const eol = content.includes('\r\n') ? '\r\n' : '\n';
  const all = content.split(/\r?\n/);
  const start = all.findIndex((line) => line.includes(`#region @generated ${name}`));
  const end = all.findIndex((line, index) => index > start && line.includes(`#endregion @generated ${name}`));

  if (start === -1 || end === -1) {
    throw new Error(`Missing or malformed \`#region @generated ${name}\` markers in ${filePath}`);
  }

  return [...all.slice(0, start + 1), ...lines, ...all.slice(end)].join(eol);
}

function printUsage() {
  console.log(
    `Usage: node generate-font-styles.js --dest <src dir> [--check]\n\n` +
      `Regenerates the \`#region @generated *\` blocks from scripts/font-families.js.\n\n` +
      `Options:\n` +
      `  --dest <dir>  Package source folder containing utils/ and headless/ (required)\n` +
      `  --check       Fail if any region is out of date instead of writing\n` +
      `  -h, --help    Show this help message`,
  );
}

module.exports = {
  buildTargets,
  fontFileEnum,
  griffelFontFaces,
  griffelFontFamilies,
  cssFontFaces,
  cssFontFamilies,
  headlessFontVariants,
  replaceRegion,
};
