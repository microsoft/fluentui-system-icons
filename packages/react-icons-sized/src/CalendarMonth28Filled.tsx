import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zM8.5 15.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-5.5-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const CalendarMonth28Filled = wrapIcon(rawSvg({}), 'CalendarMonth28Filled');
export default CalendarMonth28Filled;
      