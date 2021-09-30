import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l3.36 3.36a11.99 11.99 0 00-3.42 3.33.75.75 0 101.23.85 10.47 10.47 0 013.28-3.09l1.6 1.6a8.06 8.06 0 00-3.42 3.48.75.75 0 101.34.67 6.51 6.51 0 013.2-3.03l1.93 1.93a5.07 5.07 0 00-3.94 3 .75.75 0 001.38.61 3.59 3.59 0 014.1-2.07l7.86 7.86a.75.75 0 001.06-1.06L3.28 2.22zm8.3 6.18L13.17 10a6.53 6.53 0 014.73 3.51.75.75 0 101.34-.68 8.04 8.04 0 00-7.65-4.42zm-3.1-3.1l1.23 1.23a10.44 10.44 0 0110.91 4.3.75.75 0 101.24-.85A11.95 11.95 0 008.49 5.3zm4.58 11.14a1.5 1.5 0 11-2.12 2.12 1.5 1.5 0 012.12-2.12z" fill={primaryFill} /></svg>;
}

const WifiOff24Regular = wrapIcon(rawSvg({}), 'WifiOff24Regular');
export default WifiOff24Regular;
      