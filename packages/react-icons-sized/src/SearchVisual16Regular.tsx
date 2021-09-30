import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1a.5.5 0 01-1 0v-1c0-.83-.67-1.5-1.5-1.5h-1a.5.5 0 010-1h1z" fill={primaryFill} /><path d="M4.5 2A2.5 2.5 0 002 4.5v1a.5.5 0 001 0v-1C3 3.67 3.67 3 4.5 3h1a.5.5 0 000-1h-1z" fill={primaryFill} /><path d="M11.5 14a2.5 2.5 0 002.5-2.5v-1a.5.5 0 00-1 0v1c0 .83-.67 1.5-1.5 1.5h-1a.5.5 0 000 1h1z" fill={primaryFill} /><path d="M2 11.5A2.5 2.5 0 004.5 14h1a.5.5 0 000-1h-1A1.5 1.5 0 013 11.5v-1a.5.5 0 00-1 0v1z" fill={primaryFill} /><path d="M8 10a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M5 5.75a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const SearchVisual16Regular = wrapIcon(rawSvg({}), 'SearchVisual16Regular');
export default SearchVisual16Regular;
      