// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Generates the icon submodules of this package from a folder of svg-icons SVGs.
// The generator itself is src/codegen, which Node runs directly by stripping its types.

const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');

const CHUNK_SIZE = 500;
// The generated code imports the utilities relatively, so it builds with any module resolution mode.
const UTIL_PATH = '../utils';

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

async function main() {
  const {
    values: { source: SRC_PATH, dest: DEST_PATH },
  } = parseArgs({
    options: {
      source: { type: 'string' },
      dest: { type: 'string' },
    },
  });

  if (!SRC_PATH) {
    throw new Error('Icon source folder not specified by --source');
  }
  if (!DEST_PATH) {
    throw new Error('Output destination folder not specified by --dest');
  }

  if (!fs.existsSync(DEST_PATH)) {
    fs.mkdirSync(DEST_PATH);
  }

  processFiles(await import('./src/codegen/index.ts'), SRC_PATH, DEST_PATH);
}

/**
 * Generate one submodule per style (`<dest>/<style>/`), each with chunk files and an `index.ts` entry point,
 * plus a root index that re-exports every chunk directly.
 * @param {typeof import('./src/codegen/index.ts')} codegen
 */
function processFiles(codegen, src, dest) {
  const iconGroups = readIconGroups(codegen, src);

  /** @type string[] */
  const indexContents = [];
  for (const style of codegen.ICON_STYLES) {
    const components = iconGroups.get(style).map((icons) => convertGroup(codegen, icons));
    const chunkNames = writeStyle(codegen, path.join(dest, style), components);
    indexContents.push(...chunkNames.map((chunk) => `export * from './${style}/${chunk}'`));
  }

  // Finally add the interface definition and then write out the index.
  indexContents.push("export type { FluentIconsProps } from './utils/FluentIconsProps.types'");
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon'");
  indexContents.push("export { useIconState } from './utils/useIconState'");
  indexContents.push("export { FluentSvg } from './utils/fluentSvg'");
  indexContents.push("export type { FluentSvgProps } from './utils/fluentSvg'");

  fs.writeFileSync(path.join(dest, 'index.tsx'), indexContents.join('\n'));
}

/**
 * Read the svg files and group them by style and icon name, so every size of an icon is generated together.
 * Subdirectories are ignored for now, until we have a plan for handling localization.
 * That will likely involve appending the lang/locale to the end of the friendly name for the unique component name.
 * @param {typeof import('./src/codegen/index.ts')} codegen
 * @param {string} srcPath
 * @returns {Map<string, { name: string, srcFile: string, size: number }[][]>}
 */
function readIconGroups(codegen, srcPath) {
  const groups = new Map(codegen.ICON_STYLES.map((style) => [style, new Map()]));
  const files = fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((entry) => !entry.isDirectory() && entry.name.endsWith('.svg'))
    .map((entry) => entry.name)
    .sort();

  for (const file of files) {
    const name = file.slice(0, -'.svg'.length).replace('ic_fluent_', '');
    const { base, size, style } = codegen.parseIconName(name);
    if (!groups.get(style).has(base)) {
      groups.get(style).set(base, []);
    }
    groups
      .get(style)
      .get(base)
      .push({ name, srcFile: path.join(srcPath, file), size });
  }

  return new Map(
    codegen.ICON_STYLES.map((style) => [
      style,
      [...groups.get(style).values()].map((icons) => icons.sort((a, b) => a.size - b.size)),
    ]),
  );
}

/**
 * Convert every size of one icon (same name and style) to React components.
 * @param {typeof import('./src/codegen/index.ts')} codegen
 * @param {{ name: string, srcFile: string }[]} icons
 * @returns {string[]} the code of each component
 */
function convertGroup(codegen, icons) {
  return icons.flatMap(({ name, srcFile }) =>
    codegen.generateIconComponents({ name, svg: fs.readFileSync(srcFile, 'utf8') }, { utilPath: UTIL_PATH }),
  );
}

/**
 * Write the chunk files and index for one style directory. Icon groups are never split across chunks.
 * @param {typeof import('./src/codegen/index.ts')} codegen
 * @param {string} dir
 * @param {string[][]} groups component code for each icon group
 * @returns {string[]} chunk module names
 */
function writeStyle(codegen, dir, groups) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const chunks = chunkGroups(groups);
  const chunkNames = chunks.map((_, i) => `chunk-${i}`);
  chunks.forEach((chunk, i) =>
    fs.writeFileSync(path.join(dir, `${chunkNames[i]}.tsx`), codegen.renderIconModule(chunk, { utilPath: UTIL_PATH })),
  );

  const indexContents = chunkNames.map((chunk) => `export * from './${chunk}'`);
  fs.writeFileSync(
    path.join(dir, 'index.ts'),
    (indexContents.length ? indexContents : ['export {}']).join('\n') + '\n',
  );
  return chunkNames;
}

/**
 * Chunk the icon groups into separate files to keep the build reasonably fast.
 * A group always stays whole in one chunk, so every size of an icon lives in the same file.
 * @param {string[][]} groups component code for each icon group
 * @returns {string[][]} the component code of each chunk file
 */
function chunkGroups(groups) {
  /** @type string[][] */
  const chunks = [];
  for (const group of groups) {
    const current = chunks[chunks.length - 1];
    if (current && current.length + group.length <= CHUNK_SIZE) {
      current.push(...group);
    } else {
      chunks.push([...group]);
    }
  }
  return chunks;
}
