import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3A2.5 2.5 0 002 5.5v9A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0015.5 3h-11zm4.27 4.08l4 2.5a.5.5 0 010 .84l-4 2.65a.5.5 0 01-.77-.42V7.5a.5.5 0 01.77-.42z" fill={primaryFill} /></svg>;
}

const VideoClipFilled = wrapIcon(rawSvg({}), 'VideoClipFilled');
export default VideoClipFilled;
      