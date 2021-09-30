import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 8.5V11a3.74 3.74 0 10-5.55 5h-.95a2.5 2.5 0 00-2.5 2.5v.5c0 .7.17 1.38.49 2H6.25A3.25 3.25 0 013 17.75V8.5h18z" fill={primaryFill} /><path d="M17.75 3C19.55 3 21 4.46 21 6.25V7H3v-.75C3 4.45 4.46 3 6.25 3h11.5z" fill={primaryFill} /><path d="M23 18.5c0-.83-.67-1.5-1.5-1.5h-7c-.83 0-1.5.67-1.5 1.5v.5c0 1.97 1.86 4 5 4 3.14 0 5-2.03 5-4v-.5z" fill={primaryFill} /><path d="M20.75 13.25a2.75 2.75 0 10-5.5 0 2.75 2.75 0 005.5 0z" fill={primaryFill} /></svg>;
}

const CalendarPerson24Filled = wrapIcon(rawSvg({}), 'CalendarPerson24Filled');
export default CalendarPerson24Filled;
      