import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 4a5 5 0 015 5v1H4V9a5 5 0 015-5h14zm5 19V12H4v11a5 5 0 005 5h14a5 5 0 005-5zm-6.5-5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 21.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16 23a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1.5-6.5a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm-4 1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const CalendarRtl32Filled = wrapIcon(rawSvg({}), 'CalendarRtl32Filled');
export default CalendarRtl32Filled;
      