import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.88 3.12c.5.48.5 1.28 0 1.76L6.02 7.75H17.5A10.75 10.75 0 116.75 18.5a1.25 1.25 0 112.5 0 8.25 8.25 0 108.25-8.25H6.02l2.86 2.87a1.25 1.25 0 01-1.76 1.76l-5-5a1.25 1.25 0 010-1.76l5-5a1.25 1.25 0 011.76 0z" fill={primaryFill} /></svg>;
}

const ArrowReset32Filled = wrapIcon(rawSvg({}), 'ArrowReset32Filled');
export default ArrowReset32Filled;
      