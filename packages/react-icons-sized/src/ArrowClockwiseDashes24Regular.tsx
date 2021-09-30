import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.13 3.2a9.03 9.03 0 013.74 0 .75.75 0 11-.3 1.46 7.53 7.53 0 00-3.13 0 .75.75 0 01-.31-1.47zm5.74 1.47a.75.75 0 011.03-.22c.39.25.76.53 1.1.84V4.25a.75.75 0 011.5 0v3c0 .41-.34.75-.75.75h-3a.75.75 0 010-1.5h1.35c-.32-.3-.65-.56-1.02-.8a.75.75 0 01-.21-1.03zM19.5 12v-.75a.75.75 0 011.5 0V12c0 .64-.07 1.27-.2 1.87a.75.75 0 01-1.46-.3c.1-.51.16-1.03.16-1.57zM8.13 4.67c.23.35.13.81-.21 1.04A7.54 7.54 0 005.7 7.9a.75.75 0 11-1.26-.81A9.04 9.04 0 017.1 4.45a.75.75 0 011.03.22zm-3.47 5.77a.75.75 0 00-1.47-.31 9.03 9.03 0 000 3.74.75.75 0 101.47-.3 7.53 7.53 0 010-3.13zm14.67 5.43c.35.22.44.69.22 1.03a9.04 9.04 0 01-2.65 2.65.75.75 0 01-.82-1.26 7.55 7.55 0 002.21-2.2.75.75 0 011.04-.22zm-13.62.21a.75.75 0 10-1.26.82 9.04 9.04 0 002.65 2.65.75.75 0 00.82-1.26 7.55 7.55 0 01-2.21-2.2zm3.84 3.84c.09-.4.48-.67.89-.58a7.54 7.54 0 003.12 0 .75.75 0 11.31 1.47 9.03 9.03 0 01-3.74 0 .75.75 0 01-.58-.9z" fill={primaryFill} /></svg>;
}

const ArrowClockwiseDashes24Regular = wrapIcon(rawSvg({}), 'ArrowClockwiseDashes24Regular');
export default ArrowClockwiseDashes24Regular;
      