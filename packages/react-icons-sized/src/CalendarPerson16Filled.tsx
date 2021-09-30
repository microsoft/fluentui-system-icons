import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.4 14a3.43 3.43 0 01-.4-1.62 2.3 2.3 0 012.33-2.3h.02A2.99 2.99 0 019.26 6H2v5.5A2.5 2.5 0 004.5 14h2.9zM14 5v-.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12zm-2.5 5a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const CalendarPerson16Filled = wrapIcon(rawSvg({}), 'CalendarPerson16Filled');
export default CalendarPerson16Filled;
      