import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a1 1 0 100 2h7.59L3.29 27.3a1 1 0 101.42 1.4L27 6.42V14a1 1 0 102 0V4a1 1 0 00-1-1H18z" fill={primaryFill} /></svg>;
}

const ArrowUpRight32Regular = wrapIcon(rawSvg({}), 'ArrowUpRight32Regular');
export default ArrowUpRight32Regular;
      