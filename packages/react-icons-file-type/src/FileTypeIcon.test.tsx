import * as React from 'react';
import { render } from '@testing-library/react';
import { FileTypeIcon } from './FileTypeIcon';
import { FileTypeIconsProvider } from './FileTypeIconsContext';
import { FileIconType } from './FileIconType';
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

  it('emits a density srcset so the browser selects the asset for the device pixel ratio', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} imageFileType="png" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('src', `${DEFAULT_BASE_URL}24/docx.png`);
    expect(img).toHaveAttribute(
      'srcset',
      [
        `${DEFAULT_BASE_URL}24/docx.png 1x`,
        `${DEFAULT_BASE_URL}24_1.5x/docx.png 1.5x`,
        `${DEFAULT_BASE_URL}24_2x/docx.png 2x`,
        `${DEFAULT_BASE_URL}24_3x/docx.png 3x`,
        `${DEFAULT_BASE_URL}24_4x/docx.png 4x`,
      ].join(', '),
    );
  });

  it('exposes the image to assistive tech when it has an accessible name', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} alt="A document" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', 'A document');
    expect(img).not.toHaveAttribute('aria-hidden');
  });

  it('hides the image from assistive tech when it has no accessible name', () => {
    const { container } = render(<FileTypeIcon extension="docx" size={24} alt="" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('aria-hidden', 'true');
    expect(img).not.toHaveAttribute('role');
  });

  it('defaults to a decorative empty alt when no alt or extension is provided', () => {
    const { container } = render(<FileTypeIcon type={FileIconType.folder} size={24} />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('alt', '');
    expect(img).toHaveAttribute('aria-hidden', 'true');
    expect(img).not.toHaveAttribute('role');
  });

  it('keeps the icon in the a11y tree and omits alt when labelled by aria-label', () => {
    const { container } = render(<FileTypeIcon type={FileIconType.folder} size={24} aria-label="My folder" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('aria-label', 'My folder');
    expect(img).not.toHaveAttribute('alt');
    expect(img).not.toHaveAttribute('aria-hidden');
  });

  it('keeps the icon in the a11y tree and omits alt when labelled by the native title', () => {
    const { container } = render(<FileTypeIcon type={FileIconType.folder} size={24} title="My folder" />);
    const img = container.querySelector('img');
    expect(img).toHaveAttribute('title', 'My folder');
    expect(img).not.toHaveAttribute('alt');
    expect(img).not.toHaveAttribute('aria-hidden');
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
