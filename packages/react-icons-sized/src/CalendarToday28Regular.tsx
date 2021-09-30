import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 6.25C25 4.45 23.54 3 21.75 3H6.25A3.25 3.25 0 003 6.25v15.5C3 23.55 4.46 25 6.25 25h6v-1.5h-6c-.97 0-1.75-.78-1.75-1.75V9.5h19v12.25c0 .97-.78 1.75-1.75 1.75h-6V25h6c1.8 0 3.25-1.46 3.25-3.25V6.25zM6.25 4.5h15.5c.97 0 1.75.78 1.75 1.75V8h-19V6.25c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /><path d="M15.25 13.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" fill={primaryFill} /><path d="M15.75 20.31a.75.75 0 101-1.12l-2.25-2a.75.75 0 00-1 0l-2.25 2a.75.75 0 101 1.12l1-.89v5.83a.75.75 0 001.5 0v-5.83l1 .89z" fill={primaryFill} /></svg>;
}

const CalendarToday28Regular = wrapIcon(rawSvg({}), 'CalendarToday28Regular');
export default CalendarToday28Regular;
      