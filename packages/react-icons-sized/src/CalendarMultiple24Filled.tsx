import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 5v11.35A3.65 3.65 0 0116.35 20H5.01c.57.9 1.59 1.5 2.74 1.5h8.6c2.84 0 5.15-2.3 5.15-5.15v-8.6c0-1.15-.6-2.17-1.5-2.74zM2 7.5v8.25C2 17.55 3.46 19 5.25 19h10.5c1.8 0 3.25-1.46 3.25-3.25V7.5H2zM5.25 2A3.25 3.25 0 002 5.25V6h17v-.75C19 3.45 17.54 2 15.75 2H5.25z" fill={primaryFill} /></svg>;
}

const CalendarMultiple24Filled = wrapIcon(rawSvg({}), 'CalendarMultiple24Filled');
export default CalendarMultiple24Filled;
      