// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

const fs = require('fs');
const _ = require('lodash');

/** @typedef {{ [key: string]: 'mirror' | 'unique' }} RtlMetadata */

/**
 * Returns the standard header lines used in generated icon files.
 * @param {string} relImport - relative import path to createFluentIcon
 * @returns {string[]}
 */
function getCreateFluentIconHeader(relImport) {
  return [
    `"use client";`,
    `import type { FluentIcon } from '${relImport}';`,
    `import { createFluentIcon } from '${relImport}';`,
  ];
}

/**
 * Build export information for a single svg file.
 * Returns null if the file should be skipped (e.g., wrong size for resizable set)
 * @param {{file: string, srcFile: string, resizable: boolean, metadata: RtlMetadata}} opts
 */
function makeIconExport(opts) {
  const { file, srcFile, resizable, metadata } = opts;
  if (resizable && !file.includes('20')) return null;

  let iconName = file.slice(0, -4); // strip .svg
  iconName = iconName.replace('ic_fluent_', '');
  iconName = resizable ? iconName.replace('20', '') : iconName;

  let exportBasename = _.camelCase(iconName);
  const exportName = exportBasename[0].toUpperCase() + exportBasename.slice(1);
  const flipInRtl = metadata[exportName] === 'mirror';
  const isColor = iconName.includes('_color');

  const svgContent = fs.readFileSync(srcFile, 'utf8');
  /**
   * @param {string} key
   */
  const getAttr = (key) => [...svgContent.matchAll(new RegExp(`(?<= ${key}=)".+?"`, 'g'))].map((v) => v[0]);
  const width = resizable ? '"1em"' : getAttr('width')[0];
  const options =
    flipInRtl && isColor
      ? ', { flipInRtl: true, color: true }'
      : flipInRtl
        ? ', { flipInRtl: true }'
        : isColor
          ? ', { color: true }'
          : '';

  let exportCode;
  if (isColor) {
    const innerSvg = svgContent
      .replace(/^[\s\S]*?<svg[^>]*>/, '')
      .replace(/<\/svg>[\s\S]*$/, '')
      .trim();
    exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, \`${innerSvg}\`${options}));`;
  } else {
    const paths = getAttr('d').join(',');
    exportCode = `export const ${exportName}: FluentIcon = (/*#__PURE__*/createFluentIcon('${exportName}', ${width}, [${paths}]${options}));`;
  }

  return { exportName, exportCode, fileName: _.kebabCase(exportName) + '.tsx' };
}

/**
 * Load RTL metadata file once.
 * @param {string} rtlFilePath
 * @returns {RtlMetadata}
 */
function loadRtlMetadata(rtlFilePath) {
  return JSON.parse(fs.readFileSync(rtlFilePath, 'utf-8'));
}

module.exports = { makeIconExport, getCreateFluentIconHeader, loadRtlMetadata };
