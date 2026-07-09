#!/usr/bin/env node

// @ts-check

/**
 * Calculates the next prerelease version for each release project independently and writes the
 * result to a JSON file (consumed by apply-prerelease-versions.js) plus a human-readable summary.
 * Resolves project metadata via the @nx/devkit project graph and computes the next prerelease version
 * for each project from the npm registry. Version application is intentionally left to a separate
 * step so the computed values are fully visible in CI logs.
 *
 * Versions are computed PER PROJECT (independent). This is required because a scoped pre-release may
 * span packages on different version lines (e.g. react-icons @ 2.0.x and react-icons-file-type @ 0.0.x);
 * collapsing them to a single shared version would corrupt one of the lines.
 *
 * Usage: node calculate-prerelease-version.js --preid <preid> --projects <nx-names> [--out <file>]
 *
 * Options:
 *   --preid: Prerelease identifier (e.g., alpha, beta, rc)
 *   --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)
 *   --out: Path to write the per-project versions JSON (default: prerelease-versions.json)
 *
 * Outputs:
 *   <out> file: { preid, projects: [{ nxName, npmName, packageJsonPath, version }] }
 *   GITHUB_OUTPUT: summary (newline-separated package@version entries)
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');
const { createProjectGraphAsync } = require('@nx/devkit');

const { getNextPrereleaseVersion } = require('./get-next-prerelease-version');

// Entry point: compute per-project prerelease versions and write them to disk.
main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

async function main() {
  const { preid, projectNames, outFile } = processArgs();
  const projects = await resolveProjectMetadata(projectNames);

  /** @type {{ nxName: string, npmName: string, packageJsonPath: string, version: string }[]} */
  const perPackageVersions = [];

  for (const { nxName, npmName, packageJsonPath } of projects) {
    const version = await getNextPrereleaseVersion(npmName, packageJsonPath, preid);
    perPackageVersions.push({ nxName, npmName, packageJsonPath, version });
  }

  const summaryLines = perPackageVersions.map(({ npmName, version }) => `${npmName}@${version}`);

  writeVersionsFile(outFile, { preid, projects: perPackageVersions });
  writeOutputs(summaryLines);

  // createProjectGraphAsync may open a connection to the Nx daemon, keeping the
  // process alive indefinitely. Force-exit cleanly after all work is done.
  process.exit(0);
}

// ====================================

/**
 * Parses and validates CLI arguments.
 * Exits the process with a non-zero code when required arguments are missing or invalid.
 *
 * @returns {{ preid: string, projectNames: string[], outFile: string }}
 */
function processArgs() {
  let options;
  try {
    const { values } = parseArgs({
      options: {
        preid: { type: 'string' },
        projects: { type: 'string' },
        out: { type: 'string' },
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
    projectNames: options.projects
      .split(/[,\s]+/)
      .map((s) => s.trim())
      .filter(Boolean),
    outFile: options.out || 'prerelease-versions.json',
  };
}

function printUsage() {
  console.error('Usage: node calculate-prerelease-version.js --preid <preid> --projects <nx-names> [--out <file>]');
  console.error('');
  console.error('Options:');
  console.error('  --preid: Prerelease identifier (alpha, beta, rc)');
  console.error(
    '  --projects: Comma-separated Nx project names (e.g., react-icons,react-icons-font-subsetting-webpack-plugin)',
  );
  console.error('  --out: Path to write the per-project versions JSON (default: prerelease-versions.json)');
  console.error('  --help, -h: Show this help message');
}

/**
 * Resolves project metadata (npm package name, absolute package.json path) for the given Nx
 * project names by looking them up in the @nx/devkit project graph.
 *
 * @param {string[]} nxProjectNames - Nx project names (as defined in the workspace)
 * @returns {Promise<{ nxName: string, npmName: string, packageJsonPath: string }[]>}
 *   Array of resolved metadata objects — one per requested project.
 */
async function resolveProjectMetadata(nxProjectNames) {
  const graph = await createProjectGraphAsync();

  return nxProjectNames.map((nxName) => {
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
 * Writes the per-project versions to a JSON file consumed by apply-prerelease-versions.js.
 *
 * @param {string} outFile - Path to write the JSON file to
 * @param {{ preid: string, projects: { nxName: string, npmName: string, packageJsonPath: string, version: string }[] }} data
 */
function writeVersionsFile(outFile, data) {
  const resolvedPath = path.resolve(outFile);
  fs.writeFileSync(resolvedPath, `${JSON.stringify(data, null, 2)}\n`);
  console.error(`✅ Wrote per-project versions to ${resolvedPath}`);
}

/**
 * Writes a human-readable summary to GITHUB_OUTPUT so downstream GHA steps can consume it via
 * `${{ steps.<id>.outputs.summary }}`. Falls back to stdout when `GITHUB_OUTPUT` is not set
 * (i.e. local execution).
 *
 * Output format:
 *   summary<<EOF                (multiline using heredoc syntax)
 *   <package>@<version>\n...
 *   EOF
 *
 * @param {string[]} summaryLines - Human-readable per-package version lines
 */
function writeOutputs(summaryLines) {
  const summary = summaryLines.join('\n');
  const outputFile = process.env.GITHUB_OUTPUT;

  if (outputFile) {
    fs.appendFileSync(outputFile, `summary<<EOF\n${summary}\nEOF\n`);
  } else {
    // Local execution — print to stdout for debugging
    console.log(`\nsummary:\n${summary}`);
  }
}
