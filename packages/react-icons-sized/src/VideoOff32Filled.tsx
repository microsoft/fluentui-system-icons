import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 21.91l7.8 7.8a1 1 0 001.4-1.42l-26-26a1 1 0 00-1.4 1.42l2.24 2.24A4.5 4.5 0 002 10v12a4.5 4.5 0 004.5 4.5H16a4.5 4.5 0 004.5-4.5v-.09zm1.5-3.44l5.24 5.24c1.21.66 2.76-.2 2.76-1.64V9.93a1.87 1.87 0 00-2.99-1.49L22 12.2v6.27zM9.03 5.5L20.5 16.97V10A4.5 4.5 0 0016 5.5H9.03z" fill={primaryFill} /></svg>;
}

const VideoOff32Filled = wrapIcon(rawSvg({}), 'VideoOff32Filled');
export default VideoOff32Filled;
      