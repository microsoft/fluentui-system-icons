import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h3.58c.4 0 .78.16 1.06.44l2.92 2.92c.28.28.44.66.44 1.06V13a2 2 0 01-2 2H8.67c.4-.29.76-.62 1.07-1H12a1 1 0 001-1V6h-2.5A1.5 1.5 0 019 4.5V2H6a1 1 0 00-1 1v2.02c-.34.03-.68.1-1 .19V3zm6-.79v2.3c0 .27.22.5.5.5h2.3L10 2.2zm0 8.29a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L6 11.29V8.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" fill={primaryFill} /></svg>;
}

const DocumentArrowDown16Regular = wrapIcon(rawSvg({}), 'DocumentArrowDown16Regular');
export default DocumentArrowDown16Regular;
      