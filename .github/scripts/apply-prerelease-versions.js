#!/usr/bin/env node

// @ts-check

/**
 * Calculates and applies prerelease versions for release projects.
 * Resolves project metadata via the @nx/devkit project graph, computes the next prerelease version
 * for each, optionally applies them via `nx release version`, and outputs a summary to GITHUB_OUTPUT.
 *
 * Usage: node apply-prerelease-versions.js --preid <preid> --projects <nx-names> [--dry-run]
 *
 * Options:
 *   --preid: Prerelease identifier (e.g., alpha, beta, rc)
 *   --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)
 *   --dry-run: Skip applying versions (default: false)
 *
 * Outputs (via GITHUB_OUTPUT):
 *   summary: Newline-separated list of package@version entries
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');
const { execSync } = require('child_process');
const { createProjectGraphAsync } = require('@nx/devkit');

const { getNextPrereleaseVersion } = require('./get-next-prerelease-version');

main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

async function main() {
  const { preid, dryRun, projectNames } = processArgs();
  const projects = await resolveProjectMetadata(projectNames);

  const summaryLines = [];

  for (const { npmName, packageJsonPath } of projects) {
    const version = await getNextPrereleaseVersion(npmName, packageJsonPath, preid);
    console.log(`📦 ${npmName} → ${version}`);
    summaryLines.push(`${npmName}@${version}`);

    if (!dryRun) {
      applyVersion(npmName, version);
    }
  }

  writeSummaryOutput(summaryLines);
}

// ====================================

function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        preid: { type: 'string' },
        projects: { type: 'string' },
        'dry-run': { type: 'boolean', default: false },
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

  if (!options.preid || !options.projects) {
    printUsage();
    process.exit(1);
  }

  const VALID_PREIDS = ['alpha', 'beta', 'rc'];
  if (!VALID_PREIDS.includes(options.preid)) {
    console.error(`❌ Invalid preid: "${options.preid}". Must be one of: ${VALID_PREIDS.join(', ')}`);
    process.exit(1);
  }

  return {
    preid: options.preid,
    dryRun: options['dry-run'] ?? false,
    projectNames: options.projects.split(','),
  };
}

function printUsage() {
  console.error('Usage: node apply-prerelease-versions.js --preid <preid> --projects <nx-names> [--dry-run]');
  console.error('');
  console.error('Options:');
  console.error('  --preid: Prerelease identifier (alpha, beta, rc)');
  console.error(
    '  --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)',
  );
  console.error('  --dry-run: Skip applying versions');
  console.error('  --help, -h: Show this help message');
}

/**
 * Resolves project metadata (npm name, package.json path) for given Nx project names
 * using the @nx/devkit project graph.
 *
 * @param {string[]} nxNames - Nx project names
 * @returns {Promise<{ nxName: string, npmName: string, packageJsonPath: string }[]>}
 */
async function resolveProjectMetadata(nxNames) {
  const graph = await createProjectGraphAsync();

  return nxNames.map((nxName) => {
    const node = graph.nodes[nxName];
    if (!node) {
      console.error(`❌ Unknown Nx project: ${nxName}`);
      process.exit(1);
    }
    const packageJsonPath = path.resolve(node.data.root, 'package.json');
    const { name: npmName } = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    return { nxName, npmName, packageJsonPath };
  });
}

/**
 * Applies the version to the project via nx release version.
 * @param {string} npmName
 * @param {string} version
 */
function applyVersion(npmName, version) {
  execSync(`npx nx release version "${version}" --projects="${npmName}" --verbose`, {
    encoding: 'utf8',
    stdio: 'inherit',
  });
}

/**
 * Writes the summary to GITHUB_OUTPUT or stdout.
 * @param {string[]} lines
 */
function writeSummaryOutput(lines) {
  const summary = lines.join('\n');
  const outputFile = process.env.GITHUB_OUTPUT;

  if (outputFile) {
    fs.appendFileSync(outputFile, `summary<<EOF\n${summary}\nEOF\n`);
  } else {
    // Local execution — print to stdout for debugging
    console.log(`\nsummary:\n${summary}`);
  }
}
