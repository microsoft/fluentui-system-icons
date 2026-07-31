// @ts-check
import { describe, it } from 'vitest';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Runs a verifier script in a **real, separate Node process** so the check exercises
 * Node's native module resolver against the built output — not vitest's transform/
 * resolver. A non-zero exit throws and fails the test.
 * @param {string[]} args
 */
function runNode(args) {
  execFileSync(process.execPath, args, { cwd: __dirname, stdio: 'inherit' });
}

// These checks only apply to the native ESM-first output (`build --enable-native-esm`).
// In the default dual build the package has no `"type": "module"`, so Node parses
// `lib/index.js` as CommonJS and a bare-Node `import` of the package legitimately
// fails — that is the very limitation ESM-first packaging removes, not a regression.
const pkg = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
const isNativeEsmBuild = pkg.type === 'module';
const describeNativeEsm = isNativeEsmBuild ? describe : describe.skip;

// End-to-end proof that the published `exports` map loads under bare Node, for the
// `import` and `require` conditions, in both the default (SVG) and `fluentIconFont`
// (font) resolutions. See verify-esm-exports.{mjs,cjs} for what "loaded" vs
// "resolve-only" means per entry.
describeNativeEsm('export map — real Node e2e loading', () => {
  it('ESM `import` condition (bare Node)', () => {
    runNode(['verify-esm-exports.mjs']);
  });

  it('ESM `import` condition under `fluentIconFont`', () => {
    runNode(['--conditions=fluentIconFont', 'verify-esm-exports.mjs', '--font']);
  });

  it('CJS `require` condition (bare Node)', () => {
    runNode(['verify-esm-exports.cjs']);
  });

  it('CJS `require` condition under `fluentIconFont`', () => {
    runNode(['--conditions=fluentIconFont', 'verify-esm-exports.cjs', '--font']);
  });
});
