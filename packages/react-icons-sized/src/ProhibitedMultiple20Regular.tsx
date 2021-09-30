import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 9a7 7 0 1114 0A7 7 0 012 9zm7-6a6 6 0 00-4.58 9.87l8.45-8.45A5.98 5.98 0 009 3zm0 12a6 6 0 004.58-9.87l-8.45 8.45A5.98 5.98 0 009 15zm2 3a6.97 6.97 0 01-4-1.25 8.01 8.01 0 003.07.18 6 6 0 006.86-6.86 8.07 8.07 0 00-.18-3.06A7 7 0 0111 18z" fill={primaryFill} /></svg>;
}

const ProhibitedMultiple20Regular = wrapIcon(rawSvg({}), 'ProhibitedMultiple20Regular');
export default ProhibitedMultiple20Regular;
      