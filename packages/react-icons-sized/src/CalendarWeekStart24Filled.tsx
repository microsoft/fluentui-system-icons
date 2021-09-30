import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm-10 4a.75.75 0 00-.75.75v8.5a.75.75 0 001.5 0v-8.5A.75.75 0 007.75 7z" fill={primaryFill} /></svg>;
}

const CalendarWeekStart24Filled = wrapIcon(rawSvg({}), 'CalendarWeekStart24Filled');
export default CalendarWeekStart24Filled;
      