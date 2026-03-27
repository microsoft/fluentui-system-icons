// @ts-check
import _ from 'lodash';
import { describe, it, expect } from 'vitest';

/**
 * Babel transform – replicates the logic documented in the README
 * for `babel-plugin-transform-imports`. Uses the same regex as the SWC
 * transform to extract the icon base name, then applies a lookahead-based
 * kebab-case inline.
 *
 * @param {string} importName - PascalCase icon export name (e.g. "Space3D24Filled")
 * @returns {string} kebab-case base name used as the atom file path segment
 */
function babelTransformToKebab(importName) {
  const match = importName.match(/(.+?)(\d{2})?(Regular|Filled|Light|Color)$/);
  if (!match) return '';
  return match[1].replace(/([a-z](?=\d)|[a-z0-9](?=[A-Z]))/g, '$1-').toLowerCase();
}

/**
 * SWC transform – replicates the regex capture from the README for
 * `@swc/plugin-transform-imports`.  Group 1 is passed to `{{ kebabCase }}`
 * by the SWC plugin at build time.
 *
 * @param {string} importName
 * @returns {string | null} capture group 1 (icon base name in PascalCase), or null on mismatch
 */
function swcCaptureGroup1(importName) {
  const m = importName.match(/(.+?)(\d{2})?(Regular|Filled|Light|Color)$/);
  return m ? m[1] : null;
}

/**
 * Reference implementation – uses the same lodash.kebabCase that the
 * generation pipeline in convert.utils.js uses.
 *
 * @param {string} importName
 * @returns {string}
 */
function referenceKebab(importName) {
  const withoutSuffix = importName.replace(/(\d*)?(Regular|Filled|Light|Color)$/, '');
  return _.kebabCase(withoutSuffix);
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

// Standard icons (no digits in base name) to ensure no regression.
const STANDARD_ICON_CASES = [
  ['AccessTimeFilled', 'access-time'],
  ['AccessTime24Filled', 'access-time'],
  ['AccessTimeRegular', 'access-time'],
  ['Add16Filled', 'add'],
  ['AddFilled', 'add'],
];

const ALL_CASES = [...DIGIT_ICON_CASES, ...STANDARD_ICON_CASES];

describe('README build-transform kebab-case consistency', () => {
  describe('Babel transform matches lodash.kebabCase (generation pipeline)', () => {
    it.each(ALL_CASES)('%s → %s', (importName, expected) => {
      const result = babelTransformToKebab(importName);
      expect(result).toBe(expected);
      expect(result).toBe(referenceKebab(importName));
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
