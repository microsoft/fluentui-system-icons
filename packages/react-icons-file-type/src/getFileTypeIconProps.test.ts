import { FileIconType } from './FileIconType';
import { FileTypeIconMap } from './FileTypeIconMap';
import { getFileTypeIconNameFromExtensionOrType, getFileTypeIconProps } from './getFileTypeIconProps';

describe('getFileTypeIconNameFromExtensionOrType', () => {
  it('returns an icon name present in the file type icon map for every FileIconType', () => {
    for (const key of Object.keys(FileIconType)) {
      const value = FileIconType[key as keyof typeof FileIconType];
      if (typeof value === 'number') {
        expect(FileTypeIconMap).toHaveProperty(getFileTypeIconNameFromExtensionOrType(undefined, value));
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

describe('getFileTypeIconProps', () => {
  it('returns an iconName and aria-label for an extension', () => {
    const props = getFileTypeIconProps({ extension: 'pptx', size: 24 });
    expect(props.iconName).toBe('pptx24_svg');
    expect(props['aria-label']).toBe('pptx');
  });
});
