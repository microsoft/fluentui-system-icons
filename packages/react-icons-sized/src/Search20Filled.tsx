import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3a5.5 5.5 0 014.38 8.82l4.15 4.15a.75.75 0 01-.98 1.13l-.08-.07-4.15-4.15A5.5 5.5 0 118.5 3zm0 1.5a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const Search20Filled = wrapIcon(rawSvg({}), 'Search20Filled');
export default Search20Filled;
      