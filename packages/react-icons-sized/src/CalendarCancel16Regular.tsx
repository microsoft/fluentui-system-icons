import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 2A2.5 2.5 0 0114 4.5v1.76A5.48 5.48 0 0010.5 5H13v-.5c0-.83-.67-1.5-1.5-1.5h-7C3.67 3 3 3.67 3 4.5V5h7.5c-1.18 0-2.27.37-3.16 1H3v5.5c0 .83.67 1.5 1.5 1.5h1.1c.18.36.4.7.66 1H4.5A2.5 2.5 0 012 11.5v-7A2.5 2.5 0 014.5 2h7z" fill={primaryFill} /><path d="M15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7L10.5 9.79 9.35 8.65a.5.5 0 10-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const CalendarCancel16Regular = wrapIcon(rawSvg({}), 'CalendarCancel16Regular');
export default CalendarCancel16Regular;
      