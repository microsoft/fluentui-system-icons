import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.67.44 1.06V13a2 2 0 01-2 2H8.66c.4-.28.77-.62 1.08-1H12a1 1 0 001-1V6h-2.5A1.5 1.5 0 019 4.5V2H6a1 1 0 00-1 1v2.02c-.34.03-.68.1-1 .19V3zm6.5 2h2.3L10 2.2v2.3c0 .28.22.5.5.5zm-5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2.35-4.85a.5.5 0 01-.7.7L6 9.71v2.79a.5.5 0 01-1 0V9.7l-1.15 1.15a.5.5 0 01-.7-.7l2-2A.5.5 0 015.5 8a.5.5 0 01.35.14l2 2z" fill={primaryFill} /></svg>;
}

const DocumentArrowUp16Regular = wrapIcon(rawSvg({}), 'DocumentArrowUp16Regular');
export default DocumentArrowUp16Regular;
      