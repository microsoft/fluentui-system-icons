import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 4.5c1.8 0 3.25 1.46 3.25 3.25v.17l3.86-2.31a.75.75 0 011.14.64v11.5c0 .58-.64.94-1.14.64L17 16.07v.18c0 1.8-1.46 3.25-3.25 3.25h-1.06c.15-.48.25-.98.3-1.5h.76c.97 0 1.75-.78 1.75-1.75v-8.5c0-.97-.78-1.75-1.75-1.75h-8.5c-.97 0-1.75.78-1.75 1.75v3.98c-.55.29-1.06.65-1.5 1.08V7.75C2 5.95 3.46 4.5 5.25 4.5h8.5zm6.75 3.07L17 9.67v4.66l3.5 2.1V7.57zM12 17.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM7 18v2.5a.5.5 0 11-1 0V18H3.5a.5.5 0 010-1H6v-2.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1H7z" fill={primaryFill} /></svg>;
}

const VideoAdd24Regular = wrapIcon(rawSvg({}), 'VideoAdd24Regular');
export default VideoAdd24Regular;
      