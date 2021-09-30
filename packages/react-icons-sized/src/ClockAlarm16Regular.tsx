import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 6a.5.5 0 10-1 0v3c0 .28.22.5.5.5h2a.5.5 0 100-1H8V6zM2 4.5a2.5 2.5 0 014.62-1.33 5.51 5.51 0 012.76 0 2.5 2.5 0 113.72 3.25 5.48 5.48 0 01-.87 5.6l1.12 1.13a.5.5 0 01-.7.7l-1.13-1.12a5.48 5.48 0 01-7.04 0l-1.13 1.12a.5.5 0 11-.7-.7l1.12-1.13a5.48 5.48 0 01-.87-5.6A2.5 2.5 0 012 4.5zM4.5 3a1.5 1.5 0 00-1.11 2.5 5.52 5.52 0 012.25-1.97A1.5 1.5 0 004.5 3zm5.86.53c.92.44 1.7 1.12 2.25 1.97a1.5 1.5 0 10-2.26-1.98zM8 4a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" fill={primaryFill} /></svg>;
}

const ClockAlarm16Regular = wrapIcon(rawSvg({}), 'ClockAlarm16Regular');
export default ClockAlarm16Regular;
      