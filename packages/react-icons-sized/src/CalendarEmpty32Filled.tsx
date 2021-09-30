import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 3A4.5 4.5 0 003 7.5V9h26V7.5A4.5 4.5 0 0024.5 3h-17zM29 11H3v13.5A4.5 4.5 0 007.5 29h17a4.5 4.5 0 004.5-4.5V11z" fill={primaryFill} /></svg>;
}

const CalendarEmpty32Filled = wrapIcon(rawSvg({}), 'CalendarEmpty32Filled');
export default CalendarEmpty32Filled;
      