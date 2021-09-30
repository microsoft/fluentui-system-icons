import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a2 2 0 00-2 2v2.2c.32-.08.66-.15 1-.18V3a1 1 0 011-1h3v2.5c0 .83.67 1.5 1.5 1.5H13v7a1 1 0 01-1 1H9.74c-.31.38-.67.72-1.08 1H12a2 2 0 002-2V5.41c0-.4-.16-.78-.44-1.06l-2.91-2.91A1.5 1.5 0 009.59 1H6zm6.8 4h-2.3a.5.5 0 01-.5-.5V2.2L12.8 5z" fill={primaryFill} /><path d="M10 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V10H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V11h1.5a.5.5 0 000-1H6V8.5z" fill={primaryFill} /></svg>;
}

const DocumentAdd16Regular = wrapIcon(rawSvg({}), 'DocumentAdd16Regular');
export default DocumentAdd16Regular;
      