import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3c0-1.1.9-2 2-2h4a2 2 0 012 2v2.09a1.5 1.5 0 00-1 1.41V3a1 1 0 00-1-1H6a1 1 0 00-1 1v3.5a1.5 1.5 0 00-1-1.41V3z" fill={primaryFill} /><path d="M11 10.5V13a1 1 0 01-1 1H6a1 1 0 01-1-1v-2.5a1.5 1.5 0 01-1 1.41V13c0 1.1.9 2 2 2h4a2 2 0 002-2v-1.09a1.5 1.5 0 01-1-1.41z" fill={primaryFill} /><path d="M1.15 8.15l2-2a.5.5 0 11.7.7L2.71 8H5.5a.5.5 0 010 1H2.7l1.15 1.15a.5.5 0 01-.7.7l-2-2A.5.5 0 011 8.5a.5.5 0 01.14-.35z" fill={primaryFill} /><path d="M12.85 10.85l2-2A.5.5 0 0015 8.5a.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L13.29 8H10.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7z" fill={primaryFill} /></svg>;
}

const PhoneSpanOut16Regular = wrapIcon(rawSvg({}), 'PhoneSpanOut16Regular');
export default PhoneSpanOut16Regular;
      