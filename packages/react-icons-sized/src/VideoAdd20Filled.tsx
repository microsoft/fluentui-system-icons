import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 6.5A2.5 2.5 0 0010.5 4h-6A2.5 2.5 0 002 6.5v3.76a5.5 5.5 0 018.8 5.73A2.5 2.5 0 0013 13.5v-7zm1 1.43v4.15l2.76 2.35a.75.75 0 001.24-.57V6.2a.75.75 0 00-1.23-.57L14 7.93zm-4 6.57a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4-2a.5.5 0 00-1 0V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5z" fill={primaryFill} /></svg>;
}

const VideoAdd20Filled = wrapIcon(rawSvg({}), 'VideoAdd20Filled');
export default VideoAdd20Filled;
      