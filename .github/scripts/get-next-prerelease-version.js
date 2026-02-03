#!/usr/bin/env node

// @ts-check

/**
 * Gets the next prerelease version for a package
 * by checking the latest version from npm registry with the specified preid
 *
 * Usage: node get-next-prerelease-version.js --package <package-name> --preid <preid>
 *
 * Options:
 *   --package: NPM package name (e.g., @fluentui/react-icons)
 *   --preid: Prerelease identifier (e.g., alpha, beta, rc)
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');
const { execSync } = require('child_process');

main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

// ====================================

function processArgs() {
  // Parse CLI arguments
  let options;
  try {
    const { values } = parseArgs({
      options: {
        package: {
          type: 'string',
          short: 'p',
        },
        preid: {
          type: 'string',
        },
        help: {
          type: 'boolean',
          short: 'h',
        },
      },
    });
    options = values;
  } catch (error) {
    console.error('Error parsing arguments:', error instanceof Error ? error.message : String(error));
    console.error('');
    printUsage();
    process.exit(1);
  }

  if (options.help) {
    printUsage();
    process.exit(0);
  }

  const packageName = options.package;
  const preid = options.preid;

  if (!packageName || !preid) {
    printUsage();
    process.exit(1);
  }

  // Validate preid to prevent injection attacks
  const VALID_PREIDS = ['alpha', 'beta', 'rc'];
  if (!VALID_PREIDS.includes(preid)) {
    console.error(`❌ Invalid preid: "${preid}". Must be one of: ${VALID_PREIDS.join(', ')}`);
    process.exit(1);
  }

  const baseVersion = getBaseVersion(packageName);

  return { packageName, preid, baseVersion };

  /**
   *
   * @param {string} packageName
   */
  function getBaseVersion(packageName) {
    // Get package.json path and validate it exists
    let packageJsonPath;
    try {
      packageJsonPath = findPackageJson(packageName);
    } catch (error) {
      console.error(`❌ ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }

    // Read and validate version from package.json
    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const parsed = parseVersion(packageJson.version);

      if (!parsed) {
        console.error(`❌ Invalid version in package.json: ${packageJson.version}`);
        process.exit(1);
      }

      return {
        major: parsed.major,
        minor: parsed.minor,
        patch: parsed.patch,
      };
    } catch (error) {
      console.error(`❌ Failed to read package.json: ${error instanceof Error ? error.message : String(error)}`);
      process.exit(1);
    }
  }
}

function printUsage() {
  console.error('Usage: node get-next-prerelease-version.js --package <package-name> --preid <preid>');
  console.error('');
  console.error('Options:');
  console.error('  --package, -p: NPM package name (e.g., @fluentui/react-icons)');
  console.error('  --preid: Prerelease identifier (e.g., alpha, beta, rc)');
  console.error('  --help, -h: Show this help message');
}

/**
 * @param {string} packageName
 * @returns {Promise<any>}
 */
async function fetchPackageInfo(packageName) {
  const url = `https://registry.npmjs.org/${packageName}`;

  try {
    const response = await fetch(url);

    if (response.status === 200) {
      return await response.json();
    } else if (response.status === 404) {
      // Package doesn't exist yet
      return null;
    } else {
      throw new Error(`Failed to fetch package info: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch package info: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * @param {string} versionString
 * @returns {{major: number, minor: number, patch: number, preid: string | null, prerelease: number | null, full: string} | null}
 */
function parseVersion(versionString) {
  const match = versionString.match(/^(\d+)\.(\d+)\.(\d+)(?:-([a-z]+)\.(\d+))?$/);
  if (!match) return null;

  return {
    major: parseInt(match[1], 10),
    minor: parseInt(match[2], 10),
    patch: parseInt(match[3], 10),
    preid: match[4] || null,
    prerelease: match[5] ? parseInt(match[5], 10) : null,
    full: versionString,
  };
}

/**
 * @param {any} packageInfo
 * @param {string} preid
 * @returns {{major: number, minor: number, patch: number, preid: string | null, prerelease: number | null, full: string} | null}
 */
function getLatestPrereleaseVersion(packageInfo, preid) {
  if (!packageInfo || !packageInfo.versions) {
    return null;
  }

  // Get all versions matching the preid
  const versions = Object.keys(packageInfo.versions)
    .map(parseVersion)
    .filter((v) => v && v.preid === preid)
    .sort((a, b) => {
      // Sort by major.minor.patch.prerelease descending
      if (!a || !b) return 0;
      if (a.major !== b.major) return b.major - a.major;
      if (a.minor !== b.minor) return b.minor - a.minor;
      if (a.patch !== b.patch) return b.patch - a.patch;
      return (b.prerelease ?? 0) - (a.prerelease ?? 0);
    });

  return versions[0] || null;
}

/**
 * Find package.json path in workspace using nx show project
 * @param {string} packageName
 * @returns {string}
 */
function findPackageJson(packageName) {
  try {
    // Use nx show project to get project root
    const result = execSync(`npx nx show project ${packageName} --json`, {
      encoding: 'utf8',
      stdio: ['pipe', 'pipe', 'pipe'], // Suppress stderr
    });

    const projectInfo = JSON.parse(result);

    if (!projectInfo || !projectInfo.root) {
      throw new Error(`Could not determine root for project: ${packageName}`);
    }

    return path.join(projectInfo.root, 'package.json');
  } catch (error) {
    throw new Error(
      `Failed to locate package ${packageName}: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

/**
 * @param {{major: number, minor: number, patch: number, preid: string | null, prerelease: number | null, full: string} | null} latestPrerelease
 * @param {{major: number, minor: number, patch: number}} baseVersion
 * @param {string} preid
 * @returns {string}
 */
function incrementPrerelease(latestPrerelease, baseVersion, preid) {
  if (!latestPrerelease) {
    // No existing prerelease, increment patch from base version
    return `${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch + 1}-${preid}.0`;
  }

  // Check if base version is newer than latest prerelease
  if (
    baseVersion.major > latestPrerelease.major ||
    (baseVersion.major === latestPrerelease.major && baseVersion.minor > latestPrerelease.minor) ||
    (baseVersion.major === latestPrerelease.major &&
      baseVersion.minor === latestPrerelease.minor &&
      baseVersion.patch > latestPrerelease.patch)
  ) {
    // Base version is newer, increment patch from base version
    return `${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch + 1}-${preid}.0`;
  }

  // Continue from latest prerelease, just increment prerelease number
  return `${latestPrerelease.major}.${latestPrerelease.minor}.${latestPrerelease.patch}-${preid}.${(latestPrerelease.prerelease ?? 0) + 1}`;
}

async function main() {
  const { packageName, preid, baseVersion } = processArgs();

  try {
    console.error(`📦 Fetching latest ${preid} prerelease version for ${packageName} from npm...`);

    const packageInfo = await fetchPackageInfo(packageName);
    const latestPrerelease = getLatestPrereleaseVersion(packageInfo, preid);

    if (latestPrerelease) {
      console.error(`📌 Latest ${preid} version: ${latestPrerelease.full}`);
    } else {
      console.error(`📌 No existing ${preid} versions found`);
    }
    console.error(`📋 Base version from package.json: ${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch}`);

    const nextVersion = incrementPrerelease(latestPrerelease, baseVersion, preid);
    console.error(`🚀 Next version: ${nextVersion}`);

    // IMPORTANT: Output to stdout for use in workflow
    console.log(nextVersion);
    // This output will be captured by the GitHub Actions workflow
  } catch (error) {
    console.error('❌ Error:', error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
