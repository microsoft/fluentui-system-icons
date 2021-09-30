import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.26 14H4.5A2.5 2.5 0 012 11.5V6h5.34a5.5 5.5 0 00-1.08 8zM14 5v-.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12zM9.87 8.5a.62.62 0 111.25 0 .62.62 0 01-1.24 0zm1.13 4a.5.5 0 01-1 0v-2a.5.5 0 011 0v2zm-5-2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm1 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
}

const CalendarInfo16Filled = wrapIcon(rawSvg({}), 'CalendarInfo16Filled');
export default CalendarInfo16Filled;
      