// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

import { describe, expect, it } from 'vitest';

import { getResizableIconName, isSizedIconName } from './sized-icons';
import { SIZED_WITHOUT_RESIZABLE } from './icon-sizes.generated';

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

  it('keeps Light sized without storing per-icon Light exceptions', () => {
    expect(isSizedIconName('ZoomOut32Light')).toBe(true);
    expect(getResizableIconName('ZoomOut32Light')).toBe(null);
    expect(SIZED_WITHOUT_RESIZABLE.filter((name) => name.endsWith('Light'))).toEqual([]);
  });

  it('requires review if the catalogue gains a 20px or resizable Light variant', () => {
    const light = Object.entries(metadata).filter(([name]) => name.endsWith('Light'));
    expect(light.length).toBeGreaterThan(0);
    expect(light.filter(([name, meta]) => meta.type === 'resizable' || name.endsWith('20Light'))).toEqual([]);
  });

  it('limits the Light policy to system-icon imports and not names containing Light', () => {
    expect(getResizableIconName('ZoomOut32Light', '@fluentui/react-icons/fonts/zoom-out')).toBe(null);
    expect(getResizableIconName('ZoomOut32Light', '@fluentui/react-brand-icons')).toBe('ZoomOutLight');
    expect(getResizableIconName('ZoomOut32Light', 'custom-icons')).toBe('ZoomOutLight');
    expect(getResizableIconName('Lightbulb24Regular')).toBe('LightbulbRegular');
  });

  it.each(['AlignDistributeBottom16Regular', 'AccessibilityCheckmark32Light', 'AppStore24Filled'])(
    'does not suggest a nonexistent resizable counterpart for %s',
    (name) => {
      expect(metadata[name]?.type).toBe('sized');
      expect(isSizedIconName(name)).toBe(true);
      expect(getResizableIconName(name)).toBe(null);
    },
  );

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
