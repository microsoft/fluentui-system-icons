import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2a9.5 9.5 0 017.7 15.07l6.36 6.37a1.5 1.5 0 01-2 2.22l-.12-.1-6.37-6.37A9.5 9.5 0 1111.5 2zm0 3a6.5 6.5 0 100 13 6.5 6.5 0 000-13z" fill={primaryFill} /></svg>;
}

const Search28Filled = wrapIcon(rawSvg({}), 'Search28Filled');
export default Search28Filled;
      