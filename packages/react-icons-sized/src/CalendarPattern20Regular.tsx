import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3zM4 5.5V7h12V5.5c0-.83-.67-1.5-1.5-1.5h-9C4.67 4 4 4.67 4 5.5zM14.7 8l-4 4h2.6L16 9.3V8h-1.3zm-1.4 0h-2.6l-4 4h2.6l4-4zm-8 4l4-4H6.7L4 10.7V12h1.3zM4 9.3L5.3 8H4v1.3zM14.7 12H16v-1.3L14.7 12z" fill={primaryFill} /></svg>;
}

const CalendarPattern20Regular = wrapIcon(rawSvg({}), 'CalendarPattern20Regular');
export default CalendarPattern20Regular;
      