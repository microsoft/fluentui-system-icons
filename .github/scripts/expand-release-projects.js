#!/usr/bin/env node

// @ts-check

/**
 * Expands a set of selected Nx projects with their transitive, publishable
 * workspace dependencies so a scoped pre-release publishes a self-consistent
 * closure — i.e. a published package never references an unpublished workspace
 * version.
 *
 * "Publishable" means the dependency's project has a package.json without
 * `"private": true`. Only *runtime* dependency collections are followed
 * (`dependencies`, `peerDependencies`, `optionalDependencies`); `devDependencies`
 * are intentionally ignored because their ranges are preserved by nx release
 * (see nx.json `preserveMatchingDependencyRanges: ["devDependencies"]`) and are
 * not part of the published runtime closure.
 *
 * Usage: node expand-release-projects.js --projects <comma/space separated nx names>
 *
 * Outputs:
 *   - stdout: final comma-separated list of Nx project names (selected + auto-added deps)
 *   - stderr: human-readable log, including any warnings
 *   - GITHUB_STEP_SUMMARY (if set): markdown summary of the resolved set and auto-added deps
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');
const { createProjectGraphAsync } = require('@nx/devkit');

const RUNTIME_DEP_COLLECTIONS = ['dependencies', 'peerDependencies', 'optionalDependencies'];

main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

async function main() {
  const selected = processArgs();
  const graph = await createProjectGraphAsync();

  /**
   * @typedef {{ nxName: string, root: string, packageJsonPath: string, npmName: string, isPrivate: boolean, pkg: any }} ProjectMeta
   */

  /** @type {Map<string, ProjectMeta>} - Nx project name -> metadata (only nodes with a readable package.json) */
  const byNxName = new Map();
  /** @type {Map<string, string>} - npm package name -> Nx project name */
  const npmNameToNx = new Map();

  for (const [nxName, node] of Object.entries(graph.nodes)) {
    const packageJsonPath = path.join(node.data.root, 'package.json');
    let pkg;
    try {
      pkg = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    } catch {
      continue; // projects without a package.json are not publishable npm packages
    }
    if (!pkg.name) continue;
    const meta = {
      nxName,
      root: node.data.root,
      packageJsonPath,
      npmName: pkg.name,
      isPrivate: pkg.private === true,
      pkg,
    };
    byNxName.set(nxName, meta);
    npmNameToNx.set(pkg.name, nxName);
  }

  // Validate the incoming selection.
  for (const name of selected) {
    if (!graph.nodes[name]) {
      console.error(`❌ Unknown Nx project: ${name}`);
      process.exit(1);
    }
  }

  /** @type {Set<string>} */
  const resolved = new Set(selected);
  /** @type {Set<string>} */
  const added = new Set();
  /** @type {string[]} */
  const warnings = [];

  const queue = [...selected];
  while (queue.length > 0) {
    const current = /** @type {string} */ (queue.shift());
    const meta = byNxName.get(current);
    if (!meta) continue;

    for (const collection of RUNTIME_DEP_COLLECTIONS) {
      const deps = meta.pkg[collection];
      if (!deps || typeof deps !== 'object') continue;

      for (const depNpmName of Object.keys(deps)) {
        const depNxName = npmNameToNx.get(depNpmName);
        if (!depNxName || depNxName === current) continue; // external npm dep or self-reference

        if (resolved.has(depNxName)) continue;

        const depMeta = byNxName.get(depNxName);
        if (depMeta && depMeta.isPrivate) {
          warnings.push(
            `"${meta.npmName}" has a runtime dependency on private workspace package "${depNpmName}" ` +
              `(${depNxName}), which cannot be pre-released. The published package may be broken until ` +
              `"${depNpmName}" is made publishable (remove "private": true) and included.`,
          );
          continue;
        }

        resolved.add(depNxName);
        added.add(depNxName);
        queue.push(depNxName);
      }
    }
  }

  const finalList = Array.from(resolved).sort();
  const addedList = Array.from(added).sort();

  logResults(selected, addedList, warnings);
  writeStepSummary(finalList, addedList, warnings, byNxName);

  // stdout must contain ONLY the comma-separated list so it can be captured directly.
  process.stdout.write(finalList.join(','));

  // createProjectGraphAsync may keep the Nx daemon connection open; force a clean exit.
  process.exit(0);
}

// ====================================

/**
 * @returns {string[]} the selected Nx project names
 */
function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        projects: { type: 'string' },
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

  if (!options.projects) {
    printUsage();
    process.exit(1);
  }

  const selected = options.projects
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);

  if (selected.length === 0) {
    console.error('❌ No projects provided.');
    process.exit(1);
  }

  return selected;
}

function printUsage() {
  console.error('Usage: node expand-release-projects.js --projects <comma/space separated nx names>');
  console.error('');
  console.error('Options:');
  console.error(
    '  --projects: Comma/space delimited Nx project names to expand (e.g. react-icons,react-icons-file-type)',
  );
  console.error('  --help, -h: Show this help message');
}

/**
 * @param {string[]} selected
 * @param {string[]} addedList
 * @param {string[]} warnings
 */
function logResults(selected, addedList, warnings) {
  console.error(`📋 Selected projects: ${selected.sort().join(', ')}`);
  if (addedList.length > 0) {
    console.error(`➕ Auto-included publishable dependencies: ${addedList.join(', ')}`);
  } else {
    console.error('➕ No additional workspace dependencies needed.');
  }
  for (const warning of warnings) {
    console.error(`⚠️  ${warning}`);
  }
}

/**
 * @param {string[]} finalList
 * @param {string[]} addedList
 * @param {string[]} warnings
 * @param {Map<string, { npmName: string }>} byNxName
 */
function writeStepSummary(finalList, addedList, warnings, byNxName) {
  const summaryFile = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryFile) return;

  const lines = [];
  lines.push('### 🎯 Resolved pre-release projects', '');
  for (const nxName of finalList) {
    const npmName = byNxName.get(nxName)?.npmName ?? nxName;
    const suffix = addedList.includes(nxName) ? ' _(auto-included dependency)_' : '';
    lines.push(`- \`${npmName}\` (${nxName})${suffix}`);
  }
  if (addedList.length > 0) {
    lines.push(
      '',
      `> ℹ️ ${addedList.length} workspace ${addedList.length === 1 ? 'dependency was' : 'dependencies were'} ` +
        'automatically included so the published packages reference published versions.',
    );
  }
  if (warnings.length > 0) {
    lines.push('', '#### ⚠️ Warnings');
    for (const warning of warnings) {
      lines.push(`- ${warning}`);
    }
  }
  lines.push('');
  fs.appendFileSync(summaryFile, lines.join('\n'));
}
