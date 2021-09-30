import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h2v-1h-2A1.5 1.5 0 013 11.5V6h10v5.5c0 .83-.67 1.5-1.5 1.5h-2v1h2a2.5 2.5 0 002.5-2.5v-7zM4.5 3h7c.83 0 1.5.67 1.5 1.5V5H3v-.5C3 3.67 3.67 3 4.5 3z" fill={primaryFill} /><path d="M8.28 14.91a.5.5 0 00.22-.41v-3.43l.68.56a.5.5 0 00.64-.76l-1.5-1.25a.5.5 0 00-.64 0l-1.5 1.25a.5.5 0 10.64.76l.68-.56v3.43a.5.5 0 00.5.5c.1 0 .2-.03.28-.09z" fill={primaryFill} /><path d="M8.75 7.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const CalendarToday16Regular = wrapIcon(rawSvg({}), 'CalendarToday16Regular');
export default CalendarToday16Regular;
      