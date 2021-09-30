import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.5 18a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM20 21.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM16 23a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-1.5-6.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zm-4 1.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM28 9a5 5 0 00-5-5H9a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V9zm-5-3a3 3 0 013 3v1H6V9a3 3 0 013-3h14zm3 17a3 3 0 01-3 3H9a3 3 0 01-3-3V12h20v11z" fill={primaryFill} /></svg>;
}

const CalendarRtl32Regular = wrapIcon(rawSvg({}), 'CalendarRtl32Regular');
export default CalendarRtl32Regular;
      