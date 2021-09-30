import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm-8 3a.5.5 0 00-.5.41v7.18a.5.5 0 001 0V6.41A.5.5 0 006.5 6z" fill={primaryFill} /></svg>;
}

const CalendarWeekStart20Filled = wrapIcon(rawSvg({}), 'CalendarWeekStart20Filled');
export default CalendarWeekStart20Filled;
      