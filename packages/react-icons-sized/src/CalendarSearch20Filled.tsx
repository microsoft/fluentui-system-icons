import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5V7H3v2.47a4.5 4.5 0 016.06 5.97L10.62 17h3.88a2.5 2.5 0 002.5-2.5zm0-9A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V6h14v-.5zM7.1 16.3a3.5 3.5 0 11.7-.7l2.55 2.55a.5.5 0 01-.7.7L7.1 16.3zm.4-2.8a2.5 2.5 0 10-5 0 2.5 2.5 0 005 0z" fill={primaryFill} /></svg>;
}

const CalendarSearch20Filled = wrapIcon(rawSvg({}), 'CalendarSearch20Filled');
export default CalendarSearch20Filled;
      