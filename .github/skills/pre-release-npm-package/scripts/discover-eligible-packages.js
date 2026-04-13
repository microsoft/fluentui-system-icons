// @ts-check

/**
 * Discovers eligible private packages for pre-release publishing.
 *
 * Scans all packages in the `packages/` directory and filters to those that:
 * 1. Have a `package.json` with `"private": true`
 * 2. Have a `project.json` with `"projectType"` that is NOT `"application"`
 *
 * Outputs a JSON array of eligible packages to stdout.
 *
 * Usage:
 *   node .github/skills/pre-release-npm-package/scripts/discover-eligible-packages.js
 */

const fs = require('node:fs');
const path = require('node:path');

const packagesDir = path.resolve(__dirname, '..', '..', '..', '..', 'packages');
const eligible = [];

for (const dir of fs.readdirSync(packagesDir, { withFileTypes: true })) {
  if (!dir.isDirectory()) continue;

  const pkgJsonPath = path.join(packagesDir, dir.name, 'package.json');
  const projJsonPath = path.join(packagesDir, dir.name, 'project.json');

  if (!fs.existsSync(pkgJsonPath) || !fs.existsSync(projJsonPath)) continue;

  const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'));
  const proj = JSON.parse(fs.readFileSync(projJsonPath, 'utf8'));

  if (pkg.private === true && proj.projectType && proj.projectType !== 'application') {
    eligible.push({
      dirName: dir.name,
      npmName: pkg.name,
      projectType: proj.projectType,
    });
  }
}

if (eligible.length === 0) {
  console.log('No eligible private packages found.');
  process.exit(0);
}

console.log(JSON.stringify(eligible, null, 2));
