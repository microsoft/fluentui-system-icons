import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.26 3.2c.3.28.32.76.04 1.06L6.77 8l3.53 3.74a.75.75 0 11-1.1 1.02l-4-4.25a.75.75 0 010-1.02l4-4.25a.75.75 0 011.06-.04z" fill={primaryFill} /></svg>;
}

const ChevronLeft16Filled = wrapIcon(rawSvg({}), 'ChevronLeft16Filled');
export default ChevronLeft16Filled;
      