import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3c1.52 0 2.89.68 3.8 1.75a11.97 11.97 0 018.4 0 4.99 4.99 0 117.05 7.05 11.98 11.98 0 01-2.09 11.95l2.55 2.54a1 1 0 01-1.42 1.42l-2.54-2.55a11.95 11.95 0 01-15.5 0l-2.54 2.55a1 1 0 01-1.42-1.42l2.55-2.54A11.95 11.95 0 014.75 11.8 4.99 4.99 0 018 3zM5.67 9.89a12.06 12.06 0 014.22-4.22 3 3 0 00-4.22 4.22zm16.44-4.22a12.06 12.06 0 014.22 4.22 3 3 0 00-4.22-4.22zM16 10a1 1 0 10-2 0v7a1 1 0 001 1h5a1 1 0 100-2h-4v-6z" fill={primaryFill} /></svg>;
}

const ClockAlarm32Filled = wrapIcon(rawSvg({}), 'ClockAlarm32Filled');
export default ClockAlarm32Filled;
      