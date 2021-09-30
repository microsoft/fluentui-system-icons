import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 4.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h1.76a5.5 5.5 0 01-.66-1H4.5A1.5 1.5 0 013 11.5V6h4.34a5.47 5.47 0 016.66.26V4.5zm-3.5.5H3v-.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5V5h-2.5zm-.63 3.5a.62.62 0 111.25 0 .62.62 0 01-1.24 0zm1.13 4a.5.5 0 01-1 0v-2a.5.5 0 011 0v2zm-5-2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm1 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
}

const CalendarInfo16Regular = wrapIcon(rawSvg({}), 'CalendarInfo16Regular');
export default CalendarInfo16Regular;
      