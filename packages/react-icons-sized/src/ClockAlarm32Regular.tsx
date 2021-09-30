import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 10v6h4a1 1 0 110 2h-5a1 1 0 01-1-1v-7a1 1 0 112 0zM3 8c0 1.52.68 2.89 1.75 3.8a11.97 11.97 0 002.09 11.95l-2.55 2.54a1 1 0 101.42 1.42l2.54-2.55a11.95 11.95 0 0015.5 0l2.54 2.55a1 1 0 001.42-1.42l-2.55-2.54a11.95 11.95 0 002.09-11.95 4.99 4.99 0 10-7.05-7.05 11.97 11.97 0 00-8.4 0A4.99 4.99 0 003 8zm2 0a3 3 0 014.89-2.33 12.06 12.06 0 00-4.22 4.22A2.99 2.99 0 015 8zm22 0c0 .72-.25 1.37-.67 1.89a12.06 12.06 0 00-4.22-4.22A3 3 0 0127 8zM16 6a10 10 0 110 20 10 10 0 010-20z" fill={primaryFill} /></svg>;
}

const ClockAlarm32Regular = wrapIcon(rawSvg({}), 'ClockAlarm32Regular');
export default ClockAlarm32Regular;
      