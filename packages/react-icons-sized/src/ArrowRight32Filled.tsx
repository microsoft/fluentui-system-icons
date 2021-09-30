import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 16c0-.69.56-1.25 1.25-1.25h20.54l-7.44-7.63a1.25 1.25 0 111.8-1.74l9.5 9.74a1.25 1.25 0 010 1.76l-9.5 9.74a1.25 1.25 0 11-1.8-1.74l7.44-7.63H4.25C3.56 17.25 3 16.69 3 16z" fill={primaryFill} /></svg>;
}

const ArrowRight32Filled = wrapIcon(rawSvg({}), 'ArrowRight32Filled');
export default ArrowRight32Filled;
      