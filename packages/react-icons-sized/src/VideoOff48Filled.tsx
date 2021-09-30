import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 32.77l10.87 10.86a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l3.38 3.39A6.25 6.25 0 004 15.25v17.5C4 36.2 6.8 39 10.25 39h14.5A6.25 6.25 0 0031 32.77zm2-5.07l7.66 7.66A2.5 2.5 0 0044 33V15a2.5 2.5 0 00-4.04-1.97L33 18.47v9.23zM14.3 9L31 25.7V15.25C31 11.8 28.2 9 24.75 9H14.3z" fill={primaryFill} /></svg>;
}

const VideoOff48Filled = wrapIcon(rawSvg({}), 'VideoOff48Filled');
export default VideoOff48Filled;
      