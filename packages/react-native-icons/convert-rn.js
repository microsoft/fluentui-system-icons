// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const svgr = require('@svgr/core');
const fs = require('fs');
const path = require('path');
const argv = require('yargs').boolean('selector').default('selector', false).option('native', {
  type: 'boolean',
}).argv;
const _ = require('lodash');

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;
const REACT_NATIVE = argv.native;
const CHUNK_SIZE = 500;

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

function processFiles(src, dest) {
  /** @type string[] */
  const indexContents = [];
  const icons = processFolder(src, true);
  const sizedIcons = processFolder(src, false);
  sharePathData(icons, sizedIcons);

  // make file for resizeable icons
  const iconPath = path.join(dest, 'icons');
  const iconContents = chunkIcons(icons);

  if (fs.existsSync(iconPath)) {
    fs.rmSync(iconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(iconPath);

  iconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(iconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './icons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk, (err) => {
      if (err) throw err;
    });
  });

  // make file for sized icons
  const sizedIconPath = path.join(dest, 'sizedIcons');
  const sizedIconContents = chunkIcons(sizedIcons);
  if (fs.existsSync(sizedIconPath)) {
    fs.rmSync(sizedIconPath, { recursive: true, force: true });
  }
  fs.mkdirSync(sizedIconPath);

  sizedIconContents.forEach((chunk, i) => {
    const chunkFileName = `chunk-${i}`;
    const chunkPath = path.resolve(sizedIconPath, `${chunkFileName}.tsx`);
    indexContents.push(`export * from './sizedIcons/${chunkFileName}'`);
    fs.writeFileSync(chunkPath, chunk, (err) => {
      if (err) throw err;
    });
  });

  const indexPath = path.join(dest, 'index.tsx');
  // Finally add the interface definition and then write out the index.
  indexContents.push("export type { FluentIconsProps } from './utils/FluentIconsProps.types'");
  indexContents.push("export { default as wrapIcon } from './utils/wrapIcon'");
  indexContents.push("export { useIconState } from './utils/useIconState'");

  fs.writeFileSync(indexPath, indexContents.join('\n'), (err) => {
    if (err) throw err;
  });
}

/**
 * Process a folder of svg files and convert them to React components, following naming patterns for the FluentUI System Icons
 * @param {string} srcPath
 * @param {boolean} resizable
 * @returns {{ file: string, name: string, code: string }[]}
 */
function processFolder(srcPath, resizable) {
  var files = fs.readdirSync(srcPath);

  // These options will be passed to svgr/core
  // See https://react-svgr.com/docs/options/ for more info
  function getSvgrOptions(file, isResizable) {
    const isColorIcon = file.includes('_color.svg');

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

  const iconExports = [];
  files.forEach(function (file) {
    var srcFile = path.join(srcPath, file);
    if (fs.lstatSync(srcFile).isDirectory()) {
      // for now, ignore subdirectories/localization, until we have a plan for handling it
      // Will likely involve appending the lang/locale to the end of the friendly name for the unique component name
      // var joinedDestPath = path.join(destPath, file)
      // if (!fs.existsSync(joinedDestPath)) {
      //   fs.mkdirSync(joinedDestPath);
      // }
      // indexContents += processFolder(srcFile, joinedDestPath)
    } else {
      if (resizable && !file.includes('20')) {
        return;
      }
      var iconName = file.substring(0, file.length - 4); // strip '.svg'
      iconName = iconName.replace('ic_fluent_', ''); // strip ic_fluent_
      iconName = resizable ? iconName.replace('20', '') : iconName;
      var destFilename = _.camelCase(iconName); // We want them to be camelCase, so access_time would become accessTime here
      destFilename = destFilename.replace(destFilename.substring(0, 1), destFilename.substring(0, 1).toUpperCase()); // capitalize the first letter

      var iconContent = fs.readFileSync(srcFile, { encoding: 'utf8' });

      var jsxCode = svgr.transform
        .sync(iconContent, getSvgrOptions(file, resizable), { filePath: file })
        .trim()
        .replace(/;$/, '');

      // Complex artwork still needs explicit fills; simple shapes inherit from FluentSvg.
      var body = jsxCode.includes('{primaryFill}')
        ? `{\n  const { primaryFill = 'currentColor' } = props;\n  return ${jsxCode};\n}`
        : jsxCode;
      var jsCode = `
export const ${destFilename} = /*#__PURE__*/(props: FluentIconsProps<SvgProps>) => ${body};
`;
      iconExports.push({ file, name: destFilename, code: jsCode });
    }
  });

  return iconExports;
}

function sharePathData(icons, sizedIcons) {
  const sizedByFile = new Map(sizedIcons.map((icon) => [icon.file, icon]));
  icons.forEach((icon, index) => {
    // Keep legacy aliases from names containing "20" separate from actual size-20 pairs.
    if (!/_20_(filled|regular|light|color)\.svg$/.test(icon.file)) {
      return;
    }
    const sized = sizedByFile.get(icon.file);
    if (!sized) {
      return;
    }
    const paths = (code) => Array.from(code.matchAll(/\bd="([^"]*)"/g), (match) => match[1]);
    const resizablePaths = paths(icon.code);
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
      return;
    }
    const replacePaths = (code) =>
      code.replace(/\bd="([^"]*)"/g, (attribute, data) => (shared.has(data) ? `d={${shared.get(data)}}` : attribute));
    const sharedCode = declarations.join('') + replacePaths(icon.code) + replacePaths(sized.code);
    // Preserve sized-chunk imports while both direct components share module-local strings.
    const reexport = `export { ${sized.name} } from '../icons/chunk-${Math.floor(index / CHUNK_SIZE)}';`;
    if (sharedCode.length + reexport.length < icon.code.length + sized.code.length) {
      icon.code = sharedCode;
      sized.code = reexport;
    }
  });
}

function chunkIcons(icons) {
  const iconExports = icons.map((icon) => icon.code);
  // chunk all icons into separate files to keep build reasonably fast
  /** @type string[][] */
  const iconChunks = [];
  while (iconExports.length > 0) {
    iconChunks.push(iconExports.splice(0, CHUNK_SIZE));
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
          const inheritedFills = [];
          let canInheritFill = !isColorIcon;
          path.traverse({
            JSXOpeningElement(child) {
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
