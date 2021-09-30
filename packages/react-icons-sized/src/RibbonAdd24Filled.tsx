import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 111 0V6h2.5a.5.5 0 010 1H18zm-7-.5c0-1.65.62-3.16 1.63-4.3A7.02 7.02 0 004 9a7 7 0 0012.77 3.96A6.5 6.5 0 0111 6.5zm5 8.75v6c0 .6-.68.96-1.18.61L11 19.17l-3.82 2.7A.75.75 0 016 21.24v-6a7.97 7.97 0 0010 0z" fill={primaryFill} /></svg>;
}

const RibbonAdd24Filled = wrapIcon(rawSvg({}), 'RibbonAdd24Filled');
export default RibbonAdd24Filled;
      