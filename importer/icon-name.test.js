// @ts-check
import { describe, it, expect } from 'vitest';

import { getIconExportName, getIconFileName, getGlyphName, parseIconName, getIconFlipInRtl } from './icon-name.js';

describe('icon naming', () => {
  it('encodes locale exports as camelCase and module tags with hyphens without renaming raw glyphs', () => {
    expect(getIconExportName('sr-cyrl/ic_fluent_text_bold_20_regular.svg', true)).toBe('TextBoldRegular_srCyrl');
    expect(getIconExportName('sr-latn/ic_fluent_text_bold_24_regular.svg', false)).toBe('TextBold24Regular_srLatn');
    expect(getIconFileName('TextBoldRegular_srCyrl')).toBe('text-bold-regular_sr-cyrl.tsx');
    expect(getIconFileName('TextBold24Regular_srLatn')).toBe('text-bold-24-regular_sr-latn.tsx');
    expect(getIconExportName('es-419/ic_fluent_text_bold_20_regular.svg', true)).toBe('TextBoldRegular_es419');
    expect(getIconFileName('TextBoldRegular_es419')).toBe('text-bold-regular_es-419.tsx');
    expect(getGlyphName('sr-cyrl/ic_fluent_text_bold_20_regular.svg')).toBe('ic_fluent_text_bold_20_regular_sr_cyrl');
  });

  it('inherits mirroring for locales but never double-mirrors explicit direction artwork', () => {
    const metadata = /** @type {const} */ ({ ArrowReplyRegular: 'mirror' });
    expect(getIconFlipInRtl('es/ic_fluent_arrow_reply_20_regular.svg', true, metadata)).toBe(true);
    expect(getIconFlipInRtl('es/RTL/ic_fluent_arrow_reply_20_regular.svg', true, metadata)).toBe(false);
    expect(getIconFlipInRtl('ic_fluent_arrow_reply_20_regular_es_rtl', true, metadata)).toBe(false);
    expect(getIconFlipInRtl('es/ic_fluent_text_bold_20_regular.svg', true, metadata)).toBe(false);
  });

  it('handles script locales, fixed direction, and actual size tokens', () => {
    expect(getIconExportName('sr-cyrl/RTL/ic_fluent_text_bold_24_regular.svg', false)).toBe(
      'TextBold24Regular_srCyrlRtl',
    );
    expect(getIconExportName('RTL/ic_fluent_text_number_list_rotate_90_20_regular.svg', true)).toBe(
      'TextNumberListRotate90Regular_rtl',
    );
    expect(parseIconName('ic_fluent_accessibility_120_regular.svg').size).toBe('120');
    expect(() => getIconExportName('es/fr/ic_fluent_text_bold_20_regular.svg', true)).toThrow('Duplicate locale');
  });
});