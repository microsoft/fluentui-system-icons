import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.65 6.62l7.5 4.75c.22.14.33.35.35.58v-4.7c0-.41.33-.75.75-.75h3c.41 0 .75.34.75.75v9.5c0 .41-.34.75-.75.75h-3a.75.75 0 01-.75-.75v-4.69a.74.74 0 01-.35.58l-7.5 4.74a.75.75 0 01-1.15-.63v-9.5c0-.6.65-.95 1.15-.63zm17.6-.12c.41 0 .75.34.75.75v9.5c0 .41-.34.75-.75.75h-3a.75.75 0 01-.75-.75v-9.5c0-.41.33-.75.75-.75h3z" fill={primaryFill} /></svg>;
}

const VideoPlayPause24Filled = wrapIcon(rawSvg({}), 'VideoPlayPause24Filled');
export default VideoPlayPause24Filled;
      