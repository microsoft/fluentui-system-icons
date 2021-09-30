import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5zm.5 2V9h4v1H6zm8-5.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5v7A2.5 2.5 0 004.5 14h7a2.5 2.5 0 002.5-2.5v-7zm-11 7v-7C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 11.5z" fill={primaryFill} /></svg>;
}

const CalendarDay16Regular = wrapIcon(rawSvg({}), 'CalendarDay16Regular');
export default CalendarDay16Regular;
      