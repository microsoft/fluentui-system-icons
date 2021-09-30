import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 4a3 3 0 00-3 3v4a3 3 0 106 0V7a3 3 0 00-3-3zm1 7a1 1 0 11-2 0V7a1 1 0 012 0v4z" fill={primaryFill} /><path d="M5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" fill={primaryFill} /><path d="M19 7v4a1 1 0 01-.01.17c.66.16 1.3.42 1.86.76A3 3 0 0021 11V7a3 3 0 10-6 0v4c0 .16.01.33.04.48a6.47 6.47 0 011.96-.46V7a1 1 0 112 0z" fill={primaryFill} /><path d="M23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const DecimalArrowRight24Filled = wrapIcon(rawSvg({}), 'DecimalArrowRight24Filled');
export default DecimalArrowRight24Filled;
      