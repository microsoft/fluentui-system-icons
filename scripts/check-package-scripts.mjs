#!/usr/bin/env node

// @ts-check

/**
 * Guards the conventions that the yarn 4 migration relies on.
 *
 * Yarn does not put any `node_modules/.bin` directory on `PATH`. A workspace
 * script may only invoke a binary bare when the package providing it is one of
 * that workspace's own declared dependencies. Because this repo enforces a
 * single version policy (see docs/single-version-policy.md) every tool lives in
 * the root manifest, so workspace scripts must go through `yarn run -T <bin>`
 * (or declare the tool via a `catalog:` entry when it runs in a hot loop).
 *
 * Yarn also has no arbitrary `pre*`/`post*` script hooks, so those keys are
 * silently dead code outside the handful of names yarn does implement.
 *
 * Usage: node scripts/check-package-scripts.mjs [--verbose]
 *
 * Options:
 *   --verbose, -v: Print the resolved binaries and the tokens treated as executed programs
 *   --help, -h: Show this help message
 */

import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/** Script keys yarn actually implements as lifecycle hooks. */
const LIFECYCLE_SCRIPTS = new Set([
  'preinstall',
  'install',
  'postinstall',
  'prepublish',
  'prepublishOnly',
  'prepare',
  'prepack',
  'postpack',
  'preversion',
  'postversion',
]);

/** Commands that take the binary to run as their next argument. */
const COMMAND_RUNNERS = new Set(['-exec', '-execdir', 'xargs', 'exec']);

/**
 * Diagnostic logger. `processArgs` swaps in a real implementation when
 * `--verbose` is passed, so call sites never guard on the flag.
 *
 * @type {(...args: unknown[]) => void}
 */
let verbose = () => {};

main();

function main() {
  processArgs();

  const rootManifest = readManifest(repoRoot);
  if (!rootManifest) {
    throw new Error(`no package.json found at ${repoRoot}`);
  }

  const rootName = /** @type {string} */ (rootManifest.name);
  const rootBins = binsOf(rootManifest, repoRoot);
  const workspaceDirs = collectWorkspaceDirs(rootManifest);

  verbose(`repo root: ${repoRoot}`);
  verbose(`root binaries (${rootBins.size}): ${[...rootBins].sort().join(', ')}`);
  verbose('');

  const problems = workspaceDirs.flatMap((dir) => checkWorkspace(dir, rootBins, rootName));

  // The root workspace owns every tool, so bare invocations resolve there. Only
  // its lifecycle hook usage is worth checking.
  for (const name of Object.keys(/** @type {Record<string, string>} */ (rootManifest.scripts ?? {}))) {
    if (/^(?:pre|post)./.test(name) && !LIFECYCLE_SCRIPTS.has(name)) {
      problems.push(`package.json → scripts.${name}: yarn does not run arbitrary "pre"/"post" script hooks.`);
    }
  }

  if (problems.length > 0) {
    console.error(`Found ${problems.length} package script problem(s):\n`);
    for (const problem of problems) {
      console.error(`  ✖ ${problem}`);
    }
    console.error('\nSee docs/single-version-policy.md for the conventions these scripts must follow.');
    process.exit(1);
  }

  console.log(`✔ ${workspaceDirs.length} workspace manifests follow the package script conventions.`);
}

// ====================================

function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        verbose: { type: 'boolean', short: 'v' },
        help: { type: 'boolean', short: 'h' },
      },
    });
    options = values;
  } catch (error) {
    console.error('Error parsing arguments:', error instanceof Error ? error.message : String(error));
    printUsage();
    process.exit(1);
  }

  if (options.help) {
    printUsage();
    process.exit(0);
  }

  if (options.verbose) {
    verbose = (...args) => console.log(...args);
  }
}

function printUsage() {
  console.error('Usage: node scripts/check-package-scripts.mjs [--verbose]');
  console.error('');
  console.error('Verifies every workspace package.json follows the yarn 4 script conventions:');
  console.error('  - root owned binaries are invoked through "yarn run -T <bin>"');
  console.error('  - no "npx", no "npm run", no hardcoded "node_modules/.bin" paths');
  console.error('  - no arbitrary "pre"/"post" script hooks, which yarn never runs');
  console.error('');
  console.error('Options:');
  console.error('  --verbose, -v: Print the resolved binaries and the tokens treated as executed programs');
  console.error('  --help, -h: Show this help message');
}

/**
 * Every workspace directory declared by the root manifest that has a manifest of its own.
 *
 * @param {Record<string, unknown>} rootManifest
 * @returns {string[]}
 */
function collectWorkspaceDirs(rootManifest) {
  return /** @type {string[]} */ (rootManifest.workspaces ?? [])
    .flatMap((pattern) =>
      pattern.endsWith('/*')
        ? fs
            .readdirSync(path.join(repoRoot, pattern.slice(0, -2)), { withFileTypes: true })
            .filter((entry) => entry.isDirectory())
            .map((entry) => path.join(repoRoot, pattern.slice(0, -2), entry.name))
        : [path.join(repoRoot, pattern)],
    )
    .filter((dir) => fs.existsSync(path.join(dir, 'package.json')));
}

/**
 * @param {string} pkgDir
 * @returns {Record<string, unknown> | undefined}
 */
function readManifest(pkgDir) {
  const manifestPath = path.join(pkgDir, 'package.json');
  if (!fs.existsSync(manifestPath)) {
    return undefined;
  }
  return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
}

/**
 * Bin names exposed by a set of dependencies, resolved from the workspace's own
 * `node_modules` first and the hoisted root `node_modules` second.
 *
 * @param {Record<string, unknown>} manifest
 * @param {string} pkgDir
 * @returns {Set<string>}
 */
function binsOf(manifest, pkgDir) {
  const bins = new Set();
  const deps = Object.keys({
    .../** @type {Record<string, string>} */ (manifest.dependencies ?? {}),
    .../** @type {Record<string, string>} */ (manifest.devDependencies ?? {}),
    .../** @type {Record<string, string>} */ (manifest.optionalDependencies ?? {}),
  });

  for (const dep of deps) {
    const depManifest =
      readManifest(path.join(pkgDir, 'node_modules', dep)) ?? readManifest(path.join(repoRoot, 'node_modules', dep));

    if (!depManifest?.bin) {
      continue;
    }

    if (typeof depManifest.bin === 'string') {
      bins.add(dep.startsWith('@') ? dep.split('/')[1] : dep);
    } else {
      for (const binName of Object.keys(depManifest.bin)) {
        bins.add(binName);
      }
    }
  }

  return bins;
}

/**
 * Splits a script body into individual shell commands and yields the tokens
 * that are being executed as a program.
 *
 * @param {string} body
 * @returns {string[]}
 */
function executedTokens(body) {
  const executed = [];

  for (const rawSegment of body.split(/&&|\|\||;|\||\n/)) {
    // Leading `FOO=bar` environment assignments are not the program being run.
    const segment = rawSegment.trim().replace(/^(?:\w+=\S*\s+)+/, '');
    if (!segment) {
      continue;
    }

    const tokens = segment.split(/\s+/);
    executed.push(tokens[0]);

    for (let i = 0; i < tokens.length - 1; i++) {
      if (COMMAND_RUNNERS.has(tokens[i])) {
        executed.push(tokens[i + 1]);
      }
    }
  }

  return executed.map((token) => token.replace(/^['"]|['"]$/g, '')).filter(Boolean);
}

/**
 * @param {string} workspaceDir
 * @param {Set<string>} rootBins
 * @param {string} rootName
 * @returns {string[]}
 */
function checkWorkspace(workspaceDir, rootBins, rootName) {
  const manifest = readManifest(workspaceDir);
  const scripts = /** @type {Record<string, string> | undefined} */ (manifest?.scripts);
  if (!manifest || !scripts) {
    return [];
  }

  const relativeDir = path.relative(repoRoot, workspaceDir);
  const ownBins = binsOf(manifest, workspaceDir);
  const problems = [];

  verbose(`${path.join(relativeDir, 'package.json')} (own bins: ${[...ownBins].sort().join(', ') || 'none'})`);

  for (const [name, body] of Object.entries(scripts)) {
    const at = `${path.join(relativeDir, 'package.json')} → scripts.${name}`;

    if (/^(?:pre|post)./.test(name) && !LIFECYCLE_SCRIPTS.has(name)) {
      problems.push(
        `${at}: yarn does not run arbitrary "pre"/"post" script hooks, so this never executes. Inline it into the script it wrapped.`,
      );
    }

    if (/(?:^|\s)npx\s/.test(body)) {
      problems.push(`${at}: replace "npx <bin>" with "yarn run -T <bin>".`);
    }

    if (/(?:^|\s)npm\s+(?:run|ci|install|exec)\b/.test(body)) {
      problems.push(`${at}: replace the "npm" invocation with the equivalent "yarn" one.`);
    }

    if (/node_modules\/\.bin/.test(body)) {
      problems.push(`${at}: do not hardcode a "node_modules/.bin" path, use "yarn run -T <bin>".`);
    }

    // `yarn bin` resolves against the current workspace exactly like PATH does,
    // so a root owned binary has to be asked of the root workspace explicitly.
    for (const [, binName] of body.matchAll(/(?<!workspace\s\S{1,64}\s)\byarn\s+bin\s+([\w@/.-]+)/g)) {
      if (!ownBins.has(binName) && rootBins.has(binName)) {
        problems.push(
          `${at}: "yarn bin ${binName}" is scoped to this workspace and cannot see a root binary. Use "yarn workspace ${rootName} bin ${binName}".`,
        );
      }
    }

    const executed = executedTokens(body);

    verbose(`  scripts.${name} → ${executed.join(', ') || '(nothing executable)'}`);

    for (const token of executed) {
      if (!ownBins.has(token) && rootBins.has(token)) {
        problems.push(
          `${at}: "${token}" is provided by a root dependency and is not on PATH here. Use "yarn run -T ${token}", or declare it here with "${token}": "catalog:" when it runs in a loop.`,
        );
      }
    }
  }

  return problems;
}
