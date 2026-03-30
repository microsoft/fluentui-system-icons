// @ts-check
import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import { describe, it, expect } from 'vitest';

// The exact module users copy-paste into their repo (documented in README).
// Importing it here keeps the snippet under test.
import { resolveFluentIconImport } from './fluent-icons-transform.js';

/**
 * SWC transform – replicates the regex capture from the README for
 * `@swc/plugin-transform-imports`.  Group 1 is passed to `{{ kebabCase }}`
 * by the SWC plugin at build time.
 *
 * @param {string} importName
 * @returns {string | null} capture group 1 (icon base name in PascalCase), or null on mismatch
 */
function swcCaptureGroup1(importName) {
  const m = importName.match(/(.+?)(\d+)?(Regular|Filled|Light|Color)$/);
  return m ? m[1] : null;
}

/**
 * Reference implementation – uses the same lodash.kebabCase + normalizeBaseName
 * logic that the generation pipeline in convert.utils.js / per-icon.writer.js uses.
 *
 * @param {string} importName
 * @returns {string}
 */
function referenceKebab(importName) {
  const withoutStyle = importName.replace(/(Regular|Filled|Light|Color)$/, '');
  const parts = _.kebabCase(withoutStyle).split('-');
  if (parts.length > 1 && /^\d+$/.test(parts[parts.length - 1])) {
    parts.pop();
  }
  return parts.join('-');
}

// Icon names that contain digits in the base name (the tricky cases).
// Each entry: [importName, expectedAtomFile]
const DIGIT_ICON_CASES = [
  // 1-digit + single uppercase letter (e.g. "3D", "5G")
  ['Space3DFilled', 'space-3-d'],
  ['Space3DRegular', 'space-3-d'],
  ['Space3D24Filled', 'space-3-d'],
  ['Cellular5GFilled', 'cellular-5-g'],
  ['Cellular5G20Filled', 'cellular-5-g'],

  // 1-digit + multi-char word
  ['Calendar3DayRegular', 'calendar-3-day'],
  ['Calendar3Day20Regular', 'calendar-3-day'],

  // 2-digit number in base name
  ['Multiplier12XRegular', 'multiplier-12-x'],
  ['Multiplier12X20Regular', 'multiplier-12-x'],
  ['Shifts30MinutesFilled', 'shifts-30-minutes'],
  ['Shifts30Minutes20Filled', 'shifts-30-minutes'],

  // 3-digit number in base name
  ['TextDirectionRotate315RightRegular', 'text-direction-rotate-315-right'],
  ['TextDirectionRotate315Right20Regular', 'text-direction-rotate-315-right'],
  ['Video360OffFilled', 'video-360-off'],
  ['Video360Off20Filled', 'video-360-off'],
];

// Icons with trailing digits that get stripped as size/level suffixes.
const TRAILING_DIGIT_CASES = [
  ['Battery0Filled', 'battery'],
  ['Battery020Filled', 'battery'],
  ['Battery1024Regular', 'battery'],
  ['BatteryCharge0Regular', 'battery-charge'],
  ['BatteryCharge920Filled', 'battery-charge'],
  ['ArrowRepeat1Regular', 'arrow-repeat'],
  ['ArrowRepeat116Regular', 'arrow-repeat'],
  ['WindowNewRotate180Regular', 'window-new-rotate'],
  ['WindowNewRotate18020Regular', 'window-new-rotate'],
];

// Standard icons (no digits in base name) to ensure no regression.
const STANDARD_ICON_CASES = [
  ['AccessTimeFilled', 'access-time'],
  ['AccessTime24Filled', 'access-time'],
  ['AccessTimeRegular', 'access-time'],
  ['Add16Filled', 'add'],
  ['AddFilled', 'add'],
];

const ALL_CASES = [...DIGIT_ICON_CASES, ...TRAILING_DIGIT_CASES, ...STANDARD_ICON_CASES];

describe('README build-transform kebab-case consistency', () => {
  describe('resolveFluentIconImport matches lodash.kebabCase (generation pipeline)', () => {
    it.each(ALL_CASES)('%s → %s', (importName, expected) => {
      expect(resolveFluentIconImport(importName)).toBe(`@fluentui/react-icons/svg/${expected}`);
      expect(expected).toBe(referenceKebab(importName));
    });
  });

  describe('resolveFluentIconImport handles provider and utility imports', () => {
    it('useIconContext → providers', () => {
      expect(resolveFluentIconImport('useIconContext')).toBe('@fluentui/react-icons/providers');
    });
    it('IconDirectionContextProvider → providers', () => {
      expect(resolveFluentIconImport('IconDirectionContextProvider')).toBe('@fluentui/react-icons/providers');
    });
    it('bundleIcon → utils', () => {
      expect(resolveFluentIconImport('bundleIcon')).toBe('@fluentui/react-icons/utils');
    });
  });

  describe('SWC regex captures correct base name for kebabCase helper', () => {
    it.each(ALL_CASES)('%s → group1 kebab-cases to %s', (importName, expected) => {
      const group1 = swcCaptureGroup1(importName);
      expect(group1).not.toBeNull();
      expect(_.kebabCase(/** @type {string} */ (group1))).toBe(expected);
    });
  });
});

/**
 * Collect every [exportName, atomFileBaseName] pair from generated atom files.
 * Reads each .tsx file in src/atoms/svg/, extracts `export const XyzFilled`
 * names, and pairs them with the file's basename (minus .tsx extension).
 *
 * Skips deprecated backward-compat modules and individual deprecated exports.
 *
 * @returns {Array<[string, string]>}
 */
const DEPRECATED_MODULES = new Set([
  'color-16-filled',
  'color-16-regular',
  'color-20-filled',
  'color-20-regular',
  'color-24-filled',
  'color-24-regular',
  'color-32-light',
  'color-filled',
  'color-regular',
]);

function collectAtomExports() {
  const atomsDir = path.join(__dirname, 'src', 'atoms', 'svg');
  const files = fs.readdirSync(atomsDir).filter((f) => f.endsWith('.tsx'));
  /** @type {Array<[string, string]>} */
  const pairs = [];

  for (const file of files) {
    const baseName = file.replace(/\.tsx$/, '');
    if (DEPRECATED_MODULES.has(baseName)) continue;

    const content = fs.readFileSync(path.join(atomsDir, file), 'utf8');
    // Match exports, but skip those preceded by a @deprecated JSDoc comment
    const exportRe = /(?:\/\*\*[^]*?\*\/\s*)?export const (\w+)/g;
    let m;
    while ((m = exportRe.exec(content)) !== null) {
      if (m[0].includes('@deprecated')) continue;
      pairs.push([m[1], baseName]);
    }
  }

  return pairs;
}

describe('README build-transforms resolve every generated atom export', () => {
  const atomExports = collectAtomExports();

  it(`should have collected exports (sanity check)`, () => {
    expect(atomExports.length).toBeGreaterThan(1000);
  });

  it('resolveFluentIconImport resolves every export to its atom file', () => {
    const failures = [];
    for (const [exportName, expectedFile] of atomExports) {
      const result = resolveFluentIconImport(exportName);
      const expectedPath = `@fluentui/react-icons/svg/${expectedFile}`;
      if (result !== expectedPath) {
        failures.push(`${exportName}: got "${result}", expected "${expectedPath}"`);
      }
    }
    expect(failures).toEqual([]);
  });

  it('SWC transform resolves every export to its atom file', () => {
    const failures = [];
    for (const [exportName, expectedFile] of atomExports) {
      const group1 = swcCaptureGroup1(exportName);
      const result = group1 ? _.kebabCase(group1) : '';
      if (result !== expectedFile) {
        failures.push(`${exportName}: got "${result}", expected "${expectedFile}"`);
      }
    }
    expect(failures).toEqual([]);
  });
});
