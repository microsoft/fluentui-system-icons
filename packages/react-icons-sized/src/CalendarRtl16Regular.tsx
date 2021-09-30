import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.75 9a.75.75 0 110-1.5.75.75 0 010 1.5zM10 10.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM8 9a.75.75 0 110-1.5A.75.75 0 018 9zm-.75 1.75a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM5.25 9a.75.75 0 110-1.5.75.75 0 010 1.5zM2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7zM13 6H3v5.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V6zm-1.5-3h-7C3.67 3 3 3.67 3 4.5V5h10v-.5c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const CalendarRtl16Regular = wrapIcon(rawSvg({}), 'CalendarRtl16Regular');
export default CalendarRtl16Regular;
      