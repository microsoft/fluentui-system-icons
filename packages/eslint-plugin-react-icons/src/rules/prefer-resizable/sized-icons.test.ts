// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { getResizableIconName, isSizedIconName } from './sized-icons';

type IconMeta = { svg: boolean; font: boolean; type: 'sized' | 'resizable' };

const metadata: Record<string, IconMeta> = JSON.parse(
  readFileSync(fileURLToPath(new URL('../../../../react-icons/metadata.json', import.meta.url)), 'utf8'),
);

describe('sized-icons classification', () => {
  it('exactly matches metadata `type` for every icon (drift guard)', () => {
    const mismatches = Object.entries(metadata)
      .filter(([name, meta]) => isSizedIconName(name) !== (meta.type === 'sized'))
      .map(
        ([name, meta]) => `${name}: classified=${isSizedIconName(name) ? 'sized' : 'resizable'}, metadata=${meta.type}`,
      );

    expect(mismatches).toEqual([]);
  });

  it('only suggests targets that exist as resizable exports in metadata', () => {
    const missing = Object.keys(metadata).flatMap((name) => {
      const target = getResizableIconName(name);
      return target !== null && metadata[target]?.type !== 'resizable' ? [`${name} -> ${target}`] : [];
    });
    expect(missing.length, missing.slice(0, 10).join('\n')).toBe(0);
  });

  it.each([
    'BookQuestionMark24Filled_ar',
    'CommentNote24Regular_he',
    'TextClearFormatting32Regular_ko',
    'AlignDistributeBottom16Regular',
    'AccessibilityCheckmark32Light',
  ])('does not suggest a nonexistent resizable counterpart for %s', (name) => {
    expect(metadata[name]?.type).toBe('sized');
    expect(isSizedIconName(name)).toBe(true);
    expect(getResizableIconName(name)).toBe(null);
  });

  it('maps sized names to an existing resizable variant', () => {
    expect(getResizableIconName('TextBold24Regular_es')).toBe('TextBoldRegular_es');
    expect(getResizableIconName('TextBold24Regular_srCyrl')).toBe('TextBoldRegular_srCyrl');
    expect(getResizableIconName('TextDirectionHorizontalRtl24Regular_ko')).toBe('TextDirectionHorizontalRtlRegular_ko');
    expect(getResizableIconName('AccessTime24Filled')).toBe('AccessTimeFilled');
    expect(getResizableIconName('Send24Regular')).toBe('SendRegular');
    expect(getResizableIconName('PresenceDnd10Filled')).toBe('PresenceDndFilled');
    // multi-digit product number + trailing size
    expect(getResizableIconName('Battery1024Regular')).toBe('Battery10Regular');
  });

  it('accepts camel-cased and numeric qualifiers but rejects the obsolete underscore encoding', () => {
    expect(getResizableIconName('TextBold24Regular_srCyrl')).toBe('TextBoldRegular_srCyrl');
    expect(getResizableIconName('TextBold24Regular_es419')).toBe('TextBoldRegular_es419');
    expect(isSizedIconName('TextBold24Regular_sr_cyrl')).toBe(false);
    expect(getResizableIconName('TextBold24Regular_sr_cyrl')).toBe(null);
  });

  it('does not flag resizable collisions (size-shaped product names)', () => {
    expect(isSizedIconName('Battery10Regular')).toBe(false);
    expect(isSizedIconName('Fps120Regular')).toBe(false);
    expect(getResizableIconName('Timer10Filled')).toBe(null);
  });

  it('does not flag plain resizable names', () => {
    expect(isSizedIconName('AccessTimeFilled')).toBe(false);
    expect(isSizedIconName('SendRegular')).toBe(false);
  });
});
