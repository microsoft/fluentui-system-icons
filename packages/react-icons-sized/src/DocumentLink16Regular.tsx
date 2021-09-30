import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h3.59c.4 0 .78.16 1.06.44l2.91 2.91c.28.28.44.67.44 1.06V13a2 2 0 01-2 2H9.95c.3-.29.54-.63.71-1H12a1 1 0 001-1V6h-2.5A1.5 1.5 0 019 4.5V2H6a1 1 0 00-1 1v6H4V3zm6.5 2h2.3L10 2.2v2.3c0 .28.22.5.5.5zm-7 5a2.5 2.5 0 000 5H4a.5.5 0 000-1h-.5a1.5 1.5 0 010-3H4a.5.5 0 000-1h-.5zM7 10a.5.5 0 000 1h.5a1.5 1.5 0 010 3H7a.5.5 0 000 1h.5a2.5 2.5 0 000-5H7zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const DocumentLink16Regular = wrapIcon(rawSvg({}), 'DocumentLink16Regular');
export default DocumentLink16Regular;
      