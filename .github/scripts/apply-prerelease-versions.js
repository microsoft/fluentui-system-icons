#!/usr/bin/env node

// @ts-check

/**
 * Applies the per-project prerelease versions computed by calculate-prerelease-version.js and
 * synchronizes cross-package runtime dependency references so a published package never points at
 * an unpublished workspace version.
 *
 * For every project in the batch:
 *   1. Its package.json `version` is set to the computed prerelease version.
 *   2. Any `dependencies` / `peerDependencies` / `optionalDependencies` entry that targets ANOTHER
 *      in-batch workspace package is rewritten to that package's new (exact) prerelease version.
 *      `devDependencies` are intentionally left untouched — their ranges are preserved by nx release
 *      (nx.json `preserveMatchingDependencyRanges: ["devDependencies"]`) and are not part of the
 *      published runtime closure.
 *
 * Doing this in a single deterministic pass (instead of per-project `nx release version` calls)
 * avoids Nx's "one specifier per invocation" limitation while still producing the same cross-reference
 * rewrites Nx performs when a dependency and dependent are versioned together.
 *
 * Usage: node apply-prerelease-versions.js [--in <file>] [--dry-run]
 *
 * Options:
 *   --in: Path to the versions JSON produced by calculate-prerelease-version.js (default: tmp/prerelease-versions.json)
 *   --dry-run: Log intended changes without writing any package.json files
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');

const RUNTIME_DEP_COLLECTIONS = ['dependencies', 'peerDependencies', 'optionalDependencies'];

main();

function main() {
  const { inFile, dryRun } = processArgs();

  const resolvedInPath = path.resolve(inFile);
  if (!fs.existsSync(resolvedInPath)) {
    console.error(`❌ Versions file not found: ${resolvedInPath}`);
    process.exit(1);
  }

  /** @type {{ preid: string, projects: { nxName: string, npmName: string, packageJsonPath: string, version: string }[] }} */
  const data = JSON.parse(fs.readFileSync(resolvedInPath, 'utf8'));

  if (!Array.isArray(data.projects) || data.projects.length === 0) {
    console.error(`❌ No projects found in ${resolvedInPath}`);
    process.exit(1);
  }

  // npm package name -> new prerelease version, for every package in this batch.
  /** @type {Map<string, string>} */
  const inBatchVersions = new Map(data.projects.map((p) => [p.npmName, p.version]));

  /** @type {{ project: { nxName: string, npmName: string, version: string }, changes: Change[] }[]} */
  const results = data.projects.map((project) => ({
    project,
    changes: applyToProject(project, inBatchVersions, dryRun),
  }));

  printPlan(results, dryRun);
  writeStepSummary(results, dryRun);
}

// ====================================

/**
 * @typedef {{ field: string, from: string, to: string }} Change
 */

/**
 * @returns {{ inFile: string, dryRun: boolean }}
 */
function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        in: { type: 'string' },
        'dry-run': { type: 'string' },
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

  return {
    inFile: options.in || 'tmp/prerelease-versions.json',
    // Accept `--dry-run=true|false`, matching `nx release` ergonomics. Any value other than
    // "false" (including omitting the value) is treated as true; omitting the flag entirely is false.
    dryRun: options['dry-run'] === undefined ? false : String(options['dry-run']).toLowerCase() !== 'false',
  };
}

function printUsage() {
  console.error('Usage: node apply-prerelease-versions.js [--in <file>] [--dry-run=true|false]');
  console.error('');
  console.error('Options:');
  console.error('  --in: Path to the versions JSON (default: tmp/prerelease-versions.json)');
  console.error('  --dry-run=true|false: Log intended changes without writing any package.json files (default: false)');
  console.error('  --help, -h: Show this help message');
}

/**
 * Computes (and, unless dry-run, writes) the version + runtime dependency changes for a project.
 *
 * @param {{ nxName: string, npmName: string, packageJsonPath: string, version: string }} project
 * @param {Map<string, string>} inBatchVersions - npm name -> new prerelease version
 * @param {boolean} dryRun
 * @returns {Change[]} the list of changes for this project
 */
function applyToProject(project, inBatchVersions, dryRun) {
  const pkgPath = path.resolve(project.packageJsonPath);
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  /** @type {Change[]} */
  const changes = [];

  // 1. Set the package's own version.
  if (pkg.version !== project.version) {
    changes.push({ field: 'version', from: pkg.version, to: project.version });
    pkg.version = project.version;
  }

  // 2. Rewrite runtime dependency references to in-batch packages (exact prerelease versions).
  for (const collection of RUNTIME_DEP_COLLECTIONS) {
    const deps = pkg[collection];
    if (!deps || typeof deps !== 'object') continue;

    for (const depName of Object.keys(deps)) {
      if (depName === project.npmName) continue; // never self-reference
      const newVersion = inBatchVersions.get(depName);
      if (!newVersion) continue; // external dep or not part of this batch

      if (deps[depName] !== newVersion) {
        changes.push({ field: `${collection}.${depName}`, from: deps[depName], to: newVersion });
        deps[depName] = newVersion;
      }
    }
  }

  if (!dryRun && changes.length > 0) {
    fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
  }

  return changes;
}

/**
 * Prints the version plan to stdout, using GitHub Actions log grouping when available.
 *
 * @param {{ project: { nxName: string, npmName: string }, changes: Change[] }[]} results
 * @param {boolean} dryRun
 */
function printPlan(results, dryRun) {
  const title = dryRun ? '🧪 Prerelease version plan (dry run — no files written)' : '🔖 Applying prerelease versions';

  const isGha = Boolean(process.env.GITHUB_ACTIONS);
  console.log(isGha ? `::group::${title}` : `\n${title}`);

  for (const { project, changes } of results) {
    if (changes.length === 0) {
      console.log(`• ${project.npmName} (${project.nxName}): no changes`);
      continue;
    }
    console.log(`• ${project.npmName} (${project.nxName}):`);
    for (const change of changes) {
      console.log(`    - ${change.field}: ${change.from} → ${change.to}`);
    }
  }

  if (isGha) console.log('::endgroup::');

  const total = results.reduce((sum, r) => sum + r.changes.length, 0);
  console.log(dryRun ? `🧪 Dry run complete — ${total} change(s) would be applied.` : `✅ Applied ${total} change(s).`);
}

/**
 * Appends a markdown table of the version plan to GITHUB_STEP_SUMMARY when available, so the changes
 * are visible in the workflow run summary (in both dry-run and real runs).
 *
 * @param {{ project: { nxName: string, npmName: string }, changes: Change[] }[]} results
 * @param {boolean} dryRun
 */
function writeStepSummary(results, dryRun) {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryFile) return;

  const lines = [];
  lines.push(dryRun ? '### 🧪 Prerelease version plan (dry run)' : '### 🔖 Applied prerelease versions', '');

  const hasChanges = results.some((r) => r.changes.length > 0);
  if (!hasChanges) {
    lines.push('_No version or dependency changes were required._', '');
    fs.appendFileSync(summaryFile, lines.join('\n'));
    return;
  }

  lines.push('| Package | Field | From | To |', '| --- | --- | --- | --- |');
  for (const { project, changes } of results) {
    for (const change of changes) {
      lines.push(`| \`${project.npmName}\` | \`${change.field}\` | \`${change.from}\` | \`${change.to}\` |`);
    }
  }
  if (dryRun) {
    lines.push('', '> 🧪 Dry run — no `package.json` files were written.');
  }
  lines.push('');
  fs.appendFileSync(summaryFile, lines.join('\n'));
}
