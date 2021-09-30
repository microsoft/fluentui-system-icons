import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 13.5v-4h10v4H9zm-6 8.25C3 23.55 4.46 25 6.25 25h15.5c1.8 0 3.25-1.46 3.25-3.25V6.25C25 4.45 23.54 3 21.75 3H6.25A3.25 3.25 0 003 6.25v15.5zM8.25 8h11.5c.41 0 .75.34.75.75v5.5c0 .41-.34.75-.75.75H8.25a.75.75 0 01-.75-.75v-5.5c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const CalendarWorkWeek28Filled = wrapIcon(rawSvg({}), 'CalendarWorkWeek28Filled');
export default CalendarWorkWeek28Filled;
      