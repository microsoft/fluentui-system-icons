import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5a.5.5 0 111 0 .5.5 0 01-1 0zM3.5 7a.5.5 0 100 1 .5.5 0 000-1zM5 5.5a.5.5 0 111 0 .5.5 0 01-1 0zM5.5 7a.5.5 0 100 1 .5.5 0 000-1zM7 5.5a.5.5 0 111 0 .5.5 0 01-1 0zm-6-2A2.5 2.5 0 013.5 1h5A2.5 2.5 0 0111 3.5v5A2.5 2.5 0 018.5 11h-5A2.5 2.5 0 011 8.5v-5zM3.5 2c-.65 0-1.2.42-1.41 1H9.9c-.2-.58-.76-1-1.41-1h-5zM10 4H2v4.5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5V4z" fill={primaryFill} /></svg>;
}

const CalendarLtr12Regular = wrapIcon(rawSvg({}), 'CalendarLtr12Regular');
export default CalendarLtr12Regular;
      