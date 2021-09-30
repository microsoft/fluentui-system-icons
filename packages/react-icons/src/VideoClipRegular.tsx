import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.77 7.08A.5.5 0 008 7.5v5.15a.5.5 0 00.78.42l4-2.65a.5.5 0 00-.01-.84l-4-2.5z" fill={primaryFill} /><path d="M4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0015.5 3h-11zM3 5.5C3 4.67 3.67 4 4.5 4h11c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5v-9z" fill={primaryFill} /></svg>;
}

const VideoClipRegular = wrapIcon(rawSvg({}), 'VideoClipRegular');
export default VideoClipRegular;
      