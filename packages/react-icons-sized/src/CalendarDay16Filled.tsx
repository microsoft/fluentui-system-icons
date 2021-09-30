import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 10V9h4v1H6zm8 1.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5v7zM5.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 3a.5.5 0 00-.5.5v2c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-2a.5.5 0 00-.5-.5h-5z" fill={primaryFill} /></svg>;
}

const CalendarDay16Filled = wrapIcon(rawSvg({}), 'CalendarDay16Filled');
export default CalendarDay16Filled;
      