import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 5v11.35A3.65 3.65 0 0116.35 20H5.01c.57.9 1.59 1.5 2.74 1.5h8.6c2.84 0 5.15-2.3 5.15-5.15v-8.6c0-1.15-.6-2.17-1.5-2.74zM5.24 2A3.25 3.25 0 002 5.25v10.5C2 17.55 3.46 19 5.25 19h10.5c1.8 0 3.25-1.46 3.25-3.25V5.25C19 3.45 17.54 2 15.75 2H5.25zM3.5 7.5h14v8.25c0 .97-.78 1.75-1.75 1.75H5.25c-.97 0-1.75-.78-1.75-1.75V7.5zm1.75-4h10.5c.97 0 1.75.78 1.75 1.75V6h-14v-.75c0-.97.78-1.75 1.75-1.75z" fill={primaryFill} /></svg>;
}

const CalendarMultiple24Regular = wrapIcon(rawSvg({}), 'CalendarMultiple24Regular');
export default CalendarMultiple24Regular;
      