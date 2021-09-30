import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.5A4.5 4.5 0 016.5 2h15A4.5 4.5 0 0126 6.5v15a4.5 4.5 0 01-4.5 4.5h-15A4.5 4.5 0 012 21.5v-15zM6.5 4A2.5 2.5 0 004 6.5V7h20v-.5A2.5 2.5 0 0021.5 4h-15zM4 21.5A2.5 2.5 0 006.5 24h15a2.5 2.5 0 002.5-2.5V9H4v12.5zm24-12V5.75c1.2.81 2 2.19 2 3.75V22a8 8 0 01-8 8H9.5a4.5 4.5 0 01-3.74-2H22a6 6 0 006-6V9.5z" fill={primaryFill} /></svg>;
}

const CalendarMultiple32Regular = wrapIcon(rawSvg({}), 'CalendarMultiple32Regular');
export default CalendarMultiple32Regular;
      