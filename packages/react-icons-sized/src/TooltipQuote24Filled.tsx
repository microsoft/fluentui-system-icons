import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 2C3.01 2 2 3 2 4.25v7.5C2 12.99 3 14 4.25 14h1.94l1.9 3.6a.75.75 0 001.32 0l1.9-3.6h1.94c1.24 0 2.25-1 2.25-2.25v-7.5c0-1.24-1-2.25-2.25-2.25h-9zM5.5 6.25c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75 0 2.15-1.29 3.6-1.72 4.03a.75.75 0 11-1.06-1.06c.2-.2.61-.66.91-1.33a.75.75 0 01-1.13-.64v-1zm4 0c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75 0 2.15-1.29 3.6-1.72 4.03a.75.75 0 11-1.06-1.06c.2-.2.61-.66.91-1.33a.75.75 0 01-1.13-.64v-1zM2.75 16.5h3.63l.79 1.5H2.75a.75.75 0 010-1.5zm18.5 1.5H10.33l.8-1.5h10.12a.75.75 0 010 1.5zM2 21.25c0-.41.34-.75.75-.75h12a.75.75 0 010 1.5h-12a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TooltipQuote24Filled = wrapIcon(rawSvg({}), 'TooltipQuote24Filled');
export default TooltipQuote24Filled;
      