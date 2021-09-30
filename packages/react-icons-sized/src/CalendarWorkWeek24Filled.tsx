import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 11V8.5h7V11h-7z" fill={primaryFill} /><path d="M17.75 21c1.8 0 3.25-1.46 3.25-3.25V6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.46 21 6.25 21h11.5zm-10-14h8.5c.41 0 .75.34.75.75v4c0 .41-.34.75-.75.75h-8.5a.75.75 0 01-.75-.75v-4c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const CalendarWorkWeek24Filled = wrapIcon(rawSvg({}), 'CalendarWorkWeek24Filled');
export default CalendarWorkWeek24Filled;
      