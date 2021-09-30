import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.95 3A2.5 2.5 0 008.5 1h-5a2.5 2.5 0 00-2.45 2h9.9zM11 4v4.5A2.5 2.5 0 018.5 11h-5A2.5 2.5 0 011 8.5V4h10zM9 5.5a.5.5 0 10-1 0 .5.5 0 001 0zm0 2a.5.5 0 10-1 0 .5.5 0 001 0zM6.5 5a.5.5 0 100 1 .5.5 0 000-1zM7 7.5a.5.5 0 10-1 0 .5.5 0 001 0zM4.5 5a.5.5 0 100 1 .5.5 0 000-1z" fill={primaryFill} /></svg>;
}

const CalendarRtl12Filled = wrapIcon(rawSvg({}), 'CalendarRtl12Filled');
export default CalendarRtl12Filled;
      