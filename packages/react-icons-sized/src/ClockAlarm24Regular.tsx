import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 7.75a.75.75 0 00-1.5 0v5c0 .41.34.75.75.75h3.5a.75.75 0 000-1.5H12V7.75z" fill={primaryFill} /><path d="M3.48 9.1A4 4 0 119.1 3.48a8.99 8.99 0 015.8 0 4 4 0 115.62 5.62 8.99 8.99 0 01-1.65 8.71l1.91 1.91a.75.75 0 11-1.06 1.06l-1.9-1.9a8.96 8.96 0 01-11.63 0l-1.91 1.9a.75.75 0 01-1.06-1.06l1.9-1.9A8.96 8.96 0 013.49 9.1zM3.5 6c0 .63.23 1.2.62 1.65a9.04 9.04 0 013.53-3.53A2.5 2.5 0 003.5 6zm16.38 1.65a2.5 2.5 0 00-3.53-3.53 9.04 9.04 0 013.53 3.53zM4.5 12a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z" fill={primaryFill} /></svg>;
}

const ClockAlarm24Regular = wrapIcon(rawSvg({}), 'ClockAlarm24Regular');
export default ClockAlarm24Regular;
      