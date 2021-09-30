import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v8.25a7.49 7.49 0 00-1.5-.88V9.5h-19v12.25c0 .97.78 1.75 1.75 1.75h7.37c.24.54.53 1.04.88 1.5H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zm0 1.5H6.25c-.97 0-1.75.78-1.75 1.75V8h19V6.25c0-.97-.78-1.75-1.75-1.75zm5.25 16a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-2.65-2.85a.5.5 0 00-.7 0L19 22.29l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l5-5a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const CalendarCheckmark28Regular = wrapIcon(rawSvg({}), 'CalendarCheckmark28Regular');
export default CalendarCheckmark28Regular;
      