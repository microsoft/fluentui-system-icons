import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06l2.89 2.89A9.5 9.5 0 002.24 8.9a.75.75 0 101.23.86A7.97 7.97 0 016.2 7.27l.96.96A6.44 6.44 0 004.3 11.1a.75.75 0 001.34.67 4.9 4.9 0 012.68-2.4l1.28 1.28a4.11 4.11 0 00-3.34 2.46.75.75 0 101.38.6 2.63 2.63 0 013.92-1.1l5.17 5.17a.75.75 0 101.06-1.06L3.28 2.22zm8.09 7.03a4.92 4.92 0 013.08 2.54.75.75 0 101.33-.69A6.43 6.43 0 009.7 7.57l1.68 1.68zM8.55 6.43a7.96 7.96 0 018.06 3.33.75.75 0 101.23-.85A9.47 9.47 0 007.31 5.19l1.24 1.24zm2.37 9.2a1.24 1.24 0 10-1.76-1.75 1.24 1.24 0 001.76 1.76z" fill={primaryFill} /></svg>;
}

const WifiOff20Filled = wrapIcon(rawSvg({}), 'WifiOff20Filled');
export default WifiOff20Filled;
      