import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 3.25a1 1 0 10-2 0v2.73a9.52 9.52 0 00-3.95-2.46 11.44 11.44 0 00-13.18 5 1 1 0 001.76.96 9.44 9.44 0 0110.83-4.05c1.47.46 2.7 1.4 3.68 2.57h-3.39a1 1 0 100 2H21a1 1 0 001-1V3.25zM6 15c0-1.1.9-2 2-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm2 .5v3c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-7a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const SkipForwardTab24Filled = wrapIcon(rawSvg({}), 'SkipForwardTab24Filled');
export default SkipForwardTab24Filled;
      