import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 3a3 3 0 013 3v1.5a.5.5 0 01-1 0V6a2 2 0 00-2-2h-1.5a.5.5 0 010-1H14z" fill={primaryFill} /><path d="M6 3a3 3 0 00-3 3v1.5a.5.5 0 001 0V6c0-1.1.9-2 2-2h1.5a.5.5 0 000-1H6z" fill={primaryFill} /><path d="M14 17a3 3 0 003-3v-1.5a.5.5 0 00-1 0V14a2 2 0 01-2 2h-1.5a.5.5 0 000 1H14z" fill={primaryFill} /><path d="M3 14a3 3 0 003 3h1.5a.5.5 0 000-1H6a2 2 0 01-2-2v-1.5a.5.5 0 00-1 0V14z" fill={primaryFill} /><path d="M10 12a2 2 0 100-4 2 2 0 000 4zm0-1a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /><path d="M6.5 7.25a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const SearchVisual20Regular = wrapIcon(rawSvg({}), 'SearchVisual20Regular');
export default SearchVisual20Regular;
      