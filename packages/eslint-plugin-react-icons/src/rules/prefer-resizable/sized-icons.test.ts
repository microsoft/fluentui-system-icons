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

  it('maps sized names to an existing resizable variant', () => {
    expect(getResizableIconName('AccessTime24Filled')).toBe('AccessTimeFilled');
    expect(getResizableIconName('Send24Regular')).toBe('SendRegular');
    expect(getResizableIconName('PresenceDnd10Filled')).toBe('PresenceDndFilled');
    // multi-digit product number + trailing size
    expect(getResizableIconName('Battery1024Regular')).toBe('Battery10Regular');
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
