import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5V6h14v-.5z" fill={primaryFill} /><path d="M17 9.6V7H3v7.5A2.5 2.5 0 005.5 17h4.1A5.5 5.5 0 0117 9.6z" fill={primaryFill} /><path d="M14.5 19a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.5-6.5a.5.5 0 011 0V14h1a.5.5 0 010 1h-1.5a.5.5 0 01-.5-.5v-2z" fill={primaryFill} /></svg>;
}

const CalendarClockFilled = wrapIcon(rawSvg({}), 'CalendarClockFilled');
export default CalendarClockFilled;
      