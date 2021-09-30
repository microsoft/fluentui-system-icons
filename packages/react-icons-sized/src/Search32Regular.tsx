import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3a10.5 10.5 0 106.68 18.6l7.11 7.1a1 1 0 001.42-1.4l-7.11-7.12A10.5 10.5 0 0013.5 3zM5 13.5a8.5 8.5 0 1117 0 8.5 8.5 0 01-17 0z" fill={primaryFill} /></svg>;
}

const Search32Regular = wrapIcon(rawSvg({}), 'Search32Regular');
export default Search32Regular;
      