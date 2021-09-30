import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.05 4A2.5 2.5 0 014.5 2h5a2.5 2.5 0 012.45 2h-9.9zM2 5v4.5A2.5 2.5 0 004.5 12h5A2.5 2.5 0 0012 9.5V5H2zm4.5 9a2.5 2.5 0 01-2-1h5.25c1.8 0 3.25-1.46 3.25-3.25V4.5c.6.46 1 1.18 1 2v3.25C14 12.1 12.1 14 9.75 14H6.5z" fill={primaryFill} /></svg>;
}

const CalendarMultiple16Filled = wrapIcon(rawSvg({}), 'CalendarMultiple16Filled');
export default CalendarMultiple16Filled;
      