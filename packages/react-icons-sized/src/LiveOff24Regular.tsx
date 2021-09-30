import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.2 2.2a10 10 0 00.5 13.6A.75.75 0 106 18a8.5 8.5 0 01-.5-11.47l1.77 1.78a6 6 0 00.5 7.92.75.75 0 001.06-1.06 4.5 4.5 0 01-.49-5.79l2.22 2.22a1.5 1.5 0 001.84 1.84l8.33 8.33a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M19.39 16.2l1.1 1.1a10 10 0 00-1.42-12.37.75.75 0 00-1.06 1.06 8.5 8.5 0 011.38 10.22z" fill={primaryFill} /><path d="M16.35 13.17l1.18 1.17a6 6 0 00-1.29-6.58.75.75 0 10-1.06 1.06 4.5 4.5 0 011.17 4.35z" fill={primaryFill} /></svg>;
}

const LiveOff24Regular = wrapIcon(rawSvg({}), 'LiveOff24Regular');
export default LiveOff24Regular;
      