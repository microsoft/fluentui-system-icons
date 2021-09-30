import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 6a1 1 0 011-1h1a.5.5 0 010 1H4v1a.5.5 0 01-1 0V6z" fill={primaryFill} /><path d="M13 6a1 1 0 00-1-1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0V6z" fill={primaryFill} /><path d="M13 10a1 1 0 01-1 1h-1a.5.5 0 010-1h1V9a.5.5 0 011 0v1z" fill={primaryFill} /><path d="M3 10a1 1 0 001 1h1a.5.5 0 000-1H4V9a.5.5 0 00-1 0v1z" fill={primaryFill} /><path d="M3 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h10a2 2 0 002-2V5a2 2 0 00-2-2H3zm10 1a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h10z" fill={primaryFill} /></svg>;
}

const PageFit16Regular = wrapIcon(rawSvg({}), 'PageFit16Regular');
export default PageFit16Regular;
      