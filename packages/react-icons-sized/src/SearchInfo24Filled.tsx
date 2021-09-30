import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 10a7.25 7.25 0 10-2.68 5.63l4.9 4.9.08.07a.75.75 0 00.98-1.13l-4.9-4.9A7.22 7.22 0 0017.25 10zM11 7a1 1 0 11-2 0 1 1 0 012 0zm-1 2c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const SearchInfo24Filled = wrapIcon(rawSvg({}), 'SearchInfo24Filled');
export default SearchInfo24Filled;
      