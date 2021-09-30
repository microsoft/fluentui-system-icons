import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5.5A2.5 2.5 0 014.5 3h7A2.5 2.5 0 0114 5.5v5a2.5 2.5 0 01-2.5 2.5h-7A2.5 2.5 0 012 10.5v-5zm4.5.32v4.36c0 .25.27.4.49.27l3.26-1.99a.54.54 0 000-.92l-3.26-2a.32.32 0 00-.49.28z" fill={primaryFill} /></svg>;
}

const VideoClip16Filled = wrapIcon(rawSvg({}), 'VideoClip16Filled');
export default VideoClip16Filled;
      