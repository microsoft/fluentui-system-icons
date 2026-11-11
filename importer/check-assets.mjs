#!/usr/bin/env node

// @ts-check

/**
 * Validates source asset directory names and monochrome SVG fills without writing files.
 *
 * Usage: node importer/check-assets.mjs [--source <directory>]
 *
 * Options:
 *   --source: Asset root (defaults to the repository assets directory)
 *   --help, -h: Show this help message
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';
import { SaxesParser } from 'saxes';
import { parseIconName } from './icon-name.js';

const canonicalFill = '#212121';
const svgNamespace = 'http://www.w3.org/2000/svg';
const monochromeElements = new Set(['svg', 'g', 'path']);

main();

function main() {
  const source = processArgs();
  /** @type {string[]} */
  const failures = [];
  let checked = 0;
  let skipped = 0;

  try {
    for (const file of collectSvgFiles(source, failures)) {
      const relative = path.relative(source, file).split(path.sep).join('/');
      try {
        const identity = parseSourceIdentity(relative);
        if (identity.style === 'color') {
          skipped++;
          continue;
        }
        checked++;
        inspectSvg(fs.readFileSync(file, 'utf8'), relative, failures);
      } catch (error) {
        failures.push(`${relative}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  } catch (error) {
    failures.push(`${source}: ${error instanceof Error ? error.message : String(error)}`);
  }

  if (checked === 0) {
    failures.push('No monochrome SVGs found in the asset scope.');
  }
  console.log(`Checked ${checked} monochrome SVGs; skipped ${skipped} Color SVGs.`);
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
  const defaultSource = fileURLToPath(new URL('../assets/', import.meta.url));
  try {
    const { values } = parseArgs({
      options: {
        source: { type: 'string', default: defaultSource },
        help: { type: 'boolean', short: 'h' },
      },
    });
    if (values.help) {
      printUsage();
      process.exit(0);
    }
    return path.resolve(values.source);
  } catch (error) {
    console.error(`Error parsing arguments: ${error instanceof Error ? error.message : String(error)}`);
    printUsage();
    process.exit(1);
  }
}

function printUsage() {
  console.error('Usage: node importer/check-assets.mjs [--source <directory>]');
  console.error('Options:');
  console.error('  --source: Asset root (defaults to repository assets/)');
  console.error('  --help, -h: Show this help message');
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
 * @param {string} content
 * @param {string} file
 * @param {string[]} failures
 */
function inspectSvg(content, file, failures) {
  let hasCanonicalPaint = false;
  /** @type {{name: string, fill: string, namespace: string, supported: boolean}[]} */
  const frames = [];
  const parser = new SaxesParser({ xmlns: true });
  parser.on('error', (error) => {
    throw new Error(`Malformed XML: ${error.message}`);
  });
  parser.on('processinginstruction', (instruction) => {
    failures.push(`${file}: Unsupported processing instruction ${instruction.target}; source artwork must not load stylesheets or processing directives.`);
  });
  parser.on('opentag', (node) => {
    const inherited = frames[frames.length - 1];
    if (!inherited && node.name !== 'svg') {
      throw new Error('Expected an SVG document root.');
    }
    const attributes = Object.fromEntries(Object.entries(node.attributes).map(([name, attribute]) => [name, attribute.value]));
    const namespace = attributes.xmlns ?? inherited?.namespace ?? svgNamespace;
    const supported = monochromeElements.has(node.name) &&
      (!inherited ? node.name === 'svg' : node.name !== 'svg' && (inherited.name === 'svg' || inherited.name === 'g'));
    const frame = {
      name: node.name,
      fill: attributes.fill ?? inherited?.fill ?? 'black',
      namespace,
      supported: supported && namespace === svgNamespace && (inherited?.supported ?? true),
    };
    frames.push(frame);
    if (!supported) {
      failures.push(`${file}: Unsupported monochrome element <${node.name}>. Export svg/g/path artwork while preserving appearance; request consumer support if flattening is not possible.`);
    }
    if (namespace !== svgNamespace) {
      failures.push(`${file}: Unsupported namespace ${JSON.stringify(namespace)} on <${node.name}>; monochrome artwork must use SVG elements.`);
    }
    for (const attribute of Object.keys(attributes)) {
      if (attribute.includes(':') && !attribute.startsWith('xmlns:')) {
        failures.push(`${file}: Unsupported attribute ${attribute} on <${node.name}>; prefixed styling and painting attributes are not supported.`);
      }
    }
    if (node.name === 'style' || 'style' in attributes) {
      failures.push(`${file}: <${node.name}> uses unsupported CSS styling; use explicit source fill attributes.`);
    }
    const fill = attributes.fill;
    if (fill !== undefined && fill !== canonicalFill && fill !== 'none') {
      failures.push(`${file}: <${node.name}> has fill=${JSON.stringify(fill)}; expected ${canonicalFill} or structural none.`);
    }
    if (node.name === 'path') {
      const hasGeometry = Boolean(attributes.d?.trim());
      if (!hasGeometry) {
        failures.push(`${file}: <path> requires nonempty path geometry.`);
      }
      if (frame.fill !== canonicalFill) {
        failures.push(`${file}: <path> has effective fill=${JSON.stringify(frame.fill)}; every painted path must resolve to ${canonicalFill}, not implicit black or none.`);
      }
      hasCanonicalPaint ||= frame.supported && hasGeometry && frame.fill === canonicalFill;
    }
  });
  parser.on('closetag', () => {
    frames.pop();
  });
  parser.write(content).close();
  if (!hasCanonicalPaint) {
    failures.push(`${file}: No canonical painted path geometry. Provide a nonempty supported path with effective fill ${canonicalFill}.`);
  }
}