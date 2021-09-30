import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75zM11 7.25a3.75 3.75 0 013.13 5.82l2.4 2.4a.75.75 0 01-.98 1.13l-.08-.07-2.4-2.4A3.75 3.75 0 1111 7.25zm0 1.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" fill={primaryFill} /></svg>;
}

const SearchSquare24Regular = wrapIcon(rawSvg({}), 'SearchSquare24Regular');
export default SearchSquare24Regular;
      