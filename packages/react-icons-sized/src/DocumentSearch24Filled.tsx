import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 8V2H7a2 2 0 00-2 2v5.3a6 6 0 018.2 8.18l3.54 3.53c.28.28.44.63.5.99H19a2 2 0 002-2V10h-6a2 2 0 01-2-2z" fill={primaryFill} /><path d="M14.97 22.78a.75.75 0 101.06-1.06l-4.11-4.11a4.98 4.98 0 00-.35-6.61A4.98 4.98 0 003 14.5a5 5 0 007.82 4.13l4.15 4.15zM8 11a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill={primaryFill} /><path d="M14.5 8V2.5l6 6H15a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentSearch24Filled = wrapIcon(rawSvg({}), 'DocumentSearch24Filled');
export default DocumentSearch24Filled;
      