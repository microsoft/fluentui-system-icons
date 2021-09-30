import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.87 2.22a8.02 8.02 0 00-3.74 0 .5.5 0 10.23.97 7.02 7.02 0 013.28 0 .5.5 0 00.23-.97zm1.62 1.12a.5.5 0 00.17.69 7.04 7.04 0 012.31 2.31.5.5 0 10.85-.52 8.04 8.04 0 00-2.64-2.64.5.5 0 00-.69.16zm-7.67-.16a.5.5 0 11.52.85A7.04 7.04 0 004.25 6H7.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4a.5.5 0 011 0v2.2a8.04 8.04 0 011.82-1.52zm11.36 4.58a.5.5 0 00-.37.6 7.02 7.02 0 010 3.28.5.5 0 10.97.23 8.02 8.02 0 000-3.74.5.5 0 00-.6-.37zM2 10v-.5a.5.5 0 011 0v.5c0 .56.07 1.11.2 1.64a.5.5 0 01-.98.23A8.02 8.02 0 012 10zm14.66 3.5a.5.5 0 00-.69.16 7.04 7.04 0 01-2.31 2.31.5.5 0 00.52.85 8.04 8.04 0 002.64-2.64.5.5 0 00-.16-.69zm-13.48.68a.5.5 0 11.85-.52 7.04 7.04 0 002.31 2.31.5.5 0 11-.52.85 8.04 8.04 0 01-2.64-2.64zm9.06 3a.5.5 0 00-.6-.37 7.02 7.02 0 01-3.28 0 .5.5 0 10-.23.97 8.02 8.02 0 003.74 0 .5.5 0 00.37-.6z" fill={primaryFill} /></svg>;
}

const ArrowCounterclockwiseDashes20Regular = wrapIcon(rawSvg({}), 'ArrowCounterclockwiseDashes20Regular');
export default ArrowCounterclockwiseDashes20Regular;
      