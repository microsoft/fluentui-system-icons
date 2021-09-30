import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5a2.5 2.5 0 014.62-1.33 5.51 5.51 0 012.76 0 2.5 2.5 0 113.72 3.25 5.48 5.48 0 01-.87 5.6l1.12 1.13a.5.5 0 01-.7.7l-1.13-1.12a5.48 5.48 0 01-7.04 0l-1.13 1.12a.5.5 0 11-.7-.7l1.12-1.13a5.48 5.48 0 01-.87-5.6A2.5 2.5 0 012 4.5zm3.64-.97A1.5 1.5 0 103.4 5.5a5.52 5.52 0 012.25-1.97zm6.97 1.97a1.5 1.5 0 10-2.26-1.98c.93.45 1.71 1.13 2.26 1.98zm-5.11 0A.5.5 0 007 6v3c0 .28.22.5.5.5h2a.5.5 0 000-1H8V6a.5.5 0 00-.5-.5z" fill={primaryFill} /></svg>;
}

const ClockAlarm16Filled = wrapIcon(rawSvg({}), 'ClockAlarm16Filled');
export default ClockAlarm16Filled;
      