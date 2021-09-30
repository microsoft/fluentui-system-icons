import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75v15.5c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75zM8.5 15.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-5.5-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm5.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill={primaryFill} /></svg>;
}

const CalendarMonth28Regular = wrapIcon(rawSvg({}), 'CalendarMonth28Regular');
export default CalendarMonth28Regular;
      