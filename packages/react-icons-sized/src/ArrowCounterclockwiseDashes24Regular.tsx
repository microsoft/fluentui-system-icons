import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.87 3.2a9.03 9.03 0 00-3.74 0 .75.75 0 00.3 1.46 7.53 7.53 0 013.13 0 .75.75 0 10.31-1.47zM8.13 4.66a.75.75 0 00-1.03-.22c-.39.25-.76.53-1.1.84V4.25a.75.75 0 00-1.5 0v3c0 .41.34.75.75.75h3a.75.75 0 000-1.5H6.9c.32-.3.65-.56 1.02-.8.34-.22.44-.68.21-1.03zM4.5 12v-.75a.75.75 0 00-1.5 0V12c0 .64.07 1.27.2 1.87a.75.75 0 101.46-.3c-.1-.51-.16-1.03-.16-1.57zm11.37-7.33a.75.75 0 00.21 1.04 7.55 7.55 0 012.21 2.2.75.75 0 101.26-.81 9.04 9.04 0 00-2.65-2.65.75.75 0 00-1.03.22zm3.47 5.77a.75.75 0 111.47-.31 9.03 9.03 0 010 3.74.75.75 0 01-1.47-.3 7.54 7.54 0 000-3.13zM4.67 15.87a.75.75 0 00-.22 1.03 9.04 9.04 0 002.65 2.65.75.75 0 00.82-1.26 7.55 7.55 0 01-2.21-2.2.75.75 0 00-1.04-.22zm13.62.21a.75.75 0 111.26.82 9.04 9.04 0 01-2.65 2.65.75.75 0 01-.82-1.26 7.55 7.55 0 002.21-2.2zm-3.84 3.84a.75.75 0 00-.89-.58 7.54 7.54 0 01-3.12 0 .75.75 0 10-.31 1.47 9.03 9.03 0 003.74 0c.4-.1.67-.49.58-.9z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwiseDashes24Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwiseDashes24Regular');
export default ArrowCounterclockwiseDashes24Regular;
      