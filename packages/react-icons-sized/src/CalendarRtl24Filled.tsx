import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 8.5v9.25C3 19.55 4.46 21 6.25 21h11.5c1.8 0 3.25-1.46 3.25-3.25V8.5H3zM16.75 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM12 15a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm4.75-4.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.75 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-4.75 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm-1-7.5A3.25 3.25 0 003 6.25V7h18v-.75C21 4.45 19.54 3 17.75 3H6.25z" fill={primaryFill} /></svg>;
}

const CalendarRtl24Filled = wrapIcon(rawSvg({}), 'CalendarRtl24Filled');
export default CalendarRtl24Filled;
      