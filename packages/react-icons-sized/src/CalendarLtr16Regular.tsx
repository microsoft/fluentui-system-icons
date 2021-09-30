import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 9a.75.75 0 100-1.5.75.75 0 000 1.5zM6 10.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM8 9a.75.75 0 100-1.5A.75.75 0 008 9zm.75 1.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2-1.75a.75.75 0 100-1.5.75.75 0 000 1.5zM14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7zM3 6h10v5.5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5V6zm1.5-3h7c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3z" fill={primaryFill} /></svg>;
}

const CalendarLtr16Regular = wrapIcon(rawSvg({}), 'CalendarLtr16Regular');
export default CalendarLtr16Regular;
      