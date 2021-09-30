import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 9.5v5A7.5 7.5 0 0014.5 25H6.25A3.25 3.25 0 013 21.75V9.5h22zM21.75 3C23.55 3 25 4.46 25 6.25V8H3V6.25C3 4.45 4.46 3 6.25 3h15.5zM27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.65-2.85a.5.5 0 00-.7 0L19 22.29l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const CalendarCheckmark28Filled = wrapIcon(rawSvg({}), 'CalendarCheckmark28Filled');
export default CalendarCheckmark28Filled;
      