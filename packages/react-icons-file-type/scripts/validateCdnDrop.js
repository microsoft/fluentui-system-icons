// @ts-check
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require('node:fs');
const { existsSync, readFileSync } = fs;
const { statSync } = require('node:fs');
const { fileURLToPath, pathToFileURL } = require('node:url');
const { resolve } = require('node:path');
const { parseArgs: parseNodeArgs } = require('node:util');

const PACKAGE_ROOT = resolve(__dirname, '..');
const FILE_TYPE_ICON_MAP_PATH = resolve(PACKAGE_ROOT, 'src', 'common', 'fileTypeIconMap.json');
const FILE_ICON_TYPES_PATH = resolve(PACKAGE_ROOT, 'src', 'common', 'fileIconTypes.json');
const MANIFEST_FILE_NAME = 'filetype-ci-manifest.json';
const MAP_FILE_NAME = 'filetypeiconmap.json';
const DEFAULT_ALLOWED_HOSTS = ['res.cdn.office.net'];
const DEFAULT_COMMON_ICONS = ['docx', 'xlsx', 'pptx', 'pdf'];

class HttpStatusError extends Error {
  /**
   * @param {string} message
   * @param {number} status
   */
  constructor(message, status) {
    super(message);
    this.name = 'HttpStatusError';
    this.status = status;
  }
}

function readJsonFile(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf8'));
}

function isProbablyLocalPath(value) {
  return /^[A-Za-z]:[\\/]/.test(value) || value.startsWith('.') || value.startsWith('/') || value.startsWith('..');
}

function toUrl(value) {
  if (isProbablyLocalPath(value)) {
    const absolutePath = resolve(value);
    const url = pathToFileURL(absolutePath);
    try {
      if (statSync(absolutePath).isDirectory() && !url.href.endsWith('/')) {
        return new URL(`${url.href}/`);
      }
    } catch {
      // Let later file reads report the concrete failure.
    }
    return url;
  }

  return new URL(value);
}

function normalizeCdnInput(cdnUrl) {
  const inputUrl = toUrl(cdnUrl);
  const isManifestUrl =
    inputUrl.pathname.endsWith(`/${MANIFEST_FILE_NAME}`) || inputUrl.pathname.endsWith(MANIFEST_FILE_NAME);

  if (isManifestUrl) {
    return {
      inputUrl,
      manifestUrl: inputUrl,
      baseUrl: new URL('./', inputUrl),
      manifestRequired: true,
    };
  }

  const baseUrl = inputUrl.href.endsWith('/') ? inputUrl : new URL(`${inputUrl.href}/`);
  return {
    inputUrl,
    manifestUrl: new URL(MANIFEST_FILE_NAME, baseUrl),
    baseUrl,
    manifestRequired: false,
  };
}

function assertAllowedUrl(url, { allowedHosts = DEFAULT_ALLOWED_HOSTS, allowFileUrl = false } = {}) {
  if (url.protocol === 'file:') {
    if (!allowFileUrl) {
      throw new Error(`file: URLs are only allowed with --allow-file-url: ${url.href}`);
    }
    return;
  }

  if (url.protocol !== 'https:') {
    throw new Error(`Only https CDN URLs are allowed: ${url.href}`);
  }

  if (!allowedHosts.includes(url.hostname)) {
    throw new Error(`Host '${url.hostname}' is not allowed. Allowed hosts: ${allowedHosts.join(', ')}`);
  }
}

function assertRelativePath(value, fieldName) {
  if (!value || typeof value !== 'string') {
    throw new Error(`${fieldName} must be a non-empty relative path`);
  }

  if (/^[A-Za-z][A-Za-z0-9+.-]*:/.test(value) || value.startsWith('/') || value.includes('\\')) {
    throw new Error(`${fieldName} must be relative and same-origin: ${value}`);
  }

  for (const segment of value.split('/')) {
    if (segment === '..') {
      throw new Error(`${fieldName} must not escape the CDN folder: ${value}`);
    }
  }
}

async function readTextUrl(url) {
  if (url.protocol === 'file:') {
    return readFileSync(fileURLToPath(url), 'utf8');
  }

  const response = await fetch(url, { redirect: 'manual' });
  if (response.status >= 300 && response.status < 400) {
    throw new Error(`Redirects are not allowed while fetching ${url.href}`);
  }
  if (!response.ok) {
    throw new HttpStatusError(`HTTP ${response.status} while fetching ${url.href}`, response.status);
  }
  return response.text();
}

async function readJsonUrl(url) {
  return JSON.parse(await readTextUrl(url));
}

async function urlExists(url) {
  if (url.protocol === 'file:') {
    return existsSync(fileURLToPath(url));
  }

  const head = await fetch(url, { method: 'HEAD', redirect: 'manual' });
  if (head.status >= 300 && head.status < 400) {
    throw new Error(`Redirects are not allowed while checking ${url.href}`);
  }
  if (head.status === 404) {
    return false;
  }
  if (head.ok) {
    return true;
  }

  if (head.status === 405 || head.status === 501) {
    const get = await fetch(url, { method: 'GET', redirect: 'manual' });
    return get.ok;
  }

  return false;
}

function buildDefaultManifest() {
  return {
    schemaVersion: 0,
    kind: 'implicit-filetype-icons-ci',
    itemTypesBaseUrl: './',
    mapPath: MAP_FILE_NAME,
    sizes: [16, 20, 24, 32, 40, 48, 64, 96],
    imageFileTypes: ['svg', 'png'],
    densityFolders: {
      svg: ['', '_1.5x'],
      png: ['', '_1.5x', '_2x', '_3x', '_4x'],
    },
    densityExceptions: [
      { size: 20, imageFileType: 'svg', densityFolders: [''] },
      { size: 20, imageFileType: 'png', densityFolders: ['', '_2x', '_3x', '_4x'] },
    ],
  };
}

function densityFoldersFor(manifest, size, imageFileType) {
  const exception = (manifest.densityExceptions ?? []).find(
    (entry) => entry.size === size && entry.imageFileType === imageFileType,
  );
  if (exception) {
    return exception.densityFolders;
  }
  return manifest.densityFolders?.[imageFileType] ?? [''];
}

function resolveManifestBaseUrl(baseUrl, manifest) {
  const itemTypesBaseUrl = manifest.itemTypesBaseUrl ?? './';
  assertRelativePath(itemTypesBaseUrl, 'itemTypesBaseUrl');
  return new URL(itemTypesBaseUrl, baseUrl);
}

function resolveManifestPath(baseUrl, relativePath, fieldName) {
  assertRelativePath(relativePath, fieldName);
  return new URL(relativePath, baseUrl);
}

function normalizeCdnMapEntry(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) {
    return { extensions: [], types: [] };
  }
  return {
    extensions: Array.isArray(entry.extensions) ? entry.extensions : [],
    types: Array.isArray(entry.types) ? entry.types : [],
  };
}

function compareStringArrays(left, right) {
  return left.length === right.length && left.every((value, index) => value === right[index]);
}

function compareCdnMapToPackage(cdnMap, packageMap, fileIconTypes) {
  const errors = [];
  const fileIconTypeByName = new Map(fileIconTypes.map((entry) => [entry.name, entry]));

  for (const iconName of Object.keys(cdnMap)) {
    const cdnEntry = normalizeCdnMapEntry(cdnMap[iconName]);
    const packageEntry = packageMap[iconName];

    if (!(iconName in packageMap)) {
      errors.push(`Missing package map key: ${iconName}`);
      continue;
    }

    const packageExtensions = packageEntry == null ? [] : packageEntry;
    if (!Array.isArray(packageExtensions)) {
      errors.push(`Package map key '${iconName}' must be an array or null`);
    } else if (!compareStringArrays(packageExtensions, cdnEntry.extensions)) {
      errors.push(
        `Extension mismatch for ${iconName}: package=[${packageExtensions.join(',')}] cdn=[${cdnEntry.extensions.join(',')}]`,
      );
    }

    for (const typeName of cdnEntry.types) {
      const fileIconType = fileIconTypeByName.get(typeName);
      if (!fileIconType) {
        errors.push(`Missing FileIconType '${typeName}' for CDN icon '${iconName}'`);
      } else {
        const expectedIcon = iconName === 'genericfile' ? null : iconName;
        if (fileIconType.icon !== expectedIcon) {
          errors.push(`FileIconType '${typeName}' points to '${fileIconType.icon}', expected '${expectedIcon}'`);
        }
      }
    }
  }

  for (const iconName of Object.keys(packageMap)) {
    if (!(iconName in cdnMap)) {
      errors.push(`Extra package map key not present in CDN map: ${iconName}`);
    }
  }

  return { errors };
}

function getRepresentativeIcons(cdnMap) {
  const icons = new Set(DEFAULT_COMMON_ICONS.filter((iconName) => iconName in cdnMap));
  if ('agentwork' in cdnMap) {
    icons.add('agentwork');
  }
  for (const [iconName, entry] of Object.entries(cdnMap)) {
    if (normalizeCdnMapEntry(entry).types.length > 0) {
      icons.add(iconName);
    }
  }
  return [...icons].sort();
}

function buildAssetUrl(baseUrl, iconName, size, density, imageFileType) {
  return new URL(`${size}${density}/${iconName}.${imageFileType}`, baseUrl);
}

async function checkRepresentativeAssets({
  baseUrl,
  manifest,
  cdnMap,
  representativeIcons = getRepresentativeIcons(cdnMap),
}) {
  const errors = [];
  const warnings = [];
  let requiredChecks = 0;
  let warningChecks = 0;

  for (const iconName of representativeIcons) {
    for (const { size, imageFileType } of [
      { size: 24, imageFileType: 'svg' },
      { size: 48, imageFileType: 'svg' },
      { size: 24, imageFileType: 'png' },
    ]) {
      if (!manifest.sizes.includes(size) || !manifest.imageFileTypes.includes(imageFileType)) {
        continue;
      }
      requiredChecks++;
      const url = buildAssetUrl(baseUrl, iconName, size, '', imageFileType);
      if (!(await urlExists(url))) {
        errors.push(`Missing required asset: ${url.href}`);
      }
    }

    if (manifest.sizes.includes(64) && manifest.imageFileTypes.includes('png')) {
      for (const density of densityFoldersFor(manifest, 64, 'png').filter(Boolean)) {
        warningChecks++;
        const url = buildAssetUrl(baseUrl, iconName, 64, density, 'png');
        if (!(await urlExists(url))) {
          warnings.push(`Missing high-DPI PNG variant: ${url.href}`);
        }
      }
    }
  }

  return { errors, warnings, requiredChecks, warningChecks, representativeIcons };
}

async function loadManifest(normalized) {
  try {
    const manifest = await readJsonUrl(normalized.manifestUrl);
    return { manifest, manifestUrl: normalized.manifestUrl, usedFallback: false };
  } catch (error) {
    if (error instanceof HttpStatusError && error.status === 404 && !normalized.manifestRequired) {
      return { manifest: buildDefaultManifest(), manifestUrl: normalized.manifestUrl, usedFallback: true };
    }
    if (error && error.code === 'ENOENT' && !normalized.manifestRequired) {
      return { manifest: buildDefaultManifest(), manifestUrl: normalized.manifestUrl, usedFallback: true };
    }
    throw error;
  }
}

async function validateCdnDrop({
  cdnUrl,
  allowedHosts = DEFAULT_ALLOWED_HOSTS,
  allowFileUrl = false,
  assetMode = 'representative',
  packageMap = readJsonFile(FILE_TYPE_ICON_MAP_PATH),
  fileIconTypes = readJsonFile(FILE_ICON_TYPES_PATH),
  representativeIcons,
} = {}) {
  if (!cdnUrl) {
    throw new Error('--cdn-url is required');
  }

  const normalized = normalizeCdnInput(cdnUrl);
  for (const url of [normalized.inputUrl, normalized.baseUrl, normalized.manifestUrl]) {
    assertAllowedUrl(url, { allowedHosts, allowFileUrl });
  }

  const { manifest, manifestUrl, usedFallback } = await loadManifest(normalized);
  const manifestBaseUrl = resolveManifestBaseUrl(normalized.baseUrl, manifest);
  const mapUrl = resolveManifestPath(manifestBaseUrl, manifest.mapPath ?? MAP_FILE_NAME, 'mapPath');
  assertAllowedUrl(manifestBaseUrl, { allowedHosts, allowFileUrl });
  assertAllowedUrl(mapUrl, { allowedHosts, allowFileUrl });

  const cdnMap = await readJsonUrl(mapUrl);
  const comparison = compareCdnMapToPackage(cdnMap, packageMap, fileIconTypes);
  const assetCheck =
    assetMode === 'none'
      ? { errors: [], warnings: [], requiredChecks: 0, warningChecks: 0, representativeIcons: [] }
      : await checkRepresentativeAssets({ baseUrl: manifestBaseUrl, manifest, cdnMap, representativeIcons });

  return {
    normalized,
    manifest,
    manifestUrl,
    manifestBaseUrl,
    mapUrl,
    usedFallback,
    comparison,
    assetCheck,
    ok: comparison.errors.length === 0 && assetCheck.errors.length === 0,
  };
}

function parseScriptArgs(argv) {
  const { values } = parseNodeArgs({
    args: argv,
    options: {
      'cdn-url': { type: 'string' },
      'allow-host': { type: 'string', multiple: true, default: DEFAULT_ALLOWED_HOSTS },
      'allow-file-url': { type: 'boolean', default: false },
      'asset-mode': { type: 'string', default: 'representative' },
    },
    strict: true,
    allowPositionals: false,
  });

  return {
    cdnUrl: values['cdn-url'],
    allowedHosts: values['allow-host'],
    allowFileUrl: values['allow-file-url'],
    assetMode: values['asset-mode'],
  };
}

async function main() {
  const result = await validateCdnDrop(parseScriptArgs(process.argv.slice(2)));

  console.log(`Input URL: ${result.normalized.inputUrl.href}`);
  console.log(
    `Manifest URL: ${result.manifestUrl.href}${result.usedFallback ? ' (not found, using implicit defaults)' : ''}`,
  );
  console.log(`Item types base URL: ${result.manifestBaseUrl.href}`);
  console.log(`Map URL: ${result.mapUrl.href}`);
  console.log(`Package map comparison errors: ${result.comparison.errors.length}`);
  console.log(`Required asset checks: ${result.assetCheck.requiredChecks}`);
  console.log(`Required asset errors: ${result.assetCheck.errors.length}`);
  console.log(`High-DPI PNG warning checks: ${result.assetCheck.warningChecks}`);
  console.log(`High-DPI PNG warnings: ${result.assetCheck.warnings.length}`);

  for (const error of [...result.comparison.errors, ...result.assetCheck.errors]) {
    console.error(`ERROR: ${error}`);
  }
  for (const warning of result.assetCheck.warnings) {
    console.warn(`WARN: ${warning}`);
  }

  if (!result.ok) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error(error instanceof Error ? error.stack || error.message : String(error));
    process.exit(1);
  });
}

module.exports = {
  HttpStatusError,
  assertAllowedUrl,
  buildDefaultManifest,
  compareCdnMapToPackage,
  normalizeCdnInput,
  validateCdnDrop,
};
