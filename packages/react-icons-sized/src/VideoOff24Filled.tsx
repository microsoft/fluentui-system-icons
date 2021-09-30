import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l1.57 1.57A3.25 3.25 0 002 7.75v8.5c0 1.8 1.46 3.25 3.25 3.25h7.5a3.25 3.25 0 003.17-2.52l4.8 4.8a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M17 13.82l4.5 4.5a1 1 0 00.5-.86V6.54a1 1 0 00-1.65-.76L17 8.63v5.19z" fill={primaryFill} /><path d="M7.68 4.5L16 12.82V7.75c0-1.8-1.46-3.25-3.25-3.25H7.68z" fill={primaryFill} /></svg>;
}

const VideoOff24Filled = wrapIcon(rawSvg({}), 'VideoOff24Filled');
export default VideoOff24Filled;
      