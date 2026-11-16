#!/usr/bin/env node

// @ts-check

/**
 * Checks the raw SVG artwork in assets/ before it is used to generate platform packages.
 *
 * Validates asset group names, SVG filenames, locale/direction folder layouts and
 * well-formed XML for every SVG. For non-Color icons, also checks supported
 * svg/g/path structure and that every painted path uses the design fill #212121.
 *
 * Color variants skip monochrome checks. An optional exclusions file can suppress
 * monochrome contract violations for specific files with a review reason; source
 * identity, directory-name and XML parsing failures cannot be excluded.
 *
 * Prints diagnostics and checked/skipped/excluded counts. Exits with a nonzero
 * status when violations remain. This is a read-only check, not an optimizer or
 * auto-fixer: it never changes artwork or regenerates package output.
 *
 * Usage: node importer/check-assets/cli.mjs [--source <directory>] [--exclusions <file>]
 *
 * Options:
 *   --source: Asset root (defaults to the repository assets directory)
 *   --exclusions: JSON map of exact asset-relative paths to review reasons
 *   --help, -h: Show this help message
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { SaxesParser } from 'saxes';
import { parseIconName } from '../icon-name.js';

const canonicalFill = '#212121';
const svgNamespace = 'http://www.w3.org/2000/svg';
const allowedMonochromeElementNames = new Set(['svg', 'g', 'path']);

main();

function main() {
  const { source, exclusionsPath } = processArgs();
  /** @type {string[]} */
  const failures = [];
  let checked = 0;
  let skipped = 0;
  let excluded = 0;
  /** @type {Map<string, string>} */
  let exclusions = new Map();
  const matchedExclusions = new Set();

  try {
    exclusions = readExclusions(exclusionsPath);
    for (const file of collectSvgFiles(source, failures)) {
      const relative = path.relative(source, file).split(path.sep).join('/');
      try {
        const identity = parseSourceIdentity(relative);
        const monochrome = identity.style !== 'color';
        const reason = monochrome ? exclusions.get(relative) : undefined;
        if (reason !== undefined) matchedExclusions.add(relative);
        else if (monochrome) checked++;
        const contractFailures = [];
        inspectSvg(fs.readFileSync(file, 'utf8'), relative, contractFailures, monochrome);
        if (!monochrome) {
          skipped++;
          continue;
        }
        if (reason !== undefined && contractFailures.length > 0) {
          excluded++;
          console.log(`Excluded ${relative}: ${reason} (${contractFailures.length} contract diagnostics suppressed).`);
        } else {
          failures.push(...contractFailures);
          if (reason !== undefined) {
            checked++;
            failures.push(`${relative}: Unnecessary exclusion; the source already satisfies the contract. Remove its exclusion entry.`);
          }
        }
      } catch (error) {
        failures.push(`${relative}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  } catch (error) {
    failures.push(`${source}: ${error instanceof Error ? error.message : String(error)}`);
  }

  for (const assetRelativePath of exclusions.keys()) {
    if (!matchedExclusions.has(assetRelativePath)) {
      failures.push(`${assetRelativePath}: Unmatched exclusion; no monochrome source SVG matched. Remove stale entries.`);
    }
  }
  if (checked === 0 && excluded === 0) {
    failures.push('No monochrome SVGs found in the asset scope.');
  }
  console.log(`Checked ${checked} monochrome SVGs; skipped ${skipped} Color SVGs; excluded ${excluded} monochrome SVGs.`);
  if (failures.length > 0) {
    for (const failure of failures.sort()) {
      console.error(failure);
    }
    console.error(
      `${failures.length} asset contract violation(s). Use ${canonicalFill} for monochrome paint; intentional palettes require design-reviewed Color classification.`,
    );
    process.exitCode = 1;
  }
}

// ====================================

function processArgs() {
  const defaultSource = fileURLToPath(new URL('../../assets/', import.meta.url));
  try {
    const { values } = parseArgs({
      options: {
        source: { type: 'string', default: defaultSource },
        exclusions: { type: 'string' },
        help: { type: 'boolean', short: 'h' },
      },
    });
    if (values.help) {
      printUsage();
      process.exit(0);
    }
    return { source: path.resolve(values.source), exclusionsPath: values.exclusions };
  } catch (error) {
    console.error(`Error parsing arguments: ${error instanceof Error ? error.message : String(error)}`);
    printUsage();
    process.exit(1);
  }
}

function printUsage() {
  console.error('Usage: node importer/check-assets/cli.mjs [--source <directory>] [--exclusions <file>]');
  console.error('Options:');
  console.error('  --source: Asset root (defaults to repository assets/)');
  console.error('  --exclusions: JSON map of exact asset-relative paths to review reasons; strict when omitted');
  console.error('  --help, -h: Show this help message');
}

/**
 * @param {string | undefined} exclusionsPath
 * @returns {Map<string, string>}
 */
function readExclusions(exclusionsPath) {
  const exclusions = new Map();
  if (exclusionsPath === undefined) return exclusions;
  try {
    /** @type {unknown} */
    const entries = JSON.parse(fs.readFileSync(exclusionsPath, 'utf8'));
    if (typeof entries !== 'object' || entries === null || Array.isArray(entries)) {
      throw new Error('Expected an object mapping exact asset-relative SVG paths to reasons.');
    }
    for (const [assetRelativePath, reason] of Object.entries(entries)) {
      if (assetRelativePath === '$schema') {
        if (typeof reason !== 'string') throw new Error('$schema metadata must be a string.');
        continue;
      }
      if (
        typeof reason !== 'string' || !reason.trim() || assetRelativePath.includes('\\') ||
        path.posix.isAbsolute(assetRelativePath) || path.posix.normalize(assetRelativePath) !== assetRelativePath
      ) {
        throw new Error(`Entry ${JSON.stringify(assetRelativePath)} must be an exact normalized asset-relative path with a nonempty reason.`);
      }
      parseSourceIdentity(assetRelativePath);
      exclusions.set(assetRelativePath, reason.trim());
    }
    return exclusions;
  } catch (error) {
    throw new Error(`Invalid exclusions ${exclusionsPath}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * @param {string} directory
 * @param {string[]} failures
 * @param {boolean} assetRoot
 * @returns {Generator<string>}
 */
function* collectSvgFiles(directory, failures, assetRoot = true) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      if (assetRoot && entry.name.endsWith(' ')) {
        failures.push(`Asset directory ${JSON.stringify(entry.name)} has a trailing space; remove it for Windows compatibility.`);
      }
      yield* collectSvgFiles(file, failures, false);
    } else if (entry.isSymbolicLink()) {
      failures.push(`${file}: Symbolic links are not supported in source assets.`);
    } else if (entry.isFile() && /\.svg$/i.test(entry.name)) {
      yield file;
    }
  }
}

/**
 * @param {string} relative
 */
function parseSourceIdentity(relative) {
  const parts = relative.split('/');
  if ((parts.length !== 3 && parts.length !== 4) || parts[parts.length - 2] !== 'SVG') {
    throw new Error('Unrecognized asset SVG layout. Expected Group/[locale or direction/]SVG/icon.svg.');
  }
  if (parts.length === 4) {
    const qualifier = parts[1];
    const direction = qualifier === 'LTR' || qualifier === 'RTL';
    if (!direction && (!/^[a-z]{2,3}(?:-[a-z0-9]+)*$/.test(qualifier) || /(?:^|-)(?:ltr|rtl)(?:-|$)/i.test(qualifier))) {
      throw new Error('Unrecognized asset SVG layout. Use a lowercase hyphenated locale or an LTR/RTL directory.');
    }
  }
  const filename = parts[parts.length - 1];
  const match = filename.match(/^ic_fluent_([a-z0-9]+(?:_[a-z0-9]+)*)_([1-9]\d*)_(regular|filled|light|color)(?:_(ltr|rtl))?\.svg$/);
  if (!match || !Number.isSafeInteger(Number(match[2]))) {
    throw new Error('Unrecognized SVG filename/style. Use the source prefix, a positive size, an explicit style, and only an optional ltr/rtl suffix.');
  }
  return parseIconName(parts.length === 4 ? `${parts[1]}/${filename}` : filename);
}

/**
 * Parses every SVG without rewriting it, optionally collecting monochrome diagnostics.
 *
 * @param {string} content
 * @param {string} file
 * @param {string[]} failures
 * @param {boolean} monochrome
 */
function inspectSvg(content, file, failures, monochrome) {
  let hasCanonicalPaint = false;
  const parser = new SaxesParser({ xmlns: true });
  parser.on('error', (error) => {
    throw new Error(`Malformed XML: ${error.message}`);
  });
  if (monochrome) {
    /** @type {SvgElementContext[]} */
    const elementStack = [];
    parser.on('processinginstruction', (instruction) => {
      failures.push(`${file}: Unsupported processing instruction ${instruction.target}; source artwork must not load stylesheets or processing directives.`);
    });
    parser.on('opentag', (node) => {
      const parentElement = elementStack[elementStack.length - 1];
      const element = createElementContext(node, parentElement);
      elementStack.push(element);

      validateElementStructure(element, file, failures);
      validateElementAttributes(element, file, failures);
      if (element.name === 'path') {
        const isCanonicalPath = validatePaintedPath(element, file, failures);
        hasCanonicalPaint ||= isCanonicalPath;
      }
    });
    parser.on('closetag', () => {
      elementStack.pop();
    });
  }
  parser.write(content).close();
  if (monochrome && !hasCanonicalPaint) {
    failures.push(`${file}: No canonical painted path geometry. Provide a nonempty supported path with effective fill ${canonicalFill}.`);
  }
}

/**
 * @typedef {object} SvgElementContext
 * @property {string} name
 * @property {Record<string, string>} attributes
 * @property {string} namespace
 * @property {string} effectiveFill
 * @property {boolean} hasSupportedStructure
 * @property {boolean} isInSupportedTree
 */

/**
 * Resolves inherited paint and namespace, and tracks structural eligibility.
 *
 * @param {import('saxes').SaxesTagNS} node
 * @param {SvgElementContext | undefined} parentElement
 * @returns {SvgElementContext}
 */
function createElementContext(node, parentElement) {
  if (!parentElement && node.name !== 'svg') {
    throw new Error('Expected an SVG document root.');
  }
  const attributes = Object.fromEntries(Object.entries(node.attributes).map(([name, attribute]) => [name, attribute.value]));
  const namespace = attributes.xmlns ?? parentElement?.namespace ?? svgNamespace;
  const hasSupportedStructure = allowedMonochromeElementNames.has(node.name) &&
    (!parentElement ? node.name === 'svg' : node.name !== 'svg' && (parentElement.name === 'svg' || parentElement.name === 'g'));

  return {
    name: node.name,
    attributes,
    namespace,
    effectiveFill: attributes.fill ?? parentElement?.effectiveFill ?? 'black',
    hasSupportedStructure,
    isInSupportedTree: hasSupportedStructure && namespace === svgNamespace && (parentElement?.isInSupportedTree ?? true),
  };
}

/**
 * Reports unsupported element nesting and non-SVG namespaces.
 *
 * @param {SvgElementContext} element
 * @param {string} file
 * @param {string[]} failures
 */
function validateElementStructure(element, file, failures) {
  if (!element.hasSupportedStructure) {
    failures.push(`${file}: Unsupported monochrome element <${element.name}>. Export svg/g/path artwork while preserving appearance; request consumer support if flattening is not possible.`);
  }
  if (element.namespace !== svgNamespace) {
    failures.push(`${file}: Unsupported namespace ${JSON.stringify(element.namespace)} on <${element.name}>; monochrome artwork must use SVG elements.`);
  }
}

/**
 * Reports prefixed attributes, CSS styling, and noncanonical explicit fills.
 *
 * @param {SvgElementContext} element
 * @param {string} file
 * @param {string[]} failures
 */
function validateElementAttributes(element, file, failures) {
  for (const attribute of Object.keys(element.attributes)) {
    if (attribute.includes(':') && !attribute.startsWith('xmlns:')) {
      failures.push(`${file}: Unsupported attribute ${attribute} on <${element.name}>; prefixed styling and painting attributes are not supported.`);
    }
  }
  if (element.name === 'style' || 'style' in element.attributes) {
    failures.push(`${file}: <${element.name}> uses unsupported CSS styling; use explicit source fill attributes.`);
  }
  const fill = element.attributes.fill;
  if (fill !== undefined && fill !== canonicalFill && fill !== 'none') {
    failures.push(`${file}: <${element.name}> has fill=${JSON.stringify(fill)}; expected ${canonicalFill} or structural none.`);
  }
}

/**
 * Reports empty paths or invalid effective paint and identifies canonical artwork.
 *
 * @param {SvgElementContext} element
 * @param {string} file
 * @param {string[]} failures
 * @returns {boolean}
 */
function validatePaintedPath(element, file, failures) {
  const hasGeometry = Boolean(element.attributes.d?.trim());
  if (!hasGeometry) {
    failures.push(`${file}: <path> requires nonempty path geometry.`);
  }
  if (element.effectiveFill !== canonicalFill) {
    failures.push(`${file}: <path> has effective fill=${JSON.stringify(element.effectiveFill)}; every painted path must resolve to ${canonicalFill}, not implicit black or none.`);
  }
  return element.isInSupportedTree && hasGeometry && element.effectiveFill === canonicalFill;
}