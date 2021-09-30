import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 14h1.76a5.48 5.48 0 011.08-8H2v5.5A2.5 2.5 0 004.5 14zM2 5v-.5A2.5 2.5 0 014.5 2h7A2.5 2.5 0 0114 4.5V5H2zm4.64 4.92a2 2 0 001.43-2.48L7.9 6.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.46-.12zm4.86.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const CalendarSettings16Filled = wrapIcon(rawSvg({}), 'CalendarSettings16Filled');
export default CalendarSettings16Filled;
      