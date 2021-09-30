import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012.5 12z" fill={primaryFill} /><path d="M6.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 016.5 12z" fill={primaryFill} /><path d="M10.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M14.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M18.5 12c0-.41.34-.75.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75z" fill={primaryFill} /><path d="M4.75 2a.75.75 0 00-.75.75V7c0 1.1.9 2 2 2h12a2 2 0 002-2V2.75a.75.75 0 00-1.5 0V7a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V2.75A.75.75 0 004.75 2z" fill={primaryFill} /><path d="M19.25 22c.41 0 .75-.34.75-.75V17a2 2 0 00-2-2H6a2 2 0 00-2 2v4.25a.75.75 0 001.5 0V17c0-.27.22-.5.5-.5h12c.28 0 .5.23.5.5v4.25c0 .41.34.75.75.75z" fill={primaryFill} /></svg>;
}

const DocumentPageBreak24Regular = wrapIcon(rawSvg({}), 'DocumentPageBreak24Regular');
export default DocumentPageBreak24Regular;
      