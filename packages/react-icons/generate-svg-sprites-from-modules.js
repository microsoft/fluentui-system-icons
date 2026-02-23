#!/usr/bin/env node

// @ts-check

/**
 * @deprecated This standalone sprite generator is deprecated.
 * Use the integrated sprite generation in `convert.js --spriteDest <path>` instead,
 * which produces sprite output as part of the main convert pipeline.
 * This file is kept for backward compatibility only.
 */

/*
 * Generates per-module SVG sprites for react-icons "svg-sprite" atoms.
 *
 * Input:
 *   packages/react-icons/src/atoms/svg/*.tsx
 * Output:
 *   packages/react-icons/src/atoms/svg-sprite/*.svg (same basename)
 *   packages/react-icons/src/atoms/svg-sprite/*.tsx (same basename)
 *
 * The generated SVG sprite contains <symbol> entries for every icon ID referenced
 * by the module, with paths sourced from the corresponding atoms in:
 *   packages/react-icons/src/atoms/svg/*.tsx
 */

'use strict';

console.warn(
  '[DEPRECATED] generate-svg-sprites-from-modules.js is deprecated. ' +
    'Use the integrated sprite generation via convert.js --spriteDest instead.',
);

const fs = require('node:fs');
const path = require('node:path');
const yargs = require('yargs/yargs');

const REPO_ROOT = path.join(__dirname, '..', '..');
const DEFAULT_MODULES_DIR = path.join(__dirname, 'src', 'atoms', 'svg-sprite');
const DEFAULT_SVG_ATOMS_DIR = path.join(__dirname, 'src', 'atoms', 'svg');

/**
 * @param {unknown} error
 * @returns {string}
 */
function getErrorMessage(error) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

/**
 * @param {unknown} error
 * @returns {string}
 */
function formatError(error) {
  if (error instanceof Error) {
    return error.stack ? error.stack : error.message;
  }
  return String(error);
}

/**
 * @param {string} dirPath
 * @param {string} extension
 * @returns {string[]}
 */
function getAllFilesRecursive(dirPath, extension) {
  /** @type {string[]} */
  const results = [];

  /** @param {string} current */
  function walk(current) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
        continue;
      }
      if (entry.isFile() && fullPath.endsWith(extension)) {
        results.push(fullPath);
      }
    }
  }

  walk(dirPath);
  return results.sort();
}

/**
 * @param {string} width
 * @returns {string}
 */
function viewBoxWidthFromIconWidth(width) {
  if (width === '1em') return '20';
  if (/^\d+$/.test(width)) return width;
  return '20';
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeAttr(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * @param {string} value
 * @returns {string}
 */
function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Prefixes all internal SVG ids (and references) with a namespace.
 * @param {string} rawSvg
 * @param {string} namespace
 * @returns {string}
 */
function namespaceSvgIds(rawSvg, namespace) {
  let output = rawSvg;
  /** @type {Set<string>} */
  const ids = new Set();

  const idRegex = /\bid="([^"]+)"/g;
  let match;
  while ((match = idRegex.exec(rawSvg)) !== null) {
    ids.add(match[1]);
  }

  for (const id of Array.from(ids)) {
    const newId = `${namespace}__${id}`;
    const escaped = escapeRegExp(id);

    output = output.replace(new RegExp(`\\bid="${escaped}"`, 'g'), `id="${newId}"`);
    output = output.replace(new RegExp(`url\\(#${escaped}\\)`, 'g'), `url(#${newId})`);
    output = output.replace(new RegExp(`"#${escaped}"`, 'g'), `"#${newId}"`);
  }

  return output;
}

/**
 * Parses a react-icons atoms/svg TSX module and returns a map:
 *   iconId -> { width, paths }
 * @param {string} content
 * @param {string} filePathForErrors
 * @returns {Map<string, { width: string, paths?: string[], rawSvg?: string }>}
 */
function parseSvgAtomsTsx(content, filePathForErrors) {
  /** @type {Map<string, { width: string, paths?: string[], rawSvg?: string }>} */
  const byId = new Map();

  // Non-color icons: createFluentIcon('Id', "20", ["M...", ...])
  const pathsRegex =
    /createFluentIcon\(\s*'([^']+)'\s*,\s*"([^"]+)"\s*,\s*(\[[\s\S]*?\])\s*(?:,\s*\{[\s\S]*?\})?\s*\)/g;

  let match;
  while ((match = pathsRegex.exec(content)) !== null) {
    const [, iconId, width, pathsArray] = match;
    const paths = pathsArray.match(/"([^"]*)"/g)?.map((p) => p.slice(1, -1)) ?? [];
    byId.set(iconId, { width, paths });
  }

  // Color icons: createFluentIcon('Id', "20", `<path .../>...`, { color: true })
  const rawSvgRegex =
    /createFluentIcon\(\s*'([^']+)'\s*,\s*"([^"]+)"\s*,\s*`([\s\S]*?)`\s*(?:,\s*\{[\s\S]*?\})?\s*\)/g;

  while ((match = rawSvgRegex.exec(content)) !== null) {
    const [, iconId, width, rawSvg] = match;
    byId.set(iconId, { width, rawSvg });
  }

  if (byId.size === 0) {
    throw new Error(`No createFluentIcon(...) calls found in ${filePathForErrors}`);
  }

  return byId;
}

/**
 * Parses a react-icons atoms/svg TSX module and returns entries in file order:
 *   { exportName, iconId, width }
 * @param {string} content
 * @param {string} filePathForErrors
 * @returns {Array<{ exportName: string; iconId: string; width: string }>}
 */
function parseSvgAtomsExports(content, filePathForErrors) {
  /** @type {Array<{ exportName: string; iconId: string; width: string }>} */
  const entries = [];

  // Matches patterns like:
  // export const AccessTimeFilled: FluentIcon = (/*#__PURE__*/createFluentIcon('AccessTimeFilled', "1em", ...))
  const regex =
    /export\s+const\s+(\w+)\s*:\s*FluentIcon\s*=\s*\(\s*\/\*#__PURE__\*\/\s*createFluentIcon\(\s*'([^']+)'\s*,\s*"([^"]+)"/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, exportName, iconId, width] = match;
    entries.push({ exportName, iconId, width });
  }

  if (entries.length === 0) {
    throw new Error(`No icon exports found in ${filePathForErrors}`);
  }

  return entries;
}

/**
 * @param {string} relativeDir
 * @param {string} baseName
 * @param {Array<{ exportName: string; iconId: string; width: string }>} exportsInfo
 * @returns {string}
 */
function generateSpriteModuleTsx(relativeDir, baseName, exportsInfo) {
  const importPathSvg = `./${baseName}.svg`;
  const header =
    '"use client";\n' +
    "import type { FluentIcon } from '../../utils/svg-icon';\n" +
    "import { createFluentIcon } from '../../utils/svg-icon';\n" +
    `import sprite from '${importPathSvg}';\n\n`;

  const body = exportsInfo
    .map(
      /** @param {{ exportName: string; iconId: string; width: string }} e */
      (e) =>
        `export const ${e.exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${e.iconId}', "${e.width}",sprite));`,
    )
    .join('\n');

  // relativeDir currently unused but reserved if we later need different import depth.
  void relativeDir;

  return `${header}${body}\n`;
}

/**
 * Parses a svg-sprites TSX module and returns the ordered list of icon IDs referenced.
 * Expected patterns (generated formats):
 *   createFluentIcon('AccessTimeFilled', "1em",sprite)
 *   createFluentIcon(sprite,'AccessTimeFilled', "1em")
 * @param {string} content
 * @param {string} filePathForErrors
 * @returns {string[]}
 */
function parseSpriteModuleTsx(content, filePathForErrors) {
  /** @type {string[]} */
  const iconIds = [];
  // Supports both:
  // - createFluentIcon('IconId', "20", sprite)
  // - createFluentIcon(sprite, 'IconId', "20")
  // The optional first argument is only consumed when it is NOT a quoted string.
  const regex = /createFluentIcon\(\s*(?:[^'"][^,]*,\s*)?'([^']+)'\s*,\s*"([^"]+)"/g;

  let match;
  while ((match = regex.exec(content)) !== null) {
    const [, iconId] = match;
    iconIds.push(iconId);
  }

  if (iconIds.length === 0) {
    throw new Error(`No createFluentIcon(..., 'IconId', ...) calls found in ${filePathForErrors}`);
  }

  // Preserve first-seen order, remove duplicates
  const seen = new Set();
  const orderedUnique = [];
  for (const iconId of iconIds) {
    if (!seen.has(iconId)) {
      seen.add(iconId);
      orderedUnique.push(iconId);
    }
  }

  return orderedUnique;
}

/**
 * @param {string[]} iconIds
 * @param {Map<string, { width: string, paths?: string[], rawSvg?: string }>} atomsById
 * @param {string} outputFilePath
 * @returns {string}
 */
function generateSpriteSvg(iconIds, atomsById, outputFilePath) {
  const symbols = iconIds.map((iconId) => {
    const atom = atomsById.get(iconId);
    if (!atom) {
      throw new Error(`IconId "${iconId}" not found in source atoms for ${outputFilePath}`);
    }

    const viewBoxWidth = viewBoxWidthFromIconWidth(atom.width);

    if (atom.rawSvg) {
      const namespaced = namespaceSvgIds(atom.rawSvg, iconId);
      return `  <symbol id="${escapeAttr(iconId)}" viewBox="0 0 ${escapeAttr(viewBoxWidth)} ${escapeAttr(
        viewBoxWidth,
      )}">\n${namespaced}\n  </symbol>`;
    }

    const paths = (atom.paths ?? []).map((d) => `    <path d="${escapeAttr(d)}"/>`).join('\n');
    return `  <symbol id="${escapeAttr(iconId)}" viewBox="0 0 ${escapeAttr(viewBoxWidth)} ${escapeAttr(
      viewBoxWidth,
    )}">\n${paths}\n  </symbol>`;
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">',
    ...symbols,
    '</svg>',
    '',
  ].join('\n');
}

/**
 * @param {string[]} argv
 * @returns {{ modulesDir: string; svgAtomsDir: string; generateModules: boolean; verbose: boolean; limit: number }}
 */
function parseArgs(argv) {
  const parsed = yargs(argv.slice(2))
    .scriptName('generate-svg-sprites-from-modules')
    .usage('Usage: $0 [options]')
    .option('modulesDir', {
      type: 'string',
      describe: 'Directory containing .tsx sprite modules',
      default: DEFAULT_MODULES_DIR,
      coerce: (val) => path.resolve(process.cwd(), val),
    })
    .option('svgAtomsDir', {
      type: 'string',
      describe: 'Directory containing SVG atoms (.tsx) with createFluentIcon(...) paths',
      default: DEFAULT_SVG_ATOMS_DIR,
      coerce: (val) => path.resolve(process.cwd(), val),
    })
    .option('generateModules', {
      type: 'boolean',
      describe:
        'Generate svg-sprite TSX modules for every atoms/svg TSX file, then generate matching .svg sprites (recommended). Use --no-generateModules to only process existing modulesDir files.',
      default: true,
    })
    .option('verbose', {
      type: 'boolean',
      describe: 'Log every generated file (can be noisy for full generation).',
      default: false,
    })
    .option('limit', {
      type: 'number',
      describe: 'Limit the number of atom files to process (0 = no limit). Useful for debugging.',
      default: 0,
    })
    .alias('modulesDir', 'modules-dir')
    .alias('svgAtomsDir', 'svg-atoms-dir')
    .alias('generateModules', 'generate-modules')
    .help('help')
    .alias('help', 'h')
    .strict().argv;

  return {
    modulesDir: parsed.modulesDir,
    svgAtomsDir: parsed.svgAtomsDir,
    generateModules: Boolean(parsed.generateModules),
    verbose: Boolean(parsed.verbose),
    limit: Number(parsed.limit) || 0,
  };
}

function main() {
  const { modulesDir, svgAtomsDir, generateModules, verbose, limit } = parseArgs(process.argv);

  if (!fs.existsSync(svgAtomsDir)) {
    throw new Error(`svgAtomsDir does not exist: ${svgAtomsDir}`);
  }

  try {
    fs.mkdirSync(modulesDir, { recursive: true });
  } catch (error) {
    throw new Error(`Failed to create modulesDir: ${modulesDir}\n${getErrorMessage(error)}`);
  }

  if (generateModules) {
    let atomFiles = getAllFilesRecursive(svgAtomsDir, '.tsx');
    if (limit > 0) {
      atomFiles = atomFiles.slice(0, limit);
    }
    if (atomFiles.length === 0) {
      // eslint-disable-next-line no-console
      console.log(`No .tsx atom files found in ${svgAtomsDir}`);
      return;
    }

    // eslint-disable-next-line no-console
    console.log(`Generating svg-sprites modules + sprites from ${atomFiles.length} atom file(s)...`);

    let writtenModules = 0;
    let writtenSprites = 0;

    for (let i = 0; i < atomFiles.length; i++) {
      const atomFilePath = atomFiles[i];
      const relativeFromAtoms = path.relative(svgAtomsDir, atomFilePath);
      const relativeDir = path.dirname(relativeFromAtoms);
      const baseName = path.basename(atomFilePath, '.tsx');

      const outDir = path.join(modulesDir, relativeDir);
      fs.mkdirSync(outDir, { recursive: true });

      const moduleOutPath = path.join(outDir, `${baseName}.tsx`);
      const spriteOutPath = path.join(outDir, `${baseName}.svg`);

      const atomContent = fs.readFileSync(atomFilePath, 'utf8');
      const atomsById = parseSvgAtomsTsx(atomContent, atomFilePath);
      const exportsInfo = parseSvgAtomsExports(atomContent, atomFilePath);
      const iconIds = exportsInfo.map((e) => e.iconId);

      const moduleTsx = generateSpriteModuleTsx(relativeDir, baseName, exportsInfo);
      fs.writeFileSync(moduleOutPath, moduleTsx, 'utf8');
      writtenModules++;

      const spriteSvg = generateSpriteSvg(iconIds, atomsById, spriteOutPath);
      fs.writeFileSync(spriteOutPath, spriteSvg, 'utf8');
      writtenSprites++;

      if (verbose) {
        // eslint-disable-next-line no-console
        console.log(`  ✅ ${path.relative(REPO_ROOT, moduleOutPath)}`);
        // eslint-disable-next-line no-console
        console.log(`  ✅ ${path.relative(REPO_ROOT, spriteOutPath)} (${iconIds.length} symbol(s))`);
      } else if (i > 0 && i % 500 === 0) {
        // eslint-disable-next-line no-console
        console.log(`  … processed ${i}/${atomFiles.length}`);
      }
    }

    // eslint-disable-next-line no-console
    console.log(`Done. Wrote ${writtenModules} module(s) and ${writtenSprites} sprite file(s).`);
    return;
  }

  // Only process existing modulesDir modules
  const moduleFiles = getAllFilesRecursive(modulesDir, '.tsx');
  if (moduleFiles.length === 0) {
    // eslint-disable-next-line no-console
    console.log(`No .tsx modules found in ${modulesDir}`);
    return;
  }

  // eslint-disable-next-line no-console
  console.log(`Generating per-module sprites from ${moduleFiles.length} module(s)...`);

  let written = 0;
  for (const modulePath of moduleFiles) {
    const relativeFromModules = path.relative(modulesDir, modulePath);
    const relativeDir = path.dirname(relativeFromModules);
    const baseName = path.basename(modulePath, '.tsx');

    const spriteOutputPath = path.join(modulesDir, relativeDir, `${baseName}.svg`);
    const svgAtomPath = path.join(svgAtomsDir, relativeDir, `${baseName}.tsx`);

    if (!fs.existsSync(svgAtomPath)) {
      throw new Error(
        [
          `Missing source svg atom for module: ${modulePath}`,
          `Expected to find: ${svgAtomPath}`,
        ].join('\n'),
      );
    }

    const moduleContent = fs.readFileSync(modulePath, 'utf8');
    const atomContent = fs.readFileSync(svgAtomPath, 'utf8');

    const iconIds = parseSpriteModuleTsx(moduleContent, modulePath);
    const atomsById = parseSvgAtomsTsx(atomContent, svgAtomPath);

    const spriteSvg = generateSpriteSvg(iconIds, atomsById, spriteOutputPath);
    fs.writeFileSync(spriteOutputPath, spriteSvg, 'utf8');
    written++;

    if (verbose) {
      // eslint-disable-next-line no-console
      console.log(`  ✅ ${path.relative(REPO_ROOT, spriteOutputPath)} (${iconIds.length} symbol(s))`);
    }
  }

  // eslint-disable-next-line no-console
  console.log(`Done. Wrote ${written} sprite file(s).`);
}

try {
  main();
} catch (error) {
  // eslint-disable-next-line no-console
  console.error('❌ Failed to generate sprites:', formatError(error));
  process.exit(1);
}
