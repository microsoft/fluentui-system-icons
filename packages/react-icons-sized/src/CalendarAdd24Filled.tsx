import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM21 8.5v3.52A6.5 6.5 0 0012.02 21H6.25A3.25 3.25 0 013 17.75V8.5h18zM17.5 14h-.09a.5.5 0 00-.4.41l-.01.09V17h-2.59a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4l.09.01H17v2.59c.05.2.2.36.41.4l.09.01h.09a.5.5 0 00.4-.41l.01-.09V18h2.59a.5.5 0 00.4-.41l.01-.09v-.09a.5.5 0 00-.41-.4L20.5 17H18v-2.59a.5.5 0 00-.41-.4L17.5 14zm.25-11C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /></svg>;
}

const CalendarAdd24Filled = wrapIcon(rawSvg({}), 'CalendarAdd24Filled');
export default CalendarAdd24Filled;
      