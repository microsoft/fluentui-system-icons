import { expect, it } from 'vitest';
import fileIconTypes from './fileIconTypes.json';
import fileTypeIconMap from './fileTypeIconMap.json';
import metadata from '../../lib/metadata.json';
import packageJson from '../../package.json';
import { DEFAULT_BASE_URL, FLUENT_CDN_BASE_URL } from './constants';
import { FileIconType, TYPE_TO_ICON_NAME } from './fileIconTypes.generated';

it('publishes one metadata file generated from the existing sources', () => {
  expect(metadata).toEqual({
    cdnBaseUrl: FLUENT_CDN_BASE_URL,
    fileIconTypes,
    fileTypeIconMap,
  });
  expect(DEFAULT_BASE_URL).toBe(`${metadata.cdnBaseUrl}/assets/item-types/`);
  expect(Object.keys(packageJson.exports).filter((key) => key.endsWith('.json'))).toEqual([
    './metadata.json',
    './package.json',
  ]);
});

it('keeps generated types and the complete catalog consistent with exported metadata', () => {
  for (const { name, value, icon } of fileIconTypes) {
    expect(FileIconType[name as keyof typeof FileIconType]).toBe(value);
    expect(TYPE_TO_ICON_NAME[value]).toBe(icon || '');
    expect(fileTypeIconMap).toHaveProperty(icon || 'genericfile');
  }
});
