import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5V6H3v5.5c0 .83.67 1.5 1.5 1.5h1.8l-.25 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zm0 1h-7C3.67 3 3 3.67 3 4.5V5h10v-.5c0-.83-.67-1.5-1.5-1.5zm1.86 4a1.57 1.57 0 011.18.45c.61.61.61 1.6 0 2.21l-4.28 4.29c-.36.35-.8.6-1.3.73l-1.2.3a.6.6 0 01-.74-.74l.3-1.2V13c.13-.48.38-.91.73-1.26l4.29-4.29A1.55 1.55 0 0113.36 7z" fill={primaryFill} /></svg>;
}

const CalendarEdit16Regular = wrapIcon(rawSvg({}), 'CalendarEdit16Regular');
export default CalendarEdit16Regular;
      