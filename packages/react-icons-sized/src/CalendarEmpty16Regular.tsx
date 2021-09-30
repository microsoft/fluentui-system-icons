import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v7a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zM13 6H3v5.5c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5V6zm-1.5-3h-7C3.67 3 3 3.67 3 4.5V5h10v-.5c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const CalendarEmpty16Regular = wrapIcon(rawSvg({}), 'CalendarEmpty16Regular');
export default CalendarEmpty16Regular;
      