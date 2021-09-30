import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 4h11.5a3.25 3.25 0 013.24 3.07l.01.18v9.5a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 16.75v-9.5a3.25 3.25 0 013.07-3.24L6.25 4h11.5-11.5zm3.8 5.59a.5.5 0 00-.05.22v4.38a.5.5 0 00.72.45l4.39-2.2a.5.5 0 000-.89l-4.39-2.19a.5.5 0 00-.67.23z" fill={primaryFill} /></svg>;
}

const VideoClip24Filled = wrapIcon(rawSvg({}), 'VideoClip24Filled');
export default VideoClip24Filled;
      