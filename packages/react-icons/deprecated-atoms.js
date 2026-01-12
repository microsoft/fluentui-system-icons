// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 * Re-creates individual atoms for 'color' icon to avoid breaking changes.
 * This is a temporary workaround for icons whose names match style variants.
 *
 * NOTE: this will be removed in the next major release.
 * @see https://github.com/microsoft/fluentui-system-icons/issues/928
 *
 * @param {string} destPath - The destination path where atoms are written.
 * @param {'svg' | 'font'} type - The type of icons being processed.
 */
function handleDeprecatedColorAtoms(destPath, type) {
  const colorFile = path.join(destPath, 'color.tsx');
  if (!fs.existsSync(colorFile)) {
    console.log(`[deprecated atoms] No color.tsx found in ${destPath}, skipping deprecated atom handling.`);
    return;
  }

  const deprecatedMsg = `/** @deprecated use from @fluentui/${type}/color import. This was generated for backward compatibility and will be removed in next major release */`;
  const generatedFiles = []

  const content = fs.readFileSync(colorFile, 'utf8');
  const lines = content.split('\n');
  const header = lines.filter((line) => line.startsWith('"use client"') || line.startsWith('import'));
  const exports = lines.filter((line) => line.startsWith('export const'));


  for (const exp of exports) {
    const match = exp.match(/export const (\w+)/);
    if (match) {
      const exportName = match[1];
      const fileName = _.kebabCase(exportName) + '.tsx';
      const filePath = path.join(destPath, fileName);

      // this should never happen, as naming of symbols always contains <Size><Style>. Adding for additional safety
      if (fileName === 'color.tsx') {
        continue; // don't overwrite color.tsx
      }

      const fileContent = [...header, '', deprecatedMsg, exp].join('\n') + '\n';
      fs.writeFileSync(filePath, fileContent, 'utf8');
      generatedFiles.push(fileName);
    }
  }

  console.log(`[deprecated atoms] Created deprecated color atoms in ${destPath}: ${generatedFiles.join(', ')}`);
}

module.exports = { handleDeprecatedColorAtoms };
