import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 9c.41 0 .75.34.75.75v3.5a.75.75 0 01-1.5 0v-3.5c0-.41.34-.75.75-.75z" fill={primaryFill} /><path d="M10 8a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M10 2.75a7.25 7.25 0 015.63 11.82l4.9 4.9a.75.75 0 01-.98 1.13l-.08-.07-4.9-4.9A7.25 7.25 0 1110 2.75zm0 1.5a5.75 5.75 0 100 11.5 5.75 5.75 0 000-11.5z" fill={primaryFill} /></svg>;
}

const SearchInfo24Regular = wrapIcon(rawSvg({}), 'SearchInfo24Regular');
export default SearchInfo24Regular;
      