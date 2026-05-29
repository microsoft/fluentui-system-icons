// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// Generates one .tsx file per icon for optimal tree-shaking with Metro bundler.
// Unlike the chunked approach in react-native-icons (500 icons/file), this produces
// per-icon files so that Metro's module resolution only pulls in what's imported.

const svgr = require('@svgr/core');
const fs = require('fs');
const path = require('path');
const argv = require('yargs')
  .option('source', { type: 'string', demandOption: true })
  .option('dest', { type: 'string', demandOption: true })
  .argv;
const _ = require('lodash');

const SRC_PATH = argv.source;
const DEST_PATH = argv.dest;

const rnSvgElements = [
  'Path', 'Circle', 'Ellipse', 'G', 'Line', 'Polygon', 'Polyline',
  'Rect', 'Symbol', 'Text', 'Use', 'Defs', 'LinearGradient',
  'RadialGradient', 'Stop', 'ClipPath', 'Pattern', 'Mask',
];

if (!fs.existsSync(DEST_PATH)) {
  fs.mkdirSync(DEST_PATH, { recursive: true });
}

const iconsDir = path.join(DEST_PATH, 'icons');
if (fs.existsSync(iconsDir)) {
  fs.rmSync(iconsDir, { recursive: true, force: true });
}
fs.mkdirSync(iconsDir, { recursive: true });

const sizedIconsDir = path.join(DEST_PATH, 'sizedIcons');
if (fs.existsSync(sizedIconsDir)) {
  fs.rmSync(sizedIconsDir, { recursive: true, force: true });
}
fs.mkdirSync(sizedIconsDir, { recursive: true });

const files = fs.readdirSync(SRC_PATH).filter(f => !fs.lstatSync(path.join(SRC_PATH, f)).isDirectory());

// Process resizable icons (only 20px variants, with size stripped from name)
const resizableIcons = processIcons(files, true);
// Process sized icons (all variants, with size in name)
const sizedIcons = processIcons(files, false);

// Write per-icon files
writeIconFiles(resizableIcons, iconsDir);
writeIconFiles(sizedIcons, sizedIconsDir);

// Update the index to re-export utilities only (icons are imported directly by subpath)
const indexPath = path.join(DEST_PATH, 'index.tsx');
const indexContent = [
  "export { FluentIconsProps } from './utils/FluentIconsProps.types';",
  "export { default as wrapIcon } from './utils/wrapIcon';",
  "export { useIconState } from './utils/useIconState';",
].join('\n');
fs.writeFileSync(indexPath, indexContent);

console.log(`Generated ${resizableIcons.length} resizable icon files in src/icons/`);
console.log(`Generated ${sizedIcons.length} sized icon files in src/sizedIcons/`);

function processIcons(files, resizable) {
  const results = [];

  for (const file of files) {
    if (!file.endsWith('.svg')) continue;
    if (resizable && !file.includes('20')) continue;

    const srcFile = path.join(SRC_PATH, file);
    let iconName = file.slice(0, -4); // strip '.svg'
    iconName = iconName.replace('ic_fluent_', '');
    iconName = resizable ? iconName.replace('20', '') : iconName;

    let destFilename = _.camelCase(iconName);
    destFilename = destFilename.charAt(0).toUpperCase() + destFilename.slice(1);

    const iconContent = fs.readFileSync(srcFile, { encoding: 'utf8' });
    const isColorIcon = file.includes('_color.svg');

    const options = {
      template: fileTemplate,
      expandProps: 'end',
      replaceAttrValues: isColorIcon ? {} : { '#212121': '{primaryFill}' },
      typescript: true,
      prettier: true,
      native: true,
    };

    if (resizable) {
      options.icon = true;
    }

    const jsxCode = svgr.transform.sync(iconContent, options, { filePath: file });

    const componentCode = isColorIcon
      ? `const ${destFilename}Icon = (props) => {\n  return ${jsxCode};\n}`
      : `const ${destFilename}Icon = (props) => {\n  const { fill: primaryFill = 'currentColor' } = props;\n  return ${jsxCode};\n}`;

    const exportLine = `export const ${destFilename} = /*#__PURE__*/wrapIcon(/*#__PURE__*/${destFilename}Icon, '${destFilename}');`;

    results.push({
      filename: destFilename,
      componentCode,
      exportLine,
      jsxCode,
    });
  }

  return results;
}

function writeIconFiles(icons, destDir) {
  for (const icon of icons) {
    const { filename, componentCode, exportLine, jsxCode } = icon;

    // Detect which react-native-svg elements are used
    const usedElements = rnSvgElements.filter(el =>
      new RegExp(`<${el}\\b`).test(jsxCode)
    );

    const svgImports = usedElements.length > 0
      ? `import {Svg, ${usedElements.join(', ')}} from "react-native-svg";`
      : `import {Svg} from "react-native-svg";`;

    const fileContent = [
      `import * as React from "react";`,
      svgImports,
      `import wrapIcon from "../utils/wrapIcon";`,
      '',
      componentCode,
      '',
      exportLine,
      '',
    ].join('\n');

    const filePath = path.join(destDir, `${filename}.tsx`);
    fs.writeFileSync(filePath, fileContent);
  }
}

function fileTemplate(variables, { tpl }) {
  variables.componentName = variables.componentName.substring(3);
  variables.componentName = variables.componentName.replace('IcFluent', '');

  return tpl`
  ${variables.jsx}
 
`;
}
