import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.34 4.94a1 1 0 010 1.41 8 8 0 000 11.32 1 1 0 11-1.41 1.41 10 10 0 010-14.14 1 1 0 011.41 0zm12.73 0a10 10 0 010 14.14 1 1 0 01-1.41-1.41 8 8 0 000-11.32 1 1 0 011.41-1.41zM9.31 7.8a1 1 0 010 1.42 3.92 3.92 0 000 5.54 1 1 0 11-1.41 1.41 5.92 5.92 0 010-8.37 1 1 0 011.4 0zm6.96 0a5.92 5.92 0 010 8.37 1 1 0 01-1.42-1.41 3.92 3.92 0 000-5.54 1 1 0 011.42-1.42zm-4.19 2.77a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const Live24Filled = wrapIcon(rawSvg({}), 'Live24Filled');
export default Live24Filled;
      