import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 3a1.25 1.25 0 100 2.5h6.48L3.37 26.87a1.25 1.25 0 001.76 1.76L26.5 7.27v6.48a1.25 1.25 0 102.5 0v-9.5C29 3.56 28.44 3 27.75 3h-9.5z" fill={primaryFill} /></svg>;
}

const ArrowUpRight32Filled = wrapIcon(rawSvg({}), 'ArrowUpRight32Filled');
export default ArrowUpRight32Filled;
      