import { getFileTypeIconSrc } from './getFileTypeIconSrc';
import { FileIconType } from './FileIconType';
import { DEFAULT_BASE_URL } from './constants';

const CUSTOM_BASE_URL = 'https://example.com/item-types/';

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
