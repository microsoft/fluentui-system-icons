import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v3a.75.75 0 01-1.5 0v-3c0-.97-.78-1.75-1.75-1.75h-3a.75.75 0 010-1.5h3z" fill={primaryFill} /><path d="M6.25 3A3.25 3.25 0 003 6.25v3a.75.75 0 001.5 0v-3c0-.97.78-1.75 1.75-1.75h3a.75.75 0 000-1.5h-3z" fill={primaryFill} /><path d="M17.75 21c1.8 0 3.25-1.46 3.25-3.25v-3a.75.75 0 00-1.5 0v3c0 .97-.78 1.75-1.75 1.75h-3a.75.75 0 000 1.5h3z" fill={primaryFill} /><path d="M3 17.75C3 19.55 4.46 21 6.25 21h3a.75.75 0 000-1.5h-3c-.97 0-1.75-.78-1.75-1.75v-3a.75.75 0 00-1.5 0v3z" fill={primaryFill} /><path d="M12 15a3 3 0 100-6 3 3 0 000 6zm0-1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /><path d="M7.5 8.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const SearchVisual24Regular = wrapIcon(rawSvg({}), 'SearchVisual24Regular');
export default SearchVisual24Regular;
      