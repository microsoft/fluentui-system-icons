import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 9V7h6v2H7z" fill={primaryFill} /><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM6.5 6h7c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-7a.5.5 0 01-.5-.5v-3c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const CalendarWorkWeek20Filled = wrapIcon(rawSvg({}), 'CalendarWorkWeek20Filled');
export default CalendarWorkWeek20Filled;
      