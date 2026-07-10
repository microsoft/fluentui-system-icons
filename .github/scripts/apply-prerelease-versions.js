#!/usr/bin/env node

// @ts-check

/**
 * Applies the per-project prerelease versions computed by calculate-prerelease-version.js by writing
 * each project's `package.json` `version` field.
 *
 * Cross-package dependency references are intentionally NOT rewritten: only already-published public
 * packages are pre-released, so any repo dependency of a pre-released package is already resolvable on
 * npm. Each package is versioned independently.
 *
 * Usage: node apply-prerelease-versions.js --in <file> [--dry-run=true|false]
 *
 * Options:
 *   --in: Path to the versions JSON produced by calculate-prerelease-version.js (required)
 *   --dry-run=true|false: Log intended changes without writing any package.json files (default: false)
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');

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

  /** @type {{ project: { nxName: string, npmName: string, version: string }, changes: Change[] }[]} */
  const results = data.projects.map((project) => ({
    project,
    changes: applyToProject(project, dryRun),
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

  if (!options.in) {
    printUsage();
    process.exit(1);
  }

  return {
    inFile: options.in,
    // Accept `--dry-run=true|false`, matching `nx release` ergonomics. Any value other than
    // "false" (including omitting the value) is treated as true; omitting the flag entirely is false.
    dryRun: options['dry-run'] === undefined ? false : String(options['dry-run']).toLowerCase() !== 'false',
  };
}

function printUsage() {
  console.error('Usage: node apply-prerelease-versions.js --in <file> [--dry-run=true|false]');
  console.error('');
  console.error('Options:');
  console.error('  --in: Path to the versions JSON (required)');
  console.error('  --dry-run=true|false: Log intended changes without writing any package.json files (default: false)');
  console.error('  --help, -h: Show this help message');
}

/**
 * Computes (and, unless dry-run, writes) the version change for a project.
 *
 * @param {{ nxName: string, npmName: string, packageJsonPath: string, version: string }} project
 * @param {boolean} dryRun
 * @returns {Change[]} the list of changes for this project
 */
function applyToProject(project, dryRun) {
  const pkgPath = path.resolve(project.packageJsonPath);
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  /** @type {Change[]} */
  const changes = [];

  if (pkg.version !== project.version) {
    changes.push({ field: 'version', from: pkg.version, to: project.version });
    pkg.version = project.version;
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
