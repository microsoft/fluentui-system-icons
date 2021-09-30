import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 2A2.75 2.75 0 002 4.75v6.5A2.75 2.75 0 004.75 14h6.5A2.75 2.75 0 0014 11.25v-6.5A2.75 2.75 0 0011.25 2h-6.5zM3.5 4.75c0-.69.56-1.25 1.25-1.25h6.5c.69 0 1.25.56 1.25 1.25V6h-9V4.75zM11.7 7h.8v.8L10.3 10H8.7l3-3zm-1.4 0l-3 3H5.7l3-3h1.6zm-6 3h-.8v-.8L5.7 7h1.6l-3 3zm-.8-2.2V7h.8l-.8.8zm8.2 2.2l.8-.8v.8h-.8z" fill={primaryFill} /></svg>;
}

const CalendarPatterns16Filled = wrapIcon(rawSvg({}), 'CalendarPatterns16Filled');
export default CalendarPatterns16Filled;
      