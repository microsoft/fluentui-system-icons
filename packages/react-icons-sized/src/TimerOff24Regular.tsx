import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4 4a8.5 8.5 0 1012.01 12.01l2.49 2.5a.75.75 0 001.06-1.07L3.28 2.22zm13.88 16a7 7 0 11-9.89-9.89l3.98 3.98v1.04a.75.75 0 001.37.33l4.54 4.55z" fill={primaryFill} /><path d="M11.44 8.25l1.31 1.32V8.65a.75.75 0 00-1.31-.4z" fill={primaryFill} /><path d="M19 13.5a7 7 0 01-.3 2.02l1.18 1.18A8.5 8.5 0 008.8 5.62L9.97 6.8A7 7 0 0119 13.5z" fill={primaryFill} /><path d="M19.15 5.11l.08.06 1.16.97a.75.75 0 01-.88 1.21l-.08-.06-1.16-.96a.75.75 0 01.88-1.22z" fill={primaryFill} /><path d="M14.25 2.5a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.5h4.6z" fill={primaryFill} /></svg>;
}

const TimerOff24Regular = wrapIcon(rawSvg({}), 'TimerOff24Regular');
export default TimerOff24Regular;
      