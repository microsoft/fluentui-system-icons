import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5A2.5 2.5 0 0010.5 4h-6A2.5 2.5 0 002 6.5v3.76a5.5 5.5 0 018.8 5.73A2.5 2.5 0 0013 13.5v-7zm1 1.43v4.15l2.76 2.35a.75.75 0 001.24-.57V6.2a.75.75 0 00-1.23-.57L14 7.93zM1 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm6.5-3c.28 0 .5.22.5.5v1.5a.5.5 0 01-.5.5H6a.5.5 0 010-1h.47a1.99 1.99 0 00-2.38.34.5.5 0 01-.71-.71A3 3 0 017 12.15V12c0-.28.22-.5.5-.5zm-.88 5.53A3 3 0 014 16.85V17a.5.5 0 01-1 0v-1.5c0-.28.22-.5.5-.5H5a.5.5 0 010 1h-.47a1.99 1.99 0 002.38-.34.5.5 0 01.71.71 3 3 0 01-1 .66z" fill={primaryFill} /></svg>;
}

const VideoSync20Filled = wrapIcon(rawSvg({}), 'VideoSync20Filled');
export default VideoSync20Filled;
      