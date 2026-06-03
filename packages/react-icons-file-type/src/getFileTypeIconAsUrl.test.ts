import { getFileTypeIconAsUrl } from './getFileTypeIconAsUrl';
import { getFileTypeIconAsHTMLString } from './getFileTypeIconAsHTMLString';
import { DEFAULT_BASE_URL } from './constants';

describe('getFileTypeIconAsUrl', () => {
  it('resolves a url against the default Fluent CDN base url', () => {
    expect(getFileTypeIconAsUrl({ extension: 'docx', size: 96 })).toBe(`${DEFAULT_BASE_URL}96/docx.svg`);
  });

  it('resolves a url against a custom base url', () => {
    const baseUrl = 'https://example.com/item-types/';
    expect(getFileTypeIconAsUrl({ extension: 'pdf', size: 24 }, baseUrl)).toBe(`${baseUrl}24/pdf.svg`);
  });

  it('falls back to genericfile for unknown extensions', () => {
    expect(getFileTypeIconAsUrl({ extension: 'zzz', size: 16 })).toBe(`${DEFAULT_BASE_URL}16/genericfile.svg`);
  });
});

describe('getFileTypeIconAsHTMLString', () => {
  it('returns an img element string with the resolved src', () => {
    const baseUrl = 'https://example.com/item-types/';
    expect(getFileTypeIconAsHTMLString({ extension: 'docx', size: 48 }, baseUrl)).toBe(
      `<img src="${baseUrl}48/docx.svg" alt="" />`,
    );
  });
});
