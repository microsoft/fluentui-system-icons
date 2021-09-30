import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 5c0-1.1.9-2 2-2h10a2 2 0 012 2v6a2 2 0 01-2 2H3a2 2 0 01-2-2V5zm2 1v1a.5.5 0 001 0V6h1a.5.5 0 000-1H4a1 1 0 00-1 1zm9-1h-1a.5.5 0 000 1h1v1a.5.5 0 001 0V6a1 1 0 00-1-1zm0 6a1 1 0 001-1V9a.5.5 0 00-1 0v1h-1a.5.5 0 000 1h1zm-8 0h1a.5.5 0 000-1H4V9a.5.5 0 00-1 0v1a1 1 0 001 1z" fill={primaryFill} /></svg>;
}

const PageFit16Filled = wrapIcon(rawSvg({}), 'PageFit16Filled');
export default PageFit16Filled;
      