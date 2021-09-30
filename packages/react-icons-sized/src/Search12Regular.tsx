import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 1a4 4 0 102.45 7.16l2.7 2.7a.5.5 0 00.7-.71l-2.69-2.7A4 4 0 005 1zM2 5a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /></svg>;
}

const Search12Regular = wrapIcon(rawSvg({}), 'Search12Regular');
export default Search12Regular;
      