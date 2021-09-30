import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 5.5a.5.5 0 10-1 0 .5.5 0 001 0zM8.5 7a.5.5 0 110 1 .5.5 0 010-1zM7 5.5a.5.5 0 10-1 0 .5.5 0 001 0zM6.5 7a.5.5 0 110 1 .5.5 0 010-1zM5 5.5a.5.5 0 10-1 0 .5.5 0 001 0zm6-2A2.5 2.5 0 008.5 1h-5A2.5 2.5 0 001 3.5v5A2.5 2.5 0 003.5 11h5A2.5 2.5 0 0011 8.5v-5zM8.5 2c.65 0 1.2.42 1.41 1H2.1c.2-.58.76-1 1.41-1h5zM2 4h8v4.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 012 8.5V4z" fill={primaryFill} /></svg>;
}

const CalendarRtl12Regular = wrapIcon(rawSvg({}), 'CalendarRtl12Regular');
export default CalendarRtl12Regular;
      