import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3a10.5 10.5 0 106.49 18.76l6.88 6.87a1.25 1.25 0 101.77-1.76l-6.88-6.88A10.5 10.5 0 0013.5 3zm-8 10.5a8 8 0 1116 0 8 8 0 01-16 0z" fill={primaryFill} /></svg>;
}

const Search32Filled = wrapIcon(rawSvg({}), 'Search32Filled');
export default Search32Filled;
      