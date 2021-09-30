import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11.5V6H2v5.5A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5zM6 8.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.75-2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm2.75-2.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12v-.5z" fill={primaryFill} /></svg>;
}

const CalendarLtr16Filled = wrapIcon(rawSvg({}), 'CalendarLtr16Filled');
export default CalendarLtr16Filled;
      