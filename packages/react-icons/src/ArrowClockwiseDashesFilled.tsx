import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.44 2.15a8.03 8.03 0 013.12 0 .75.75 0 01-.3 1.47 6.54 6.54 0 00-2.53 0 .75.75 0 01-.29-1.47zm4.96 1.4a.75.75 0 011.05-.2c.57.38 1.1.84 1.55 1.36V2.75a.75.75 0 011.5 0v4c0 .41-.34.75-.75.75h-4a.75.75 0 010-1.5h2.37a6.54 6.54 0 00-1.5-1.4.75.75 0 01-.21-1.05zM6.4 4.6a.75.75 0 00-.84-1.24 8.04 8.04 0 00-2.2 2.2.75.75 0 001.24.84 6.54 6.54 0 011.8-1.8zM3.03 7.85c.41.08.67.47.6.88a6.54 6.54 0 000 2.54.75.75 0 01-1.48.29 8.04 8.04 0 010-3.12c.08-.4.48-.67.88-.6zM18 10v-.25a.75.75 0 00-1.5 0V10c0 .44-.04.86-.12 1.27a.75.75 0 101.47.29c.1-.5.15-1.03.15-1.56zM3.55 13.4a.75.75 0 011.04.21c.48.71 1.09 1.32 1.8 1.8a.75.75 0 01-.84 1.24 8.04 8.04 0 01-2.2-2.2.75.75 0 01.2-1.04zm13.1 1.05a.75.75 0 00-1.24-.84 6.54 6.54 0 01-1.8 1.8.75.75 0 00.84 1.24 8.04 8.04 0 002.2-2.2zm-8.8 2.52c.08-.41.47-.67.88-.6a6.54 6.54 0 002.54 0 .75.75 0 11.29 1.48 8.03 8.03 0 01-3.12 0 .75.75 0 01-.6-.88z" fill={primaryFill} /></svg>;
}

const ArrowClockwiseDashesFilled = wrapIcon(rawSvg({}), 'ArrowClockwiseDashesFilled');
export default ArrowClockwiseDashesFilled;
      