import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22.55 23.96l5.74 5.75a1 1 0 001.42-1.42l-26-26a1 1 0 00-1.42 1.42l2.25 2.24A4.5 4.5 0 002 10v12a4.5 4.5 0 004.5 4.5h12a4.5 4.5 0 004.05-2.54zm-1.58-1.58a2.5 2.5 0 01-2.47 2.12h-12A2.5 2.5 0 014 22V10a2.5 2.5 0 012.12-2.47l14.85 14.85zM21 10v7.47l6.14 6.13.06.05c1.15.87 2.8.04 2.8-1.4V9.75a1.75 1.75 0 00-2.8-1.4L23 11.5V10a4.5 4.5 0 00-4.5-4.5H9.03l2 2h7.47A2.5 2.5 0 0121 10zm2 4l5-3.75v11.5L23 18v-4z" fill={primaryFill} /></svg>;
}

const VideoOff32Regular = wrapIcon(rawSvg({}), 'VideoOff32Regular');
export default VideoOff32Regular;
      