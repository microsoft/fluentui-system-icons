import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2A4.5 4.5 0 002 6.5V7h24v-.5A4.5 4.5 0 0021.5 2h-15zM2 21.5V9h24v12.5a4.5 4.5 0 01-4.5 4.5h-15A4.5 4.5 0 012 21.5zm26-12V5.76c1.2.8 2 2.18 2 3.74V22a8 8 0 01-8 8H9.5a4.5 4.5 0 01-3.74-2H22a6 6 0 006-6V9.5z" fill={primaryFill} /></svg>;
}

const CalendarMultiple32Filled = wrapIcon(rawSvg({}), 'CalendarMultiple32Filled');
export default CalendarMultiple32Filled;
      