import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 11.98a6.5 6.5 0 01-8.3-9.86 2.25 2.25 0 00-2.15.41L3.8 8.23c-.5.42-.8 1.05-.8 1.72v9.8c0 .97.78 1.75 1.75 1.75h3c.97 0 1.75-.78 1.75-1.75v-5c0-.41.34-.75.75-.75h3.5c.41 0 .75.34.75.75v5c0 .97.78 1.75 1.75 1.75h3c.97 0 1.75-.78 1.75-1.75v-7.77z" fill={primaryFill} /><path d="M17.5 1a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.5 8.5V7h2.5a.5.5 0 100-1H18V3.5a.5.5 0 00-1 0V6h-2.5a.5.5 0 000 1H17v2.5a.5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const HomeAdd24Filled = wrapIcon(rawSvg({}), 'HomeAdd24Filled');
export default HomeAdd24Filled;
      