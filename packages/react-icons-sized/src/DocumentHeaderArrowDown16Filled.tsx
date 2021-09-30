import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 2.75C3 1.78 3.78 1 4.75 1h6.5c.97 0 1.75.78 1.75 1.75V5.6A5.5 5.5 0 007.34 15H4.75C3.78 15 3 14.22 3 13.25V2.75zM6 3a1 1 0 000 2h4a1 1 0 100-2H6zm9 7.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.85 2.35a.5.5 0 00.35.15.5.5 0 00.35-.15l2-2a.5.5 0 00-.7-.7L11 11.29V8.5a.5.5 0 00-1 0v2.8l-1.15-1.15a.5.5 0 00-.7.7l2 2z" fill={primaryFill} /></svg>;
}

const DocumentHeaderArrowDown16Filled = wrapIcon(rawSvg({}), 'DocumentHeaderArrowDown16Filled');
export default DocumentHeaderArrowDown16Filled;
      