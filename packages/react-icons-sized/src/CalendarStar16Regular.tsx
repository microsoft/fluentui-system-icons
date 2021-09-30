import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1.76A5.48 5.48 0 0010.5 5H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h7.5c-1.18 0-2.27.37-3.16 1H3v5.5c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7zm-1 13a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm.95-5.6H13c.48 0 .69.64.3.94l-1.26.94.48 1.53c.15.49-.38.89-.77.59l-1.25-.95-1.25.95c-.4.3-.92-.1-.77-.59l.48-1.53-1.25-.94c-.4-.3-.2-.95.3-.95h1.54l.47-1.53a.5.5 0 01.96 0l.47 1.53z" fill={primaryFill} /></svg>;
}

const CalendarStar16Regular = wrapIcon(rawSvg({}), 'CalendarStar16Regular');
export default CalendarStar16Regular;
      