import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 5.5a2 2 0 00-2-2H4a2 2 0 00-2 2v5c0 1.1.9 2 2 2h4a2 2 0 002-2v-5z" fill={primaryFill} /><path d="M11 6.34v3.32l1.73 1.64a.75.75 0 001.27-.54V5.24c0-.66-.79-1-1.27-.54L11 6.34z" fill={primaryFill} /></svg>;
}

const Video16Filled = wrapIcon(rawSvg({}), 'Video16Filled');
export default Video16Filled;
      