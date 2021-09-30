import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 2.75a.75.75 0 00-1.5 0v3c0 .9.67 1.64 1.54 1.74l-1.01 2.5c-.41 1-.37 2.19.12 3.15l3.99 7.95c.14.3.36.53.61.69V12.3a1.5 1.5 0 111.5 0v9.48c.25-.16.47-.4.61-.7l4-7.94c.48-.96.52-2.14.11-3.15l-1.01-2.5c.87-.1 1.54-.84 1.54-1.74v-3a.75.75 0 00-1.5 0v3c0 .14-.11.25-.25.25h-8.5a.25.25 0 01-.25-.25v-3z" fill={primaryFill} /></svg>;
}

const CalligraphyPen24Filled = wrapIcon(rawSvg({}), 'CalligraphyPen24Filled');
export default CalligraphyPen24Filled;
      