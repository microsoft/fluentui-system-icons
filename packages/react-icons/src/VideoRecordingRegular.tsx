import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 4A2.5 2.5 0 002 6.5v2.84c.31-.15.65-.25 1-.3V6.5C3 5.67 3.67 5 4.5 5h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5H11v1h.5a2.5 2.5 0 002.5-2.5v-1l2.4 1.8a1 1 0 001.6-.8v-7a1 1 0 00-1.6-.8L14 7.5v-1A2.5 2.5 0 0011.5 4h-7zM14 8.75l3-2.25v7l-3-2.25v-2.5z" fill={primaryFill} /><path d="M1 12.5A2.5 2.5 0 013.5 10h4a2.5 2.5 0 012.5 2.5v4A2.5 2.5 0 017.5 19h-4A2.5 2.5 0 011 16.5v-4zm4.02.03a.45.45 0 00-.45-.03.5.5 0 00-.15.1.5.5 0 00-.14.36v3.08a.5.5 0 00.14.35.45.45 0 00.48.13.52.52 0 00.13-.06l2.3-1.57c.06-.04.12-.1.16-.18a.54.54 0 000-.49.49.49 0 00-.17-.18l-2.3-1.5z" fill={primaryFill} /></svg>;
}

const VideoRecordingRegular = wrapIcon(rawSvg({}), 'VideoRecordingRegular');
export default VideoRecordingRegular;
      