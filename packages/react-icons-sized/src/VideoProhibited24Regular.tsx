import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.75 5C15.55 5 17 6.46 17 8.25v.17l3.86-2.31a.75.75 0 011.14.64v6.06a6.52 6.52 0 00-1.5-1.08V8.07l-3.5 2.1v.85c-.52.04-1.02.14-1.5.3V8.24c0-.97-.78-1.75-1.75-1.75h-8.5c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75h5.83c.08.52.22 1.03.42 1.5H5.25A3.25 3.25 0 012 16.75v-8.5C2 6.45 3.46 5 5.25 5h8.5zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.44 1.42.69 2.25.69z" fill={primaryFill} /></svg>;
}

const VideoProhibited24Regular = wrapIcon(rawSvg({}), 'VideoProhibited24Regular');
export default VideoProhibited24Regular;
      