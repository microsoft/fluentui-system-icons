// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Populates ./src/utils/fonts from the canonical font binaries committed in the
// repo-root `fonts/` folder (the single source of truth, regenerated at release
// time by `importer`'s `deploy:fonts`). Instead of re-running fantasticon four
// times during every react-icons build, we simply copy the already-generated
// font families and their glyph-named codepoint maps.
//
// Copied per family (Regular / Filled / Light / Resizable):
//   - {ttf,woff,woff2}  -> imported by createFluentFontIcon.styles.ts (@font-face)
//   - .json (glyph-named) -> read by convert-font.js, which then overwrites it
//                            in place with the React-named codepoint map.
//
// The generated `.css` / `.html` fantasticon byproducts are intentionally NOT
// copied: nothing in the react-icons build consumes them.

const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');

const FONT_TYPES = ['Regular', 'Filled', 'Light', 'Resizable'];
const BINARY_EXTENSIONS = ['ttf', 'woff', 'woff2'];

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('[copy-base-fonts] failed:', err);
    process.exit(1);
  }
}

function main() {
  const {
    values: { source, dest, help },
  } = parseArgs({
    options: {
      source: { type: 'string' },
      dest: { type: 'string' },
      help: { type: 'boolean', short: 'h' },
    },
  });

  if (help) {
    printUsage();
    return;
  }

  if (!source) throw new Error('Font source folder not specified by --source');
  if (!dest) throw new Error('Output destination folder not specified by --dest');

  const sourceDir = path.resolve(source);
  const destDir = path.resolve(dest);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Font source folder not found: ${sourceDir}. The repo-root fonts/ folder is the source of truth.`);
  }

  fs.mkdirSync(destDir, { recursive: true });

  let copied = 0;
  for (const type of FONT_TYPES) {
    const baseName = `FluentSystemIcons-${type}`;
    for (const ext of [...BINARY_EXTENSIONS, 'json']) {
      const fileName = `${baseName}.${ext}`;
      const srcPath = path.join(sourceDir, fileName);
      if (!fs.existsSync(srcPath)) {
        throw new Error(`Expected font file missing in source: ${srcPath}`);
      }
      fs.copyFileSync(srcPath, path.join(destDir, fileName));
      copied++;
    }
  }

  console.log(`[copy-base-fonts] Copied ${copied} font file(s) from ${sourceDir} -> ${destDir}`);
}

function printUsage() {
  console.log(
    `Usage: node copy-base-fonts.js --source <dir> --dest <dir>\n\n` +
      `Copies the canonical font binaries and glyph-named codepoint maps from the\n` +
      `repo-root fonts/ folder into the react-icons build, avoiding a redundant\n` +
      `fantasticon run.\n\n` +
      `Options:\n` +
      `  --source <dir>  Source folder containing FluentSystemIcons-*.{ttf,woff,woff2,json} (required)\n` +
      `  --dest <dir>    Destination folder to copy the font files into (required)\n` +
      `  -h, --help      Show this help message`,
  );
}
