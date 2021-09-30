import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v5A2.5 2.5 0 004.5 12h5A2.5 2.5 0 0012 9.5v-5A2.5 2.5 0 009.5 2h-5zM3.09 4c.2-.58.76-1 1.41-1h5c.65 0 1.2.42 1.41 1H3.1zM3 5h8v4.5c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 013 9.5V5zm3.5 9a2.5 2.5 0 01-2-1h5.25c1.8 0 3.25-1.46 3.25-3.25V4.5c.6.46 1 1.18 1 2v3.25C14 12.1 12.1 14 9.75 14H6.5z" fill={primaryFill} /></svg>;
}

const CalendarMultiple16Regular = wrapIcon(rawSvg({}), 'CalendarMultiple16Regular');
export default CalendarMultiple16Regular;
      