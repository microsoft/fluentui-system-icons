#!/usr/bin/env node

// @ts-check

/**
 * Gets the next prerelease version for a package
 * by checking the latest version from npm registry with the specified preid
 *
 * Usage: node get-next-prerelease-version.js --package <package-name> --preid <preid> [--package-json <path>]
 *
 * Options:
 *   --package: NPM package name (e.g., @fluentui/react-icons)
 *   --preid: Prerelease identifier (e.g., alpha, beta, rc)
 *   --package-json: Optional path to package.json (relative to script directory)
 *                   Default: ../../packages/react-icons/package.json
 */

const fs = require('fs');
const path = require('path');
const { parseArgs } = require('node:util');

main().catch((error) => {
  console.error('❌ Unhandled error:', error instanceof Error ? error.message : String(error));
  process.exit(1);
});

// ====================================

function processArgs(){
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
        'package-json': {
          type: 'string'
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
  const packageJsonPath = options['package-json'];

  if (!packageName || !preid) {
    printUsage();
    process.exit(1);
  }

  return { packageName, preid, packageJsonPath: packageJsonPath ?? '../../packages/react-icons/package.json' };
}

function printUsage() {
  console.error('Usage: node get-next-prerelease-version.js --package <package-name> --preid <preid> [--package-json <path>]');
  console.error('');
  console.error('Options:');
  console.error('  --package, -p: NPM package name (e.g., @fluentui/react-icons)');
  console.error('  --preid: Prerelease identifier (e.g., alpha, beta, rc)');
  console.error('  --package-json: Optional path to package.json (relative to script directory)');
  console.error('                  Default: ../../packages/react-icons/package.json');
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
    full: versionString
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
    .filter(v => v && v.preid === preid)
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
 * @param {string} packageJsonRelativePath
 * @returns {{major: number, minor: number, patch: number}}
 */
function getBaseVersion(packageJsonRelativePath) {
  const resolvedPath = path.join(__dirname, packageJsonRelativePath);
  const packageJson = JSON.parse(fs.readFileSync(resolvedPath, 'utf8'));
  const parsed = parseVersion(packageJson.version);

  if (!parsed) {
    throw new Error(`Invalid version in package.json: ${packageJson.version}`);
  }

  return {
    major: parsed.major,
    minor: parsed.minor,
    patch: parsed.patch
  };
}

/**
 * @param {{major: number, minor: number, patch: number, preid: string | null, prerelease: number | null, full: string} | null} latestPrerelease
 * @param {{major: number, minor: number, patch: number}} baseVersion
 * @param {string} preid
 * @returns {string}
 */
function incrementPrerelease(latestPrerelease, baseVersion, preid) {
  if (!latestPrerelease) {
    // No existing prerelease, increment patch and start with .0
    return `${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch + 1}-${preid}.0`;
  }

  // Check if base version has changed or is greater
  if (latestPrerelease.major < baseVersion.major ||
      latestPrerelease.minor < baseVersion.minor ||
      latestPrerelease.patch < baseVersion.patch) {
    // Base version is newer, increment patch and start new prerelease sequence
    return `${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch + 1}-${preid}.0`;
  }

  // Check if we're on the same base version
  if (latestPrerelease.major === baseVersion.major &&
      latestPrerelease.minor === baseVersion.minor &&
      latestPrerelease.patch === baseVersion.patch) {
    // Same base version, just increment prerelease number
    return `${baseVersion.major}.${baseVersion.minor}.${baseVersion.patch}-${preid}.${(latestPrerelease.prerelease ?? 0) + 1}`;
  }

  // Latest prerelease is ahead of base version, continue from there
  return `${latestPrerelease.major}.${latestPrerelease.minor}.${latestPrerelease.patch}-${preid}.${(latestPrerelease.prerelease ?? 0) + 1}`;
}

async function main() {
  const { packageName, preid, packageJsonPath } = processArgs();

  try {
    console.error(`📦 Fetching latest ${preid} prerelease version for ${packageName} from npm...`);

    const packageInfo = await fetchPackageInfo(packageName);
    const latestPrerelease = getLatestPrereleaseVersion(packageInfo, preid);
    const baseVersion = getBaseVersion(packageJsonPath);

    if (latestPrerelease) {
      console.error(`📌 Latest ${preid} version: ${latestPrerelease.full}`);
    } else {
      console.error(`📌 No existing ${preid} versions found`);
    }

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
