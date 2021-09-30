import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v1.26A4.48 4.48 0 017.33 6H13v5.5c0 .83-.67 1.5-1.5 1.5h-1.38l.44.44c.16.16.28.36.35.56h.59a2.5 2.5 0 002.5-2.5v-7zM4.5 5H3v-.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V5H4.5zm2.1 7.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L6.6 12.3zM7 9.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const CalendarSearch16Regular = wrapIcon(rawSvg({}), 'CalendarSearch16Regular');
export default CalendarSearch16Regular;
      