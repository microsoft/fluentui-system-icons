import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1.84A3 3 0 0011.5 5H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h8.5a3 3 0 00-2.24 1H3v5.5c0 .83.67 1.5 1.5 1.5h2.56c.06.35.18.69.35 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zm0 8a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const CalendarPerson16Regular = wrapIcon(rawSvg({}), 'CalendarPerson16Regular');
export default CalendarPerson16Regular;
      