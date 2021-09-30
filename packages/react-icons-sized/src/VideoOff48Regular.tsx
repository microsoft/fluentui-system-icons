import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M33.48 35.25l8.39 8.38a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l3.38 3.39A6.25 6.25 0 004 15.25v17.5C4 36.2 6.8 39 10.25 39h17.5a6.25 6.25 0 005.73-3.75zm-2.01-2.01a3.75 3.75 0 01-3.72 3.26h-17.5a3.75 3.75 0 01-3.75-3.75v-17.5c0-1.9 1.42-3.48 3.26-3.72l21.7 21.7zm.03-17.99V26.2l9.16 9.16A2.5 2.5 0 0044 33V15a2.5 2.5 0 00-4.04-1.97L34 17.7v-2.44C34 11.8 31.2 9 27.75 9H14.3l2.5 2.5h10.95a3.75 3.75 0 013.75 3.75zm2.5 5.61L41.5 15v18L34 27.14v-6.28z" fill={primaryFill} /></svg>;
}

const VideoOff48Regular = wrapIcon(rawSvg({}), 'VideoOff48Regular');
export default VideoOff48Regular;
      