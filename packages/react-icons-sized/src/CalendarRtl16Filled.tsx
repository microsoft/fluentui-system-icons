import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 11.5V6h12v5.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5zm8-3.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm0 2.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm-2.75-2.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zm0 2.5a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM4.5 8.25a.75.75 0 101.5 0 .75.75 0 00-1.5 0zM2 4.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5H2v-.5z" fill={primaryFill} /></svg>;
}

const CalendarRtl16Filled = wrapIcon(rawSvg({}), 'CalendarRtl16Filled');
export default CalendarRtl16Filled;
      