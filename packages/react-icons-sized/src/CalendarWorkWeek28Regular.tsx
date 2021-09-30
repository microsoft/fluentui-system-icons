import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25zm0-1.5h15.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75zM7.5 8.75c0-.41.34-.75.75-.75h11.5c.41 0 .75.34.75.75v5.5c0 .41-.34.75-.75.75H8.25a.75.75 0 01-.75-.75v-5.5zM9 9.5v4h10v-4H9z" fill={primaryFill} /></svg>;
}

const CalendarWorkWeek28Regular = wrapIcon(rawSvg({}), 'CalendarWorkWeek28Regular');
export default CalendarWorkWeek28Regular;
      