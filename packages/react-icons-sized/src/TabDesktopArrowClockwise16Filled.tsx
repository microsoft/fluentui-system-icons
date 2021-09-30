import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h3v1.75C7 4.44 7.56 5 8.25 5H14v7a2 2 0 01-2 2H9a4.98 4.98 0 00.25-5.64V7.25a1.5 1.5 0 00-2.63-.98A5 5 0 002 7V4z" fill={primaryFill} /><path d="M8 2v1.75c0 .14.11.25.25.25H14a2 2 0 00-2-2H8z" fill={primaryFill} /><path d="M8.25 7.2a.5.5 0 00-1 .05v.44A4 4 0 109 11a.5.5 0 00-1 .01 3 3 0 11-1.34-2.5H6a.5.5 0 000 1h1.75a.5.5 0 00.5-.5V7.25a.5.5 0 000-.05z" fill={primaryFill} /></svg>;
}

const TabDesktopArrowClockwise16Filled = wrapIcon(rawSvg({}), 'TabDesktopArrowClockwise16Filled');
export default TabDesktopArrowClockwise16Filled;
      