import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 6.25C2 4.45 3.46 3 5.25 3h8.5C15.55 3 17 4.46 17 6.25v6.5c0 1.8-1.46 3.25-3.25 3.25h-8.5A3.25 3.25 0 012 12.75v-6.5z" fill={primaryFill} /><path d="M21.62 3.6c.23.13.38.38.38.65v10.5a.75.75 0 01-1.14.64L18 13.67V5.33l2.86-1.72a.75.75 0 01.76-.01z" fill={primaryFill} /><path d="M8.14 17a2.5 2.5 0 01-2.39 1.75h-2a.75.75 0 00-.75.75v1.6c0 .5.4.9.9.9h1.94c3 0 5.51-2.15 6.05-5H8.14z" fill={primaryFill} /></svg>;
}

const VideoSecurity24Filled = wrapIcon(rawSvg({}), 'VideoSecurity24Filled');
export default VideoSecurity24Filled;
      