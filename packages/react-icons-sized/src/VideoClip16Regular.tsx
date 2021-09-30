import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 5.82v4.36c0 .25.27.4.49.27l3.26-1.99a.54.54 0 000-.92l-3.26-2a.32.32 0 00-.49.28zM4.5 3A2.5 2.5 0 002 5.5v5A2.5 2.5 0 004.5 13h7a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0011.5 3h-7zM3 5.5C3 4.67 3.67 4 4.5 4h7c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 013 10.5v-5z" fill={primaryFill} /></svg>;
}

const VideoClip16Regular = wrapIcon(rawSvg({}), 'VideoClip16Regular');
export default VideoClip16Regular;
      