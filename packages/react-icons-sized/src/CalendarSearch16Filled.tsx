import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 11.5V6H7.33a4.5 4.5 0 011.23 5.44l2 2c.16.16.28.36.35.56h.59a2.5 2.5 0 002.5-2.5zm0-7A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12v-.5zm-7.4 7.8a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L6.6 12.3zM7 9.5a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const CalendarSearch16Filled = wrapIcon(rawSvg({}), 'CalendarSearch16Filled');
export default CalendarSearch16Filled;
      