import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7A2.5 2.5 0 0011.5 2h-7zM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V6H3V4.5zM11.7 7H13v.3L10.3 10H8.7l3-3zm-1.4 0l-3 3H5.7l3-3h1.6zm-6 3H3v-.3L5.7 7h1.6l-3 3zM3 8.3V7h1.3L3 8.3zm8.7 1.7L13 8.7V10h-1.3z" fill={primaryFill} /></svg>;
}

const CalendarPatterns16Regular = wrapIcon(rawSvg({}), 'CalendarPatterns16Regular');
export default CalendarPatterns16Regular;
      