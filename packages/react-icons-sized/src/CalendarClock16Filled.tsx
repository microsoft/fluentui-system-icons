import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14z" fill={primaryFill} /><path d="M14 5H2v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5z" fill={primaryFill} /><path d="M10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zM10 8.5a.5.5 0 011 0V10h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const CalendarClock16Filled = wrapIcon(rawSvg({}), 'CalendarClock16Filled');
export default CalendarClock16Filled;
      