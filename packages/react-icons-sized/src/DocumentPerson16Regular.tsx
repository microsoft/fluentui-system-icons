import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.67.44 1.06V13a2 2 0 01-2 2H7.8c.32-.28.59-.62.8-1H12a1 1 0 001-1V6h-2.5A1.5 1.5 0 019 4.5V2H6a1 1 0 00-1 1v2.04a3.02 3.02 0 00-1 0V3zm6.5 2h2.3L10 2.2v2.3c0 .28.22.5.5.5zm-6 5a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 001 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 008 12.38c0-.72-.6-1.3-1.33-1.3H2.33z" fill={primaryFill} /></svg>;
}

const DocumentPerson16Regular = wrapIcon(rawSvg({}), 'DocumentPerson16Regular');
export default DocumentPerson16Regular;
      