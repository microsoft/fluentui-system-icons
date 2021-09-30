import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M25 9.5v5A7.5 7.5 0 0014.5 25H6.25A3.25 3.25 0 013 21.75V9.5h22z" fill={primaryFill} /><path d="M21.75 3C23.55 3 25 4.46 25 6.25V8H3V6.25C3 4.45 4.46 3 6.25 3h15.5z" fill={primaryFill} /><path d="M27 20.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0zm-8.15-2.65a.5.5 0 00-.7-.7l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L17.71 20h2.54A2.75 2.75 0 0123 22.75V23a.5.5 0 001 0v-.25A3.75 3.75 0 0020.25 19h-2.54l1.14-1.15z" fill={primaryFill} /></svg>;
}

const CalendarReply28Filled = wrapIcon(rawSvg({}), 'CalendarReply28Filled');
export default CalendarReply28Filled;
      