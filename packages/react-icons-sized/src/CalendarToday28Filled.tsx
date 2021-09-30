import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 14.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" fill={primaryFill} /><path d="M25 21.75V9.5H3v12.25C3 23.55 4.46 25 6.25 25h6v-3.57a1.75 1.75 0 01-1.66-2.99l2.25-2a1.75 1.75 0 012.32 0l2.25 2a1.75 1.75 0 01-1.66 2.99V25h6c1.8 0 3.25-1.46 3.25-3.25zm-8.75-8.5a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" fill={primaryFill} /><path d="M25 6.25C25 4.45 23.54 3 21.75 3H6.25A3.25 3.25 0 003 6.25V8h22V6.25z" fill={primaryFill} /><path d="M15.75 20.31a.75.75 0 001-1.12l-2.25-2a.75.75 0 00-1 0l-2.25 2a.75.75 0 001 1.12l1-.89v5.83a.75.75 0 001.5 0v-5.83l1 .9z" fill={primaryFill} /></svg>;
}

const CalendarToday28Filled = wrapIcon(rawSvg({}), 'CalendarToday28Filled');
export default CalendarToday28Filled;
      