// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const svgr = require('@svgr/core');
const fs = require('node:fs');
const path = require('node:path');
const { parseArgs } = require('node:util');

const {
  values: { source: SRC_PATH, dest: DEST_PATH, native: REACT_NATIVE },
} = parseArgs({
  options: {
    source: { type: 'string' },
    dest: { type: 'string' },
    native: { type: 'boolean' },
  },
});
const CHUNK_SIZE = 500;
const STYLES = ['regular', 'filled', 'light', 'color'];
// <name>_<size>_<style>, e.g. access_time_20_regular
const ICON_STEM = /^(.+)_(\d+)_([a-z]+)$/;
const rnSvgElements = [
  'Svg',
  'Path',
  'Circle',
  'Ellipse',
  'G',
  'Line',
  'Polygon',
  'Polyline',
  'Rect',
  'Symbol',
  'Text',
  'Use',
  'Defs',
  'LinearGradient',
  'RadialGradient',
  'Stop',
  'ClipPath',
  'Pattern',
  'Mask',
];

if (!SRC_PATH) {
  throw new Error('Icon source folder not specified by --source');
}
if (!DEST_PATH) {
  throw new Error('Output destination folder not specified by --dest');
}

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH);
}

processFiles(SRC_PATH, DEST_PATH);

/**
 * Generate one submodule per style (`<dest>/<style>/`), each with chunk files and an `index.ts` entry point,
 * plus a root index that re-exports every chunk directly.
 */
function processFiles(src, dest) {
  const iconGroups = readIconGroups(src);

  /** @type string[] */
  const indexContents = [];
  for (const style of STYLES) {
    const chunkNames = writeStyle(path.join(dest, style), iconGroups.get(style).map(convertGroup));
    indexContents.push(...chunkNames.map((chunk) => `export * from './${style}/${chunk}'`));
  }

  // Finally add the interface definition and then write out the index.
  indexContents.push("export type { FluentIconsProps } from './utils/FluentIconsProps.types'");
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon'");
  indexContents.push("export { useIconState } from './utils/useIconState'");

  fs.writeFileSync(path.join(dest, 'index.tsx'), indexContents.join('\n'));
}

/**
 * Read the svg files and group them by style and icon name, so every size of an icon is generated together.
 * Subdirectories are ignored for now, until we have a plan for handling localization.
 * That will likely involve appending the lang/locale to the end of the friendly name for the unique component name.
 * @param {string} srcPath
 * @returns {Map<string, { file: string, srcFile: string, stem: string, size: number, style: string }[][]>}
 */
function readIconGroups(srcPath) {
  const groups = new Map(STYLES.map((style) => [style, new Map()]));
  const files = fs
    .readdirSync(srcPath, { withFileTypes: true })
    .filter((entry) => !entry.isDirectory() && entry.name.endsWith('.svg'))
    .map((entry) => entry.name)
    .sort();

  for (const file of files) {
    const stem = file.slice(0, -'.svg'.length).replace('ic_fluent_', '');
    const [, base, size, style] = ICON_STEM.exec(stem) ?? [];
    if (!groups.has(style)) {
      throw new Error(`Icon file name does not match <name>_<size>_<${STYLES.join('|')}>.svg: ${file}`);
    }
    if (!groups.get(style).has(base)) {
      groups.get(style).set(base, []);
    }
    groups
      .get(style)
      .get(base)
      .push({ file, srcFile: path.join(srcPath, file), stem, size: Number(size), style });
  }

  return new Map(
    STYLES.map((style) => [
      style,
      [...groups.get(style).values()].map((icons) => icons.sort((a, b) => a.size - b.size)),
    ]),
  );
}

/**
 * Write the chunk files and index for one style directory. Icon groups are never split across chunks.
 * @param {string} dir
 * @param {string[][]} groups component code for each icon group
 * @returns {string[]} chunk module names
 */
function writeStyle(dir, groups) {
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });

  const chunks = chunkGroups(groups);
  const chunkNames = chunks.map((_, i) => `chunk-${i}`);
  chunks.forEach((chunk, i) => fs.writeFileSync(path.join(dir, `${chunkNames[i]}.tsx`), chunk));

  const indexContents = chunkNames.map((chunk) => `export * from './${chunk}'`);
  fs.writeFileSync(
    path.join(dir, 'index.ts'),
    (indexContents.length ? indexContents : ['export {}']).join('\n') + '\n',
  );
  return chunkNames;
}

/**
 * Convert every size of one icon (same name and style) to React components, following naming patterns for the FluentUI System Icons
 * @param {{ file: string, srcFile: string, stem: string, size: number, style: string }[]} icons
 * @returns {string[]} the code of each component
 */
function convertGroup(icons) {
  return icons.flatMap(convertIcon);
}

/**
 * Convert one svg file to its sized component and, for names containing "20", its resizable component.
 * @param {{ file: string, srcFile: string, stem: string, size: number, style: string }} icon
 * @returns {string[]} the code of each component
 */
function convertIcon({ file, srcFile, stem, size, style }) {
  // svg-icons namespaces ids per icon, but react-native-svg scopes ids to each Svg, so the prefix only bloats the output.
  const content = fs.readFileSync(srcFile, { encoding: 'utf8' }).replaceAll(`ic_fluent_${stem}__`, '');
  const isColorIcon = style === 'color';

  // access_time becomes AccessTime
  const sized = toComponent(toPascalCase(stem), content, file, isColorIcon, false);
  if (!file.includes('20')) {
    return [sized.code];
  }
  const resizable = toComponent(toPascalCase(stem.replace('20', '')), content, file, isColorIcon, true);
  // Keep legacy aliases from names containing "20" separate from actual size-20 pairs.
  return size === 20 ? sharePathData(resizable, sized) : [resizable.code, sized.code];
}

/**
 * @param {string} name
 * @param {string} content
 * @param {string} file
 * @param {boolean} isColorIcon
 * @param {boolean} resizable
 * @returns {{ name: string, code: string }}
 */
function toComponent(name, content, file, isColorIcon, resizable) {
  const jsxCode = svgr.transform
    .sync(content, getSvgrOptions(isColorIcon, resizable), { filePath: file })
    .trim()
    .replace(/;$/, '');

  // Complex artwork still needs explicit fills; simple shapes inherit from FluentSvg.
  const body = jsxCode.includes('{primaryFill}')
    ? `{\n  const { primaryFill = 'currentColor' } = props;\n  return ${jsxCode};\n}`
    : jsxCode;
  return {
    name,
    code: `
export const ${name} = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => ${body};
`,
  };
}

// These options will be passed to svgr/core
// See https://react-svgr.com/docs/options/ for more info
function getSvgrOptions(isColorIcon, isResizable) {
  const options = {
    template: fileTemplate,
    expandProps: 'end',
    replaceAttrValues: isColorIcon ? {} : { '#212121': '{primaryFill}' },
    typescript: true,
    prettier: true,
    native: REACT_NATIVE,
    jsx: {
      babelConfig: {
        plugins: [[fluentSvgPlugin, { resizable: isResizable, isColorIcon }]],
      },
    },
  };

  // Add icon: true only if it's not a sized icon
  if (isResizable) {
    options.icon = true;
  }

  return options;
}

/** Split snake_case icon names into letter and digit runs, so `fps_120` becomes `Fps120` and `4k` becomes `4K`. */
function toPascalCase(name) {
  return (name.match(/[A-Za-z]+|\d+/g) ?? [])
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Share path strings between a resizable component and its size-20 sibling, which are generated from the same artwork.
 * Short paths remain inline when sharing would increase code size.
 * @param {{ name: string, code: string }} resizable
 * @param {{ name: string, code: string }} sized
 * @returns {string[]} the code of each component, with shared declarations ahead of the first
 */
function sharePathData(resizable, sized) {
  const paths = (code) => Array.from(code.matchAll(/\bd="([^"]*)"/g), (match) => match[1]);
  const resizablePaths = paths(resizable.code);
  const sizedPaths = paths(sized.code);
  const shared = new Map();
  const declarations = [];
  for (const data of new Set(resizablePaths)) {
    if (!sizedPaths.includes(data)) {
      continue;
    }
    const name = `${sized.name}Path${shared.size}`;
    const declaration = `const ${name} = ${JSON.stringify(data)};\n`;
    const occurrences = [...resizablePaths, ...sizedPaths].filter((value) => value === data).length;
    if (occurrences * (data.length - name.length) <= declaration.length) {
      continue;
    }
    shared.set(data, name);
    declarations.push(declaration);
  }
  if (!shared.size) {
    return [resizable.code, sized.code];
  }
  const replacePaths = (code) =>
    code.replace(/\bd="([^"]*)"/g, (attribute, data) => (shared.has(data) ? `d={${shared.get(data)}}` : attribute));
  const sharedCode = [declarations.join('') + replacePaths(resizable.code), replacePaths(sized.code)];
  return sharedCode.join('').length < resizable.code.length + sized.code.length
    ? sharedCode
    : [resizable.code, sized.code];
}

/**
 * Chunk the icon groups into separate files to keep the build reasonably fast.
 * A group always stays whole in one chunk, so every size of an icon lives in the same file.
 * @param {string[][]} groups component code for each icon group
 * @returns {string[]} the content of each chunk file
 */
function chunkGroups(groups) {
  /** @type string[][] */
  const iconChunks = [];
  for (const group of groups) {
    const current = iconChunks[iconChunks.length - 1];
    if (current && current.length + group.length <= CHUNK_SIZE) {
      current.push(...group);
    } else {
      iconChunks.push([...group]);
    }
  }

  for (const chunk of iconChunks) {
    chunk.unshift(`import { FluentSvg } from "../utils/fluentSvg";`);
    chunk.unshift(`import type { FluentIconsProps } from "../utils/FluentIconsProps.types";`);
    chunk.unshift(`import type { SvgProps } from "react-native-svg";`);

    var foundElements = {};

    chunk.forEach((text) => {
      rnSvgElements.forEach((element) => {
        if (
          !foundElements[element] &&
          (text.match(new RegExp(`<${element}\\b[\\S\\s]+\\/>`)) ||
            text.match(new RegExp(`<${element}\\b[\\s\\S]*>[\\s\\S]*<\\/${element}>`)))
        )
          foundElements[element] = true;
      });
    });

    if (Object.keys(foundElements).length) {
      chunk.unshift(`import { ${Object.keys(foundElements).join(', ')} } from "react-native-svg";`);
    }
  }

  /** @type string[] */
  const chunkContent = iconChunks.map((chunk) => chunk.join('\n'));

  return chunkContent;
}

function fileTemplate(variables, { tpl }) {
  variables.componentName = variables.componentName.substring(3);
  variables.componentName = variables.componentName.replace('IcFluent', '');

  return tpl`
  ${variables.jsx}
 
`;
}

function fluentSvgPlugin({ types: t }, { resizable, isColorIcon }) {
  return {
    visitor: {
      JSXElement: {
        exit(path) {
          // Compact only the root after SVGR has normalized native elements and dimensions.
          if (!path.parentPath.isExpressionStatement()) {
            return;
          }

          const { openingElement, closingElement } = path.node;
          // useIconState always replaces the root fill with primaryFill, so a root fill (e.g. "none" on color icons) is dead code.
          openingElement.attributes = openingElement.attributes.filter((attribute) => attribute.name?.name !== 'fill');
          const inheritedFills = [];
          let canInheritFill = !isColorIcon;
          path.traverse({
            JSXOpeningElement(child) {
              // Canonical web SVGs keep XML namespaces, which react-native-svg does not accept.
              if (/^svg$/i.test(child.node.name.name)) {
                child.node.attributes = child.node.attributes.filter(
                  (attribute) => !['xmlns', 'xmlnsXlink'].includes(attribute.name?.name),
                );
              }
              if (
                child.node !== openingElement &&
                !['Path', 'Circle', 'Ellipse', 'Line', 'Polygon', 'Polyline', 'Rect'].includes(child.node.name.name)
              ) {
                canInheritFill = false;
              }
              for (const attribute of child.node.attributes) {
                if (attribute.name?.name === 'style') {
                  canInheritFill = false;
                }
                if (attribute.name?.name === 'fill') {
                  if (t.isIdentifier(attribute.value?.expression, { name: 'primaryFill' })) {
                    inheritedFills.push([child.node, attribute]);
                  } else {
                    canInheritFill = false;
                  }
                }
              }
            },
          });
          if (canInheritFill) {
            for (const [element, fill] of inheritedFills) {
              element.attributes = element.attributes.filter((attribute) => attribute !== fill);
            }
          }

          const getAttribute = (name) => openingElement.attributes.find((attribute) => attribute.name?.name === name);
          const width = getAttribute('width');
          const height = getAttribute('height');
          const square =
            t.isNumericLiteral(width?.value?.expression) &&
            t.isNumericLiteral(height?.value?.expression) &&
            width.value.expression.value === height.value.expression.value;
          const size = !resizable && square ? width.value.expression.value : undefined;

          // FluentSvg defaults resizable icons to 24x24 and sized icons to `size`.
          if (square && (!resizable || width.value.expression.value === 24)) {
            openingElement.attributes = openingElement.attributes.filter(
              (attribute) => attribute !== width && attribute !== height,
            );
            if (size !== undefined) {
              openingElement.attributes.unshift(t.jsxAttribute(t.jsxIdentifier('size'), width.value));
            }
          }

          const viewBox = getAttribute('viewBox');
          const defaultViewBox = [0, 0, size ?? 20, size ?? 20];
          const coordinates = t.isStringLiteral(viewBox?.value)
            ? viewBox.value.value
                .trim()
                .split(/[\s,]+/)
                .map(Number)
            : [];
          if (
            coordinates.length === 4 &&
            coordinates.every((coordinate, index) => coordinate === defaultViewBox[index])
          ) {
            openingElement.attributes = openingElement.attributes.filter((attribute) => attribute !== viewBox);
          }

          openingElement.name = t.jsxIdentifier('FluentSvg');
          if (closingElement) {
            closingElement.name = t.jsxIdentifier('FluentSvg');
          }
        },
      },
    },
  };
}
