import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 9.5v12.25c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V9.5h22zM21.75 3C23.55 3 25 4.46 25 6.25V8H3V6.25C3 4.45 4.46 3 6.25 3h15.5z" fill={primaryFill} /></svg>;
}

const CalendarEmpty28Filled = wrapIcon(rawSvg({}), 'CalendarEmpty28Filled');
export default CalendarEmpty28Filled;
      