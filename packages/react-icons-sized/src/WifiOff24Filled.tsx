import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.86 14.27l7.43 7.44a1 1 0 001.42-1.42l-18-18a1 1 0 10-1.42 1.42l3.1 3.1a11.97 11.97 0 00-3.21 3.17 1 1 0 001.64 1.14 9.94 9.94 0 013.01-2.87L8 9.4a8.14 8.14 0 00-3.2 3.38 1 1 0 001.78.9 6.08 6.08 0 012.9-2.8l1.41 1.42a5.2 5.2 0 00-3.63 3.01 1 1 0 001.83.8 3.23 3.23 0 013.78-1.84zm-1.33-5.93l2.22 2.23a6.1 6.1 0 013.76 3.13 1 1 0 101.78-.9 8.1 8.1 0 00-7.76-4.45zM8.5 5.33l1.65 1.65a9.9 9.9 0 0110.02 4.15 1 1 0 101.64-1.14A11.91 11.91 0 008.51 5.33zm4.55 11.11a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12z" fill={primaryFill} /></svg>;
}

const WifiOff24Filled = wrapIcon(rawSvg({}), 'WifiOff24Filled');
export default WifiOff24Filled;
      