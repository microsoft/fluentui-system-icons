import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.56 2.15a8.04 8.04 0 00-3.12 0 .75.75 0 00.3 1.47 6.54 6.54 0 012.53 0 .75.75 0 00.29-1.47zM6.6 3.55a.75.75 0 00-1.05-.2c-.57.38-1.1.84-1.55 1.36V2.75a.75.75 0 00-1.5 0v4c0 .41.34.75.75.75h4a.75.75 0 000-1.5H4.88c.42-.54.93-1.02 1.5-1.4.35-.24.45-.7.22-1.05zM13.6 4.6a.75.75 0 01.84-1.24 8.04 8.04 0 012.2 2.2.75.75 0 01-1.24.84 6.54 6.54 0 00-1.8-1.8zm3.36 3.26a.75.75 0 00-.6.88 6.54 6.54 0 010 2.54.75.75 0 101.48.29 8.03 8.03 0 000-3.12.75.75 0 00-.88-.6zM2 10v-.25a.75.75 0 011.5 0V10c0 .44.04.86.12 1.27a.75.75 0 01-1.47.29C2.05 11.06 2 10.53 2 10zm14.45 3.4a.75.75 0 00-1.04.21 6.54 6.54 0 01-1.8 1.8.75.75 0 00.84 1.24 8.04 8.04 0 002.2-2.2.75.75 0 00-.2-1.04zm-13.1 1.05a.75.75 0 011.24-.84c.48.71 1.09 1.32 1.8 1.8a.75.75 0 01-.84 1.24 8.04 8.04 0 01-2.2-2.2zm8.8 2.52a.75.75 0 00-.88-.6 6.54 6.54 0 01-2.54 0 .75.75 0 10-.29 1.48 8.03 8.03 0 003.12 0c.4-.08.67-.48.6-.88z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwiseDashes20Filled = wrapIcon(rawSvg({}), 'ArrowCounterclockwiseDashes20Filled');
export default ArrowCounterclockwiseDashes20Filled;
      