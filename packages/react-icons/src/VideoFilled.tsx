import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5A2.5 2.5 0 0010.5 4h-6A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h6a2.5 2.5 0 002.5-2.5v-7z" fill={primaryFill} /><path d="M14 7.93v4.15l2.76 2.35a.75.75 0 001.24-.57V6.2a.75.75 0 00-1.23-.57L14 7.93z" fill={primaryFill} /></svg>;
}

const VideoFilled = wrapIcon(rawSvg({}), 'VideoFilled');
export default VideoFilled;
      