import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 4.5V1H5.5C4.67 1 4 1.67 4 2.5v2.54a3 3 0 012.65 5.05h.02c1.26 0 2.33 1 2.33 2.29 0 1.03-.46 1.98-1.2 2.62h4.7c.83 0 1.5-.67 1.5-1.5V6h-3.5A1.5 1.5 0 019 4.5zm1 0V1.25L13.75 5H10.5a.5.5 0 01-.5-.5zM4.5 10a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 001 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 008 12.38c0-.72-.6-1.3-1.33-1.3H2.33z" fill={primaryFill} /></svg>;
}

const DocumentPerson16Filled = wrapIcon(rawSvg({}), 'DocumentPerson16Filled');
export default DocumentPerson16Filled;
      