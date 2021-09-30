import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 1a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5a2 2 0 002-2V4.41c0-.4-.16-.78-.44-1.06l-1.92-1.91A1.5 1.5 0 0010.58 1H7zm5 11H7a1 1 0 01-1-1V3a1 1 0 011-1h3v1.5c0 .83.67 1.5 1.5 1.5H13v6a1 1 0 01-1 1zm.8-8h-1.3a.5.5 0 01-.5-.5V2.2L12.8 4z" fill={primaryFill} /><path d="M3 4a1 1 0 011-1v8a3 3 0 003 3h5a1 1 0 01-1 1H6.79C4.69 15 3 13.3 3 11.21V4z" fill={primaryFill} /></svg>;
}

const DocumentCopy16Regular = wrapIcon(rawSvg({}), 'DocumentCopy16Regular');
export default DocumentCopy16Regular;
      