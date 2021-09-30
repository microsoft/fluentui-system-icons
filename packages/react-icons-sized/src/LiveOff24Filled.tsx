import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.2 2.2a10 10 0 00.5 13.6 1 1 0 001.42-1.41 8 8 0 01-.5-10.77l1.52 1.52a5.92 5.92 0 00.54 7.76 1 1 0 001.4-1.41 3.92 3.92 0 01-.5-4.91l1.83 1.83a1.5 1.5 0 001.84 1.84l8.25 8.25a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M19.03 15.85l1.46 1.46a10 10 0 00-1.42-12.37 1 1 0 10-1.41 1.41 8 8 0 011.37 9.5z" fill={primaryFill} /><path d="M15.93 12.75l1.6 1.59a5.92 5.92 0 00-1.26-6.53 1 1 0 10-1.42 1.42 3.92 3.92 0 011.08 3.52z" fill={primaryFill} /></svg>;
}

const LiveOff24Filled = wrapIcon(rawSvg({}), 'LiveOff24Filled');
export default LiveOff24Filled;
      