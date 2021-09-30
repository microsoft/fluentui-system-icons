import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a4 4 0 102.25 7.3l2.47 2.48a.75.75 0 101.06-1.06L8.31 7.25A4 4 0 005 1zM2.5 5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0z" fill={primaryFill} /></svg>;
}

const Search12Filled = wrapIcon(rawSvg({}), 'Search12Filled');
export default Search12Filled;
      