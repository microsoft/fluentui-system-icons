import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.26 14H4.5A2.5 2.5 0 012 11.5V6h5.34a5.5 5.5 0 00-1.08 8zM14 5v-.5A2.5 2.5 0 0011.5 2h-7A2.5 2.5 0 002 4.5V5h12zm-8 5.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H11a.5.5 0 010-1h.47a1.98 1.98 0 00-1.72-.1 2 2 0 00-.66.44.5.5 0 01-.71-.71A3 3 0 0112 8.15V8c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 019 12.85V13a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H10a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const CalendarSync16Filled = wrapIcon(rawSvg({}), 'CalendarSync16Filled');
export default CalendarSync16Filled;
      