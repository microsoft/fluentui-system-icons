#!/usr/bin/env node

// @ts-check

/**
 * Calculates the next prerelease version for release projects and writes it to GITHUB_OUTPUT.
 * Resolves project metadata via the @nx/devkit project graph and computes the next prerelease version
 * for each project. Version application (`nx release version`) is intentionally left to the caller
 * (i.e. the GHA step) so the command and its output are fully visible in CI logs.
 *
 * Usage: node calculate-prerelease-version.js --preid <preid> --projects <nx-names>
 *
 * Options:
 *   --preid: Prerelease identifier (e.g., alpha, beta, rc)
 *   --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)
 *
 * Outputs (via GITHUB_OUTPUT):
 *   version: The single calculated prerelease version (e.g. 2.0.1-alpha.0)
 *   summary: Newline-separated list of package@version entries
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');
const { createProjectGraphAsync } = require('@nx/devkit');

const { getNextPrereleaseVersion } = require('./get-next-prerelease-version');

main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

async function main() {
  const { preid, projectNames } = processArgs();
  const projects = await resolveProjectMetadata(projectNames);

  const summaryLines = [];
  /** @type {Set<string>} */
  const versions = new Set();

  for (const { npmName, packageJsonPath } of projects) {
    const version = await getNextPrereleaseVersion(npmName, packageJsonPath, preid);
    versions.add(version);

    summaryLines.push(`${npmName}@${version}`);
  }

  // Sorts by the integer after ${preid}. and picks the highest with .at(-1). For example, given 2.0.1-alpha.3 and 2.0.1-alpha.7, it would correctly resolve 2.0.1-alpha.7.
  const resolvedVersion = /** @type {string} */ (
    Array.from(versions)
      .sort((a, b) => {
        const aNum = Number(a.split(`${preid}.`)[1] ?? '0');
        const bNum = Number(b.split(`${preid}.`)[1] ?? '0');
        return aNum - bNum;
      })
      .at(-1)
  );

  if (versions.size > 1) {
    const warningMessage = [
      '',
      `⚠️ Multiple different versions for "prerelase: ${preid}" detected:`,
      '- This might happened because some package failed publish phase in previous release attempt',
      `- ${Array.from(versions).join(', ')}`,
      '',
      `⚠️ Using the highest version (${resolvedVersion}) for the release.`,
      '',
    ].join('\n');
    summaryLines.unshift(warningMessage);
  }

  writeOutputs(resolvedVersion, summaryLines);

  // createProjectGraphAsync may open a connection to the Nx daemon, keeping the
  // process alive indefinitely. Force-exit cleanly after all work is done.
  process.exit(0);
}

// ====================================

function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        preid: { type: 'string' },
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
    projectNames: options.projects.split(','),
  };
}

function printUsage() {
  console.error('Usage: node calculate-prerelease-version.js --preid <preid> --projects <nx-names>');
  console.error('');
  console.error('Options:');
  console.error('  --preid: Prerelease identifier (alpha, beta, rc)');
  console.error(
    '  --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)',
  );
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
 * Writes version and summary to GITHUB_OUTPUT, or prints them to stdout for local debugging.
 * @param {string} version
 * @param {string[]} summaryLines
 */
function writeOutputs(version, summaryLines) {
  const summary = summaryLines.join('\n');
  const outputFile = process.env.GITHUB_OUTPUT;

  if (outputFile) {
    fs.appendFileSync(outputFile, `version=${version}\n`);
    fs.appendFileSync(outputFile, `summary<<EOF\n${summary}\nEOF\n`);
  } else {
    // Local execution — print to stdout for debugging
    console.log(`\nversion: ${version}`);
    console.log(`\nsummary:\n${summary}`);
  }
}
