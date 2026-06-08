import {
  getFileTypeIconNameFromExtensionOrType,
  getFileTypeIconSrc,
  getFileTypeIconSuffix,
} from './getFileTypeIconSrc';
import { getFileTypeIconExtensionMap } from './fileTypeIconMap.generated';
import { FileIconType } from './FileIconType';
import { DEFAULT_BASE_URL } from './constants';
import fileTypeIconMap from './fileTypeIconMap.json';

const CUSTOM_BASE_URL = 'https://example.com/item-types/';

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

  it('falls back to genericfile when neither extension nor type is provided', () => {
    expect(getFileTypeIconNameFromExtensionOrType(undefined, undefined)).toBe('genericfile');
  });

  it('falls back to genericfile for an empty-string extension', () => {
    expect(getFileTypeIconNameFromExtensionOrType('', undefined)).toBe('genericfile');
  });

  it('prefers the extension over the type when both are provided', () => {
    expect(getFileTypeIconNameFromExtensionOrType('xlsx', FileIconType.folder)).toBe('xlsx');
  });

  it('maps a known type to its icon base name', () => {
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.folder)).toBe('folder');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.sharedFolder)).toBe('sharedfolder');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.list)).toBe('splist');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.stream)).toBe('video');
  });

  it('falls back to genericfile for the genericFile type (no dedicated map entry)', () => {
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.genericFile)).toBe('genericfile');
  });
});

describe('getFileTypeIconSuffix', () => {
  it('defaults to svg at standard density (1x) when no window is provided', () => {
    expect(getFileTypeIconSuffix(16)).toBe('16_svg');
    expect(getFileTypeIconSuffix(96, 'svg')).toBe('96_svg');
  });

  it('returns a png suffix at standard density (1x)', () => {
    expect(getFileTypeIconSuffix(16, 'png')).toBe('16_png');
  });

  describe('svg', () => {
    it('uses the 1.5x asset for device pixel ratios in (1, 1.5]', () => {
      expect(getFileTypeIconSuffix(24, 'svg', { devicePixelRatio: 1.25 } as Window)).toBe('24_1.5x_svg');
      expect(getFileTypeIconSuffix(24, 'svg', { devicePixelRatio: 1.5 } as Window)).toBe('24_1.5x_svg');
    });

    it('snaps size 20 to 1x (no 1.5x asset published)', () => {
      expect(getFileTypeIconSuffix(20, 'svg', { devicePixelRatio: 1.25 } as Window)).toBe('20_svg');
    });

    it('uses the base (1x) asset above 1.5x since svgs scale', () => {
      expect(getFileTypeIconSuffix(24, 'svg', { devicePixelRatio: 2 } as Window)).toBe('24_svg');
      expect(getFileTypeIconSuffix(24, 'svg', { devicePixelRatio: 3 } as Window)).toBe('24_svg');
    });
  });

  describe('png', () => {
    it('uses the 1.5x asset for device pixel ratios in (1, 1.5]', () => {
      expect(getFileTypeIconSuffix(24, 'png', { devicePixelRatio: 1.25 } as Window)).toBe('24_1.5x_png');
      expect(getFileTypeIconSuffix(24, 'png', { devicePixelRatio: 1.5 } as Window)).toBe('24_1.5x_png');
    });

    it('snaps size 20 to 2x for ratios in (1, 1.5] (no 1.5x asset published)', () => {
      expect(getFileTypeIconSuffix(20, 'png', { devicePixelRatio: 1.25 } as Window)).toBe('20_2x_png');
    });

    it('uses the 2x asset for ratios in (1.5, 2]', () => {
      expect(getFileTypeIconSuffix(24, 'png', { devicePixelRatio: 2 } as Window)).toBe('24_2x_png');
    });

    it('uses the 3x asset for ratios in (2, 3]', () => {
      expect(getFileTypeIconSuffix(24, 'png', { devicePixelRatio: 3 } as Window)).toBe('24_3x_png');
    });

    it('uses the 4x asset for ratios above 3', () => {
      expect(getFileTypeIconSuffix(24, 'png', { devicePixelRatio: 4 } as Window)).toBe('24_4x_png');
    });
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

describe('getFileTypeIconSrc', () => {
  it('resolves an extension to a standard-density (1x) svg url', () => {
    expect(getFileTypeIconSrc({ extension: 'docx', size: 24 }, CUSTOM_BASE_URL)).toBe(`${CUSTOM_BASE_URL}24/docx.svg`);
  });

  it('defaults to the Fluent CDN base url when none is provided', () => {
    expect(getFileTypeIconSrc({ extension: 'pdf', size: 16 })).toBe(`${DEFAULT_BASE_URL}16/pdf.svg`);
  });

  it('defaults the size to 16 when not provided', () => {
    expect(getFileTypeIconSrc({ extension: 'pdf' }, CUSTOM_BASE_URL)).toBe(`${CUSTOM_BASE_URL}16/pdf.svg`);
  });

  it('defaults to svg when no imageFileType is provided', () => {
    expect(getFileTypeIconSrc({ extension: 'pptx', size: 32 }, CUSTOM_BASE_URL)).toBe(`${CUSTOM_BASE_URL}32/pptx.svg`);
  });

  it('resolves a png extension to a png url', () => {
    expect(getFileTypeIconSrc({ extension: 'docx', size: 24, imageFileType: 'png' }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/docx.png`,
    );
  });

  it('resolves a FileIconType to its icon name', () => {
    expect(getFileTypeIconSrc({ type: FileIconType.folder, size: 24 }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/folder.svg`,
    );
  });

  it('maps an unknown extension to the generic file icon', () => {
    expect(getFileTypeIconSrc({ extension: 'totally-unknown-ext', size: 24 }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/genericfile.svg`,
    );
  });

  it('builds a high-density folder url (3-part suffix) from the window device pixel ratio', () => {
    const win = { devicePixelRatio: 2 } as Window;
    expect(getFileTypeIconSrc({ extension: 'docx', size: 24, imageFileType: 'png' }, CUSTOM_BASE_URL, win)).toBe(
      `${CUSTOM_BASE_URL}24_2x/docx.png`,
    );
  });

  it('keeps the standard-density url when the device pixel ratio is 1', () => {
    const win = { devicePixelRatio: 1 } as Window;
    expect(getFileTypeIconSrc({ extension: 'docx', size: 24, imageFileType: 'png' }, CUSTOM_BASE_URL, win)).toBe(
      `${CUSTOM_BASE_URL}24/docx.png`,
    );
  });
});
