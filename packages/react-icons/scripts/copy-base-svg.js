// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

// Populates ./intermediate from the optimized SVG assets published by
// @fluentui/svg-icons (the canonical optimized-SVG base), instead of
// re-running generate/optimize/unfill against ../../assets.
//
// @fluentui/svg-icons strips the `ic_fluent_` filename prefix as its public
// contract. The react-icons font pipeline matches codepoints by filename
// (keys in fonts/FluentSystemIcons-*.json are `ic_fluent_`-prefixed), so this
// script re-adds the prefix while copying. convert.js strips it again, so the
// SVG-component path is unaffected. Locale subfolders are preserved verbatim.

const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');

const PREFIX = 'ic_fluent_';

if (require.main === module) {
  try {
    main();
  } catch (err) {
    console.error('[copy-base-svg] failed:', err);
    process.exit(1);
  }
}

function main() {
  const {
    values: { source, dest },
  } = parseArgs({
    options: {
      source: { type: 'string' },
      dest: { type: 'string' },
    },
  });

  if (!source) throw new Error('Base SVG source folder not specified by --source');
  if (!dest) throw new Error('Output destination folder not specified by --dest');

  const sourceDir = path.resolve(source);
  const destDir = path.resolve(dest);

  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Base SVG source folder not found: ${sourceDir}. Did you build @fluentui/svg-icons first?`);
  }

  // Reset destination so stale files never linger.
  fs.rmSync(destDir, { recursive: true, force: true });
  fs.mkdirSync(destDir, { recursive: true });

  const copied = copyDir(sourceDir, destDir);

  console.log(`[copy-base-svg] Copied ${copied} SVG file(s) from ${sourceDir} -> ${destDir}`);
}

/**
 * Recursively copy *.svg files, re-adding the `ic_fluent_` prefix to each
 * filename and preserving the relative directory structure.
 * @param {string} srcDir
 * @param {string} outDir
 * @returns {number} number of SVG files copied
 */
function copyDir(srcDir, outDir) {
  let copied = 0;
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    if (entry.isDirectory()) {
      copied += copyDir(srcPath, path.join(outDir, entry.name));
      continue;
    }
    if (!entry.name.endsWith('.svg')) continue;

    const fileName = entry.name.startsWith(PREFIX) ? entry.name : PREFIX + entry.name;
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
    fs.copyFileSync(srcPath, path.join(outDir, fileName));
    copied++;
  }
  return copied;
}
