import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5c0-1.1.9-2 2-2h8a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" fill={primaryFill} /><path d="M15 10.66V5.33l2.25-1.27a.5.5 0 01.75.44v7a.5.5 0 01-.75.44L15 10.66z" fill={primaryFill} /><path d="M7 13.75h3v.5A3.75 3.75 0 016.25 18H3.5a.5.5 0 01-.5-.5v-1.75c0-.28.22-.5.5-.5h2.75c.41 0 .75-.34.75-.75v-.75z" fill={primaryFill} /></svg>;
}

const VideoSecurity20Filled = wrapIcon(rawSvg({}), 'VideoSecurity20Filled');
export default VideoSecurity20Filled;
      