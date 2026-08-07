// @ts-check
import { describe, it } from 'vitest';
import { execFileSync } from 'node:child_process';
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

// End-to-end proof that the published `exports` map loads under bare Node, for the
// `import` and `require` conditions, in both the default (SVG) and `fluentIconFont`
// (font) resolutions. See verify-esm-exports.{mjs,cjs} for what "loaded" vs
// "resolve-only" means per entry.
describe('export map — real Node e2e loading', () => {
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
