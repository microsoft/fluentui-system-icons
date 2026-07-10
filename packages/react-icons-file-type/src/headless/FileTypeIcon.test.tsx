import * as React from 'react';
import { render } from '@testing-library/react';
import { FileTypeIcon, fileTypeIconDataAttribute } from './FileTypeIcon';
import { FileTypeIconsProvider } from '../common/FileTypeIconsContext';
import { FileIconType } from '../common/FileIconType';
import { DEFAULT_BASE_URL } from '../common/constants';

describe('headless/FileTypeIcon', () => {
  it('renders an img using the default Fluent CDN when no provider is present', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('src', `${DEFAULT_BASE_URL}24/docx.svg`);
    expect(img).toHaveAttribute('width', '24');
    expect(img).toHaveAttribute('height', '24');
    expect(img).toHaveAttribute('alt', 'docx');
  });

  it('tags the img with the styling-hook data attribute', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} />);
    expect(container.querySelector('img')).toHaveAttribute(fileTypeIconDataAttribute);
  });

  it('applies a consumer className verbatim (no style runtime classes)', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} className="custom" alt="A document" />);
    expect(container.querySelector('img')?.getAttribute('class')).toBe('custom');
  });

  it('resolves the baseUrl from FileTypeIconsProvider', () => {
    const baseUrl = 'https://example.com/item-types/';
    const { container } = render(
      <FileTypeIconsProvider baseUrl={baseUrl}>
        <FileTypeIcon type={FileIconType.folder} size={24} />
      </FileTypeIconsProvider>,
    );
    expect(container.querySelector('img')).toHaveAttribute('src', `${baseUrl}24/folder.svg`);
  });
});
