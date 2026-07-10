import {
  getFileTypeIconNameFromExtensionOrType,
  getFileTypeIconSrc,
  getFileTypeIconSrcSet,
} from './fileTypeIconResolver';
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
    expect(getFileTypeIconNameFromExtensionOrType('work', undefined)).toBe('agentwork');
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
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiApp)).toBe('pbiapp');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiDashboard)).toBe('pbidashboard');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiPaginatedReport)).toBe('pbipagereport');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiScorecard)).toBe('pbiscorecard');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiSemanticModel)).toBe('pbisemmodel');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.pbiReport)).toBe('powerbi');
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.wikiPage)).toBe('wikipage');
  });

  it('falls back to genericfile for the genericFile type (no dedicated map entry)', () => {
    expect(getFileTypeIconNameFromExtensionOrType(undefined, FileIconType.genericFile)).toBe('genericfile');
  });
});

describe('getFileTypeIconSrcSet', () => {
  describe('svg', () => {
    it('lists the 1x and 1.5x candidates (svgs scale, so no 2x+ assets)', () => {
      expect(getFileTypeIconSrcSet({ extension: 'docx', size: 24 }, CUSTOM_BASE_URL)).toBe(
        `${CUSTOM_BASE_URL}24/docx.svg 1x, ${CUSTOM_BASE_URL}24_1.5x/docx.svg 1.5x`,
      );
    });

    it('lists only the 1x candidate for size 20 (no 1.5x asset published)', () => {
      expect(getFileTypeIconSrcSet({ extension: 'docx', size: 20 }, CUSTOM_BASE_URL)).toBe(
        `${CUSTOM_BASE_URL}20/docx.svg 1x`,
      );
    });
  });

  describe('png', () => {
    it('lists every density bucket from 1x through 4x', () => {
      expect(getFileTypeIconSrcSet({ extension: 'docx', size: 24, imageFileType: 'png' }, CUSTOM_BASE_URL)).toBe(
        [
          `${CUSTOM_BASE_URL}24/docx.png 1x`,
          `${CUSTOM_BASE_URL}24_1.5x/docx.png 1.5x`,
          `${CUSTOM_BASE_URL}24_2x/docx.png 2x`,
          `${CUSTOM_BASE_URL}24_3x/docx.png 3x`,
          `${CUSTOM_BASE_URL}24_4x/docx.png 4x`,
        ].join(', '),
      );
    });

    it('omits the missing 1.5x bucket for size 20', () => {
      expect(getFileTypeIconSrcSet({ extension: 'docx', size: 20, imageFileType: 'png' }, CUSTOM_BASE_URL)).toBe(
        [
          `${CUSTOM_BASE_URL}20/docx.png 1x`,
          `${CUSTOM_BASE_URL}20_2x/docx.png 2x`,
          `${CUSTOM_BASE_URL}20_3x/docx.png 3x`,
          `${CUSTOM_BASE_URL}20_4x/docx.png 4x`,
        ].join(', '),
      );
    });
  });

  it('defaults to the Fluent CDN base url and svg when none are provided', () => {
    expect(getFileTypeIconSrcSet({ extension: 'pdf', size: 16 })).toBe(
      `${DEFAULT_BASE_URL}16/pdf.svg 1x, ${DEFAULT_BASE_URL}16_1.5x/pdf.svg 1.5x`,
    );
  });

  it('resolves a FileIconType and falls back to genericfile for unknown extensions', () => {
    expect(getFileTypeIconSrcSet({ type: FileIconType.folder, size: 24 }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/folder.svg 1x, ${CUSTOM_BASE_URL}24_1.5x/folder.svg 1.5x`,
    );
    expect(getFileTypeIconSrcSet({ extension: 'totally-unknown-ext', size: 24 }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/genericfile.svg 1x, ${CUSTOM_BASE_URL}24_1.5x/genericfile.svg 1.5x`,
    );
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

  it('always resolves the deterministic standard-density (1x) url', () => {
    expect(getFileTypeIconSrc({ extension: 'docx', size: 24, imageFileType: 'png' }, CUSTOM_BASE_URL)).toBe(
      `${CUSTOM_BASE_URL}24/docx.png`,
    );
  });
});
