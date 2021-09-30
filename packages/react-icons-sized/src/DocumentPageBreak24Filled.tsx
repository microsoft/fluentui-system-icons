import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012.5 12z" fill={primaryFill} /><path d="M6.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 016.5 12z" fill={primaryFill} /><path d="M10.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M14.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M18.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M5 2a1 1 0 00-1 1v4c0 1.1.9 2 2 2h12a2 2 0 002-2V3a1 1 0 00-1-1H5z" fill={primaryFill} /><path d="M19 22a1 1 0 001-1v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v4a1 1 0 001 1h14z" fill={primaryFill} /></svg>;
}

const DocumentPageBreak24Filled = wrapIcon(rawSvg({}), 'DocumentPageBreak24Filled');
export default DocumentPageBreak24Filled;
      