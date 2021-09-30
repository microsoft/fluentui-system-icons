import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3A2.5 2.5 0 003 5.5v3.76a5.48 5.48 0 015.2-1A1.5 1.5 0 0111 9v1.34a5.48 5.48 0 01-.26 6.66h3.76a2.5 2.5 0 002.5-2.5V7H9.5A1.5 1.5 0 018 5.5V3H5.5z" fill={primaryFill} /><path d="M9 3v2.5c0 .28.22.5.5.5H17v-.5A2.5 2.5 0 0014.5 3H9z" fill={primaryFill} /><path d="M10 11a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.8a3.5 3.5 0 101.7 3 .5.5 0 011 0 4.5 4.5 0 11-2-3.74V9a.5.5 0 01.5-.5c.28 0 .5.22.5.5v2z" fill={primaryFill} /></svg>;
}

const TabDesktopArrowClockwise20Filled = wrapIcon(rawSvg({}), 'TabDesktopArrowClockwise20Filled');
export default TabDesktopArrowClockwise20Filled;
      