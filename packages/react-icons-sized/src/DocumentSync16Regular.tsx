import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.2c.32-.08.66-.15 1-.18V3a1 1 0 011-1h3v2.5c0 .83.67 1.5 1.5 1.5H13v7a1 1 0 01-1 1H9.74c-.31.38-.67.72-1.08 1H12a2 2 0 002-2V5.41c0-.4-.16-.78-.44-1.06l-2.91-2.91A1.5 1.5 0 009.59 1H6zm6.8 4h-2.3a.5.5 0 01-.5-.5V2.2L12.8 5zM5.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM7 8v.15a3 3 0 00-3.62.48.5.5 0 00.7.7A2 2 0 016.48 9H6a.5.5 0 000 1h1.5a.5.5 0 00.5-.5V8a.5.5 0 00-1 0zm-1.55 5.25a3 3 0 002.17-.88.5.5 0 10-.7-.7 2 2 0 01-2.39.33H5a.5.5 0 000-1H3.5a.5.5 0 00-.5.5V13a.5.5 0 001 0v-.15a3.02 3.02 0 001.45.4z" fill={primaryFill} /></svg>;
}

const DocumentSync16Regular = wrapIcon(rawSvg({}), 'DocumentSync16Regular');
export default DocumentSync16Regular;
      