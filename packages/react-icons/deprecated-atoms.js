// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

// @ts-check

const fs = require('fs');
const path = require('path');
const _ = require('lodash');

/**
 *
 * @param {'svg' | 'font'} type
 * @param {string} atomModuleName
 * @returns
 */
function getDeprecatedMsg(type, atomModuleName) {
  const importPath = { font: 'fonts', svg: 'svg' }[type];
  return `/** @deprecated use \`@fluentui/${importPath}/${atomModuleName}\` import. This was generated for backward compatibility and will be removed in next major release */`;
}

/**
 *
 * @param {string} fileContent
 * @returns
 */
function getExportsFromFile(fileContent) {
  const lines = fileContent.split('\n');
  const exports = lines.filter((line) => line.startsWith('export const'));

  const exportNames = /** @type {string[]} */ (
    exports
      .map((exp) => {
        const match = exp.match(/export const (\w+)/);
        return match ? match[1] : null;
      })
      .filter(Boolean)
  );

  return { exports, exportNames };
}

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

  const deprecatedMsg = getDeprecatedMsg(type, 'color');
  const generatedFiles = [];

  const content = fs.readFileSync(colorFile, 'utf8');
  const lines = content.split('\n');
  const header = lines.filter((line) => line.startsWith('"use client"') || line.startsWith('import'));
  const { exports } = getExportsFromFile(content);

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

/**
 * Adds all `TextColor*` exports from `text-color.tsx` to `text.tsx` with deprecation annotations
 * This is a temporary workaround to avoid breaking changes.
 *
 * NOTE: this will be removed in the next major release.
 *
 * @param {string} destPath - The destination path where atoms are written.
 * @param {'svg' | 'font'} type - The type of icons being processed.
 */
function handleDeprecatedTextColorAtoms(destPath, type) {
  // Correctly generated text-color.tsx module contains all TextColor* exports only.
  const textColorFile = path.join(destPath, 'text-color.tsx');
  // Correctly generated text.tsx module contains only Text* exports (no TextColor*)
  // NOTE: this file needs re-exports from text-color.tsx for backward compatibility annotated via @deprecated
  const textFile = path.join(destPath, 'text.tsx');

  if (!fs.existsSync(textColorFile)) {
    console.log(`[deprecated atoms] No text-color.tsx found in ${destPath}, skipping deprecated atom handling.`);
    return;
  }

  const deprecatedMsg = getDeprecatedMsg(type, 'text-color');

  const content = fs.readFileSync(textColorFile, 'utf8');
  const { exports, exportNames } = getExportsFromFile(content);

  // Create re-export statements with deprecation notice
  const deprecatedExports = exports.map((exportDeclaration) => `${deprecatedMsg}\n${exportDeclaration}`);

  fs.appendFileSync(textFile, '\n' + deprecatedExports.join('\n') + '\n', 'utf8');

  console.log(
    `[deprecated atoms] Updated text.tsx with deprecated following text-color.tsx exports: ${exportNames.join(', ')}`,
  );
}

/**
 * Detects potential atom grouping issues where icon names ending with style variants
 * might be incorrectly grouped together. This helps catch similar issues to the
 * 'Text Color' case before they cause problems.
 *
 * Style variants: regular, filled, light, color
 * Potential problem patterns:
 *   - Icon names like "Something Light", "Border Regular", etc.
 *   - Would normalize to the same base name as other icons without the variant suffix
 *
 * @param {string} destPath - The destination path where atoms are written.
 * @returns {Promise<void>}
 * @throws Will throw an error if potential grouping issues are detected.
 */
async function assertCompoundStyleVariantIssues(destPath) {
  // Files that are intentionally modified by deprecated atom handlers to maintain backward compatibility
  // These will have mixed groupings by design and should be skipped
  const SKIP_FILES = ['text.tsx'];

  const STYLE_VARIANTS = ['regular', 'filled', 'light', 'color'];

  try {
    await fs.promises.access(destPath);
  } catch {
    return;
  }

  const allFiles = await fs.promises.readdir(destPath);
  const files = allFiles.filter((file) => file.endsWith('.tsx') && !SKIP_FILES.includes(file));

  /**
   * Process a single file and return any issues found
   * @param {string} file
   * @returns {Promise<Array<{file: string, base: string, otherBases: string[], exports: string[]}>>}
   */
  async function processFile(file) {
    const filePath = path.join(destPath, file);
    const content = await fs.promises.readFile(filePath, 'utf8');
    const { exportNames } = getExportsFromFile(content);

    /**
     * A registry of base prefixes for deprecated icon atoms, providing efficient
     * key-value lookups and maintaining the order of added prefixes.
     *
     * Group exports by their base pattern (before size/style), e.g., TextColor16Regular -> TextColor
     * @type {Map<string, any>}
     */
    const basePrefixes = new Map();

    for (const exportName of exportNames) {
      // Extract base by removing trailing size+style pattern
      // e.g., TextColor16Regular -> TextColor, Text16Regular -> Text
      const baseMatch = exportName.match(/^([A-Z][a-z]+(?:[A-Z][a-z]+)*)\d+(Regular|Filled|Light|Color)?$/);
      if (baseMatch) {
        const base = baseMatch[1];
        if (!basePrefixes.has(base)) {
          basePrefixes.set(base, []);
        }
        basePrefixes.get(base).push(exportName);
      }
    }

    // Check if file contains multiple distinct base patterns that might indicate grouping issues
    // For example, if 'text.tsx' contains both 'Text*' and 'TextColor*' exports
    const bases = Array.from(basePrefixes.keys());
    const fileIssues = [];

    for (const base of bases) {
      // Check if this base ends with a style variant name
      const lowerBase = base.toLowerCase();
      const endsWithVariant = STYLE_VARIANTS.some((variant) => lowerBase.endsWith(variant));

      if (endsWithVariant && bases.length > 1) {
        // Found a potential issue: file contains icons with base name ending in style variant
        // AND other icons with different base names
        const otherBases = bases.filter((b) => b !== base);
        fileIssues.push({
          file,
          base,
          otherBases,
          exports: basePrefixes.get(base),
        });
      }
    }

    return fileIssues;
  }

  /**
   *
   * @param {Awaited<ReturnType<typeof processFile>>} issues
   */
  function reportGroupingIssues(issues) {
    console.warn('[compound-style-variant detection] Found potential atom grouping issues:');
    for (const issue of issues) {
      console.warn(`  - ${issue.file}: Contains '${issue.base}*' exports alongside ${issue.otherBases.join(', ')}`);
      console.warn(
        `    This might indicate icons from folders like "${issue.base.replace(/([A-Z])/g, ' $1').trim()}" are incorrectly grouped.`,
      );
      console.warn(
        `    Affected exports: ${issue.exports.slice(0, 3).join(', ')}${issue.exports.length > 3 ? '...' : ''}`,
      );
    }
    console.warn(
      '  Please verify these are intentionally grouped or add a separation handler like handleTextColorAtomSeparation.',
    );
  }

  // Process all files in parallel
  const processedFiles = files.map((file) => processFile(file));
  const results = await Promise.all(processedFiles);
  const issues = results.flat();

  if (issues.length > 0) {
    reportGroupingIssues(issues);

    throw new Error('Compound style variant grouping issues detected.');
  }
}

module.exports = {
  handleDeprecatedColorAtoms,
  handleDeprecatedTextColorAtoms,
  assertCompoundStyleVariantIssues,
};
