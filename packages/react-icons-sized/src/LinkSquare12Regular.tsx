import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3c0-1.1.9-2 2-2h3a2 2 0 012 2v3a2 2 0 01-2 2V7a1 1 0 001-1V3a1 1 0 00-1-1H3a1 1 0 00-1 1v3a1 1 0 001 1v1a2 2 0 01-2-2V3z" fill={primaryFill} /><path d="M4 9c0 1.1.9 2 2 2h3a2 2 0 002-2V6a2 2 0 00-2-2v1a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1V4a2 2 0 00-2 2v3z" fill={primaryFill} /></svg>;
}

const LinkSquare12Regular = wrapIcon(rawSvg({}), 'LinkSquare12Regular');
export default LinkSquare12Regular;
      