import { FileIconType } from './FileIconType';
import { getFileTypeIconNameFromExtensionOrType } from './getFileTypeIconProps';
import { getFileTypeIconExtensionMap } from './fileTypeIconMap.generated';
import fileTypeIconMap from './fileTypeIconMap.json';

describe('getFileTypeIconNameFromExtensionOrType', () => {
  it('returns an icon name present in the file type icon map for every FileIconType', () => {
    for (const key of Object.keys(FileIconType)) {
      const value = FileIconType[key as keyof typeof FileIconType];
      if (typeof value === 'number') {
        expect(fileTypeIconMap).toHaveProperty(getFileTypeIconNameFromExtensionOrType(undefined, value));
      }
    }
  });

  it('maps a known extension to its icon base name (case/period insensitive)', () => {
    expect(getFileTypeIconNameFromExtensionOrType('docx', undefined)).toBe('docx');
    expect(getFileTypeIconNameFromExtensionOrType('.DOCX', undefined)).toBe('docx');
    expect(getFileTypeIconNameFromExtensionOrType('doc', undefined)).toBe('docx');
  });

  it('falls back to genericfile for unknown extensions', () => {
    expect(getFileTypeIconNameFromExtensionOrType('totally-unknown-ext', undefined)).toBe('genericfile');
  });
});

describe('getFileTypeIconExtensionMap', () => {
  it('decodes the packed map to match the JSON source of truth', () => {
    const expected: { [extension: string]: string } = {};
    for (const [iconName, extensions] of Object.entries(fileTypeIconMap)) {
      for (const extension of extensions ?? []) {
        expected[extension] = iconName;
      }
    }
    expect(getFileTypeIconExtensionMap()).toEqual(expected);
  });
});
