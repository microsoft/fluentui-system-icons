import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v7.04c1.7.24 3 1.7 3 3.46v.03l2.01-2.02A1.75 1.75 0 1111.5 15L9.47 17h.03a3.5 3.5 0 013.16 5H18a2 2 0 002-2V10h-6a2 2 0 01-2-2zm-6.87 8.4A2.5 2.5 0 011 14.5a2.5 2.5 0 114.13 1.9zM4 13.63a1 1 0 10-1 1.73 1 1 0 001-1.73zm6.78.65a.75.75 0 10-1.06-1.06l-7.5 7.5a.75.75 0 101.06 1.06l7.5-7.5zM7 20.5A2.49 2.49 0 009.5 23 2.5 2.5 0 107 20.5zm3.5 0a1 1 0 11-2 0 1 1 0 012 0zm3-12.5V2.5l6 6H14a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const DocumentPercent24Filled = wrapIcon(rawSvg({}), 'DocumentPercent24Filled');
export default DocumentPercent24Filled;
      