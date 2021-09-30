import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.05 3A2.5 2.5 0 013.5 1h5c1.2 0 2.22.86 2.45 2h-9.9zM1 4v4.5A2.5 2.5 0 003.5 11h5A2.5 2.5 0 0011 8.5V4H1zm2 1.5a.5.5 0 111 0 .5.5 0 01-1 0zm0 2a.5.5 0 111 0 .5.5 0 01-1 0zM5.5 5a.5.5 0 110 1 .5.5 0 010-1zM5 7.5a.5.5 0 111 0 .5.5 0 01-1 0zM7.5 5a.5.5 0 110 1 .5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CalendarLtr12Filled = wrapIcon(rawSvg({}), 'CalendarLtr12Filled');
export default CalendarLtr12Filled;
      