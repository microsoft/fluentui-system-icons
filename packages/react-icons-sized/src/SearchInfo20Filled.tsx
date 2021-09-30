import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8.5a5.5 5.5 0 10-1.98 4.23l4.13 4.12.07.06a.5.5 0 00.63-.76l-4.12-4.13A5.48 5.48 0 0014 8.5zM8.5 7a.5.5 0 110-1 .5.5 0 010 1zM9 8.5v2a.5.5 0 01-1 0v-2a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const SearchInfo20Filled = wrapIcon(rawSvg({}), 'SearchInfo20Filled');
export default SearchInfo20Filled;
      