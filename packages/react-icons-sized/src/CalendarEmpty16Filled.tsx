import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 6v5.5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 11.5V6h12zm-2.5-4A2.5 2.5 0 0114 4.5V5H2v-.5A2.5 2.5 0 014.5 2h7z" fill={primaryFill} /></svg>;
}

const CalendarEmpty16Filled = wrapIcon(rawSvg({}), 'CalendarEmpty16Filled');
export default CalendarEmpty16Filled;
      