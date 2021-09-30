import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 5C6.78 5 6 5.78 6 6.75v1c0 .97.78 1.75 1.75 1.75h5.5c.97 0 1.75-.78 1.75-1.75v-1C15 5.78 14.22 5 13.25 5h-5.5zM7.5 6.75c0-.14.11-.25.25-.25h5.5c.14 0 .25.11.25.25v1c0 .14-.11.25-.25.25h-5.5a.25.25 0 01-.25-.25v-1zm3 4a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM9.25 15.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM7 10.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zM5.75 15.5a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14 10.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm-1.25 4.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM6.14 2A3.14 3.14 0 003 5.14v11.22c0 1.74 1.4 3.14 3.14 3.14h8.72c1.74 0 3.14-1.4 3.14-3.14V5.14C18 3.4 16.6 2 14.86 2H6.14zM4.5 5.14c0-.9.73-1.64 1.64-1.64h8.72c.9 0 1.64.73 1.64 1.64v11.22c0 .9-.73 1.64-1.64 1.64H6.14c-.9 0-1.64-.73-1.64-1.64V5.14zm1.3 15.35c.45.9 1.38 1.51 2.46 1.51h6.99c2.9 0 5.25-2.35 5.25-5.25v-9.5c0-1.07-.62-2-1.51-2.46l.01.35V16.75a3.75 3.75 0 01-3.75 3.75H6.14l-.34-.01z" fill={primaryFill} /></svg>;
}

const CalculatorMultiple24Regular = wrapIcon(rawSvg({}), 'CalculatorMultiple24Regular');
export default CalculatorMultiple24Regular;
      