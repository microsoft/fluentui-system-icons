import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.13 2.22a8.02 8.02 0 013.74 0 .5.5 0 01-.23.97 7.02 7.02 0 00-3.28 0 .5.5 0 11-.23-.97zM6.51 3.34a.5.5 0 01-.17.69 7.04 7.04 0 00-2.31 2.31.5.5 0 01-.85-.52 8.04 8.04 0 012.64-2.64.5.5 0 01.69.16zm7.67-.16a.5.5 0 10-.52.85c.82.5 1.53 1.18 2.09 1.97H12.5a.5.5 0 000 1h4a.5.5 0 00.5-.5v-4a.5.5 0 00-1 0v2.2a8.04 8.04 0 00-1.82-1.52zM2.82 7.76a.5.5 0 01.37.6 7.02 7.02 0 000 3.28.5.5 0 01-.97.23 8.02 8.02 0 010-3.74.5.5 0 01.6-.37zM18 10v-.5a.5.5 0 00-1 0v.5c0 .56-.07 1.11-.2 1.64a.5.5 0 10.98.23c.14-.6.22-1.23.22-1.87zM3.34 13.5a.5.5 0 01.69.16 7.04 7.04 0 002.31 2.31.5.5 0 11-.52.85 8.04 8.04 0 01-2.64-2.64.5.5 0 01.16-.69zm13.48.68a.5.5 0 00-.85-.52 7.04 7.04 0 01-2.31 2.31.5.5 0 00.52.85 8.04 8.04 0 002.64-2.64zm-9.06 3a.5.5 0 01.6-.37 7.02 7.02 0 003.28 0 .5.5 0 11.23.97 8.02 8.02 0 01-3.74 0 .5.5 0 01-.37-.6z" fill={primaryFill} /></svg>;
}

const ArrowClockwiseDashesRegular = wrapIcon(rawSvg({}), 'ArrowClockwiseDashesRegular');
export default ArrowClockwiseDashesRegular;
      