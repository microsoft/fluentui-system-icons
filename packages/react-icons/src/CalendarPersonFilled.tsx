import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 7v1.76A3 3 0 0012.76 13h-.26a2.5 2.5 0 00-2.5 2.5c0 .54.09 1.04.24 1.5H5.5A2.5 2.5 0 013 14.5V7h14z" fill={primaryFill} /><path d="M15 9a2 2 0 110 4 2 2 0 010-4z" fill={primaryFill} /><path d="M12.5 14c-.83 0-1.5.67-1.5 1.5a3.18 3.18 0 001.21 2.61c.74.6 1.74.89 2.79.89s2.05-.29 2.79-.89c.75-.6 1.21-1.5 1.21-2.61 0-.83-.67-1.5-1.5-1.5h-5z" fill={primaryFill} /><path d="M14.5 3A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9z" fill={primaryFill} /></svg>;
}

const CalendarPersonFilled = wrapIcon(rawSvg({}), 'CalendarPersonFilled');
export default CalendarPersonFilled;
      