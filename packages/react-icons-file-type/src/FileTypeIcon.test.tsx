import * as React from 'react';
import { render } from '@testing-library/react';
import { FileTypeIcon } from './FileTypeIcon';
import { FileTypeIconsProvider } from './FileTypeIconsContext';
import { DEFAULT_BASE_URL } from './constants';

describe('FileTypeIcon', () => {
  it('renders an img using the default Fluent CDN when no provider is present', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} />);
    const img = container.querySelector('img');
    expect(img).not.toBeNull();
    expect(img).toHaveAttribute('src', `${DEFAULT_BASE_URL}24/docx.svg`);
    expect(img).toHaveAttribute('width', '24');
    expect(img).toHaveAttribute('height', '24');
    expect(img).toHaveAttribute('alt', 'docx');
  });

  it('uses the baseUrl from FileTypeIconsProvider', () => {
    const baseUrl = 'https://example.com/item-types/';
    const { container } = render(
      <FileTypeIconsProvider baseUrl={baseUrl}>
        <FileTypeIcon extension="pdf" size={24} />
      </FileTypeIconsProvider>,
    );
    expect(container.querySelector('img')).toHaveAttribute('src', `${baseUrl}24/pdf.svg`);
  });

  it('lets a per-icon baseUrl prop override the provider', () => {
    const providerUrl = 'https://provider.example.com/item-types/';
    const iconUrl = 'https://icon.example.com/item-types/';
    const { container } = render(
      <FileTypeIconsProvider baseUrl={providerUrl}>
        <FileTypeIcon extension="pptx" size={32} baseUrl={iconUrl} />
      </FileTypeIconsProvider>,
    );
    expect(container.querySelector('img')).toHaveAttribute('src', `${iconUrl}32/pptx.svg`);
  });

  it('forwards arbitrary img attributes and merges className', () => {
    const { container } = render(
      <FileTypeIcon extension="docx" size={16} className="custom" data-testid="ft" alt="A document" />,
    );
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('data-testid', 'ft');
    expect(img).toHaveAttribute('alt', 'A document');
    expect(img?.className).toContain('custom');
  });
});
