import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.1 10.17a4.5 4.5 0 111.06-1.06l3.62 3.61a.75.75 0 11-1.06 1.06l-3.61-3.61zm.4-3.67a3 3 0 10-6 0 3 3 0 006 0z" fill={primaryFill} /></svg>;
}

const Search16Filled = wrapIcon(rawSvg({}), 'Search16Filled');
export default Search16Filled;
      