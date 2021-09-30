import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5A2.5 2.5 0 0010.5 4h-6A2.5 2.5 0 002 6.5v7A2.5 2.5 0 004.5 16h4.7A5.5 5.5 0 0113 9.2V6.5zm5-.3v4.06a5.48 5.48 0 00-4-1.24V7.93l2.77-2.31a.75.75 0 011.23.57zm-8 8.3a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm1 0a3.5 3.5 0 015.6-2.8l-4.9 4.9a3.48 3.48 0 01-.7-2.1zm3.5 3.5c-.79 0-1.51-.26-2.1-.7l4.9-4.9a3.5 3.5 0 01-2.8 5.6z" fill={primaryFill} /></svg>;
}

const VideoProhibited20Filled = wrapIcon(rawSvg({}), 'VideoProhibited20Filled');
export default VideoProhibited20Filled;
      