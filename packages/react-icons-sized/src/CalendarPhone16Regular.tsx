import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v.55a2.51 2.51 0 00-.5-.05H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h7.5c-.82 0-1.54.4-2 1H3v5.5c0 .83.67 1.5 1.5 1.5H8v.5c0 .17.02.34.05.5H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zm-.75 4C9.78 6 9 6.78 9 7.75v5.5c0 .97.78 1.75 1.75 1.75h2.5c.97 0 1.75-.78 1.75-1.75v-5.5C15 6.78 14.22 6 13.25 6h-2.5zm.25 6.5c0-.28.22-.5.5-.5h1a.5.5 0 010 1h-1a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const CalendarPhone16Regular = wrapIcon(rawSvg({}), 'CalendarPhone16Regular');
export default CalendarPhone16Regular;
      