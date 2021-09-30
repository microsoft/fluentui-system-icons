import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.14 2A3.14 3.14 0 003 5.14v11.22c0 1.74 1.4 3.14 3.14 3.14h8.72c1.74 0 3.14-1.4 3.14-3.14V5.14C18 3.4 16.6 2 14.86 2H6.14zm1.61 3h5.5c.97 0 1.75.78 1.75 1.75v1c0 .97-.78 1.75-1.75 1.75h-5.5C6.78 9.5 6 8.72 6 7.75v-1C6 5.78 6.78 5 7.75 5zm-2 7a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zm4.75-1.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm0 3.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-3.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12.75 12a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0zM14 14.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-8.2 6.24c.45.9 1.38 1.51 2.46 1.51h6.99c2.9 0 5.25-2.35 5.25-5.25v-9.5c0-1.07-.62-2-1.51-2.46l.01.35V16.75a3.75 3.75 0 01-3.75 3.75H6.14l-.34-.01z" fill={primaryFill} /></svg>;
}

const CalculatorMultiple24Filled = wrapIcon(rawSvg({}), 'CalculatorMultiple24Filled');
export default CalculatorMultiple24Filled;
      