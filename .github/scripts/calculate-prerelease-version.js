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

  /** @type {{ npmName: string, nextNpmVersion: string }[]} */
  const perPackageVersions = [];
  /** @type {Set<string>} - Collects distinct versions computed per project; ideally one, but may differ when a prior publish partially succeeded. */
  const uniqueNextNpmVersions = new Set();

  for (const { npmName, packageJsonPath } of projects) {
    const nextNpmVersion = await getNextPrereleaseVersion(npmName, packageJsonPath, preid);
    uniqueNextNpmVersions.add(nextNpmVersion);
    perPackageVersions.push({ npmName, nextNpmVersion });
  }

  // Pick the highest prerelease version across all projects by sorting on the numeric suffix that
  // follows "<preid>.". For example, given "2.0.1-alpha.3" and "2.0.1-alpha.7", this resolves to
  // "2.0.1-alpha.7". The cast is safe because uniqueNextNpmVersions always has at least one entry.
  const resolvedVersion = /** @type {string} */ (
    Array.from(uniqueNextNpmVersions)
      .sort((a, b) => {
        const aPrereleaseNum = Number(a.split(`${preid}.`)[1] ?? '0');
        const bPrereleaseNum = Number(b.split(`${preid}.`)[1] ?? '0');
        return aPrereleaseNum - bPrereleaseNum;
      })
      .at(-1)
  );

  const hasVersionMismatch = uniqueNextNpmVersions.size > 1;

  // Build summary lines now that resolvedVersion is known.
  // When versions are in sync, each line is simply "<package>@<resolvedVersion>".
  // When there is a mismatch, annotate packages whose computed npm-next version was overridden
  // so the pipeline author can see exactly which packages caused the discrepancy.
  const summaryLines = perPackageVersions.map(({ npmName, nextNpmVersion }) => {
    const appliedLine = `${npmName}@${resolvedVersion}`;
    if (hasVersionMismatch && nextNpmVersion !== resolvedVersion) {
      return `${appliedLine}  (next available on npm was: ${nextNpmVersion})`;
    }
    return appliedLine;
  });

  if (hasVersionMismatch) {
    const versionMismatchWarning = [
      '',
      `⚠️ Multiple different "next available" versions for prerelease identifier "${preid}" detected:`,
      '- This may have happened because a package failed the publish phase in a previous release attempt',
      `- Computed per-package versions: ${Array.from(uniqueNextNpmVersions).join(', ')}`,
      '',
      `⚠️ Using the highest version (${resolvedVersion}) for all packages in this release.`,
      '',
    ].join('\n');
    summaryLines.unshift(versionMismatchWarning);
  }

  writeOutputs(resolvedVersion, summaryLines);

  // createProjectGraphAsync may open a connection to the Nx daemon, keeping the
  // process alive indefinitely. Force-exit cleanly after all work is done.
  process.exit(0);
}

// ====================================

/**
 * Parses and validates CLI arguments.
 * Exits the process with a non-zero code when required arguments are missing or invalid.
 *
 * @returns {{ preid: string, projectNames: string[] }}
 */
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
 * Writes the resolved version and a human-readable summary to GITHUB_OUTPUT so that downstream
 * GHA steps can consume them via `${{ steps.<id>.outputs.version }}`. Falls back to stdout when
 * `GITHUB_OUTPUT` is not set (i.e. local execution).
 *
 * Output format:
 *   version=<semver>            (single line)
 *   summary<<EOF                (multiline using heredoc syntax)
 *   <package>@<version>\n...
 *   EOF
 *
 * @param {string} version - The single resolved prerelease version (e.g. "2.0.1-alpha.3")
 * @param {string[]} summaryLines - Human-readable lines describing per-package versions (and any warnings)
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
