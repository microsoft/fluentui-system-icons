import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 6a14.5 14.5 0 109.14 25.76l9.8 9.8a1.5 1.5 0 102.12-2.12l-9.8-9.8A14.5 14.5 0 0020.5 6zM9 20.5a11.5 11.5 0 1123 0 11.5 11.5 0 01-23 0z" fill={primaryFill} /></svg>;
}

const Search48Filled = wrapIcon(rawSvg({}), 'Search48Filled');
export default Search48Filled;
      