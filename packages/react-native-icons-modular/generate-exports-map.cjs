// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Generates the "exports" field in package.json with per-icon subpath entries.
//
// Usage:
//   node generate-exports-map.cjs            Populate exports from lib/{icons,sizedIcons}/*.js
//   node generate-exports-map.cjs --restore  Reset exports to the minimal committed form (root + utils only)
//
// Resizable and sized icons share a flat namespace (matches @fluentui/react-icons web package).
//
// This script mutates package.json. The committed form contains only the minimal
// exports (root + utils). The full per-icon map is generated on demand by `prepack`
// and reverted by `postpack` so the working tree stays clean.

const fs = require('fs');
const path = require('path');

const pkgPath = path.join(__dirname, 'package.json');
const restore = process.argv.includes('--restore');

const minimalExports = {
  '.': {
    types: './lib/index.d.ts',
    import: './lib/index.js',
    default: './lib/index.js',
  },
  './utils/*': {
    types: './lib/utils/*.d.ts',
    import: './lib/utils/*.js',
    default: './lib/utils/*.js',
  },
};

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

if (restore) {
  pkg.exports = minimalExports;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('Restored package.json exports to minimal (root + utils only)');
  process.exit(0);
}

const exportsMap = { ...minimalExports };

// Resizable icons
const iconsDir = path.join(__dirname, 'lib', 'icons');
if (fs.existsSync(iconsDir)) {
  const iconFiles = fs.readdirSync(iconsDir)
    .filter(f => f.endsWith('.js') && !f.endsWith('.js.map'))
    .sort();
  for (const file of iconFiles) {
    const name = file.replace('.js', '');
    exportsMap[`./${name}`] = {
      types: `./lib/icons/${name}.d.ts`,
      import: `./lib/icons/${name}.js`,
      default: `./lib/icons/${name}.js`,
    };
  }
  console.log(`Added ${iconFiles.length} resizable icon exports`);
}

// Sized icons (flat namespace)
const sizedDir = path.join(__dirname, 'lib', 'sizedIcons');
if (fs.existsSync(sizedDir)) {
  const sizedFiles = fs.readdirSync(sizedDir)
    .filter(f => f.endsWith('.js') && !f.endsWith('.js.map'))
    .sort();
  for (const file of sizedFiles) {
    const name = file.replace('.js', '');
    const key = `./${name}`;
    if (exportsMap[key]) {
      throw new Error(`Export collision: '${key}' exists in both lib/icons and lib/sizedIcons`);
    }
    exportsMap[key] = {
      types: `./lib/sizedIcons/${name}.d.ts`,
      import: `./lib/sizedIcons/${name}.js`,
      default: `./lib/sizedIcons/${name}.js`,
    };
  }
  console.log(`Added ${sizedFiles.length} sized icon exports`);
}

pkg.exports = exportsMap;
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
console.log(`Updated package.json with ${Object.keys(exportsMap).length} total export entries`);
