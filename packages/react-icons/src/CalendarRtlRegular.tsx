import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 11a1 1 0 110-2 1 1 0 010 2zm-1 2a1 1 0 102 0 1 1 0 00-2 0zm-2-2a1 1 0 110-2 1 1 0 010 2zm-1 2a1 1 0 102 0 1 1 0 00-2 0zm-2-2a1 1 0 110-2 1 1 0 010 2zM3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zM16 7H4v7.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V7zm-1.5-3h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5z" fill={primaryFill} /></svg>;
}

const CalendarRtlRegular = wrapIcon(rawSvg({}), 'CalendarRtlRegular');
export default CalendarRtlRegular;
      