import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M31 15.25C31 11.8 28.2 9 24.75 9h-14.5A6.25 6.25 0 004 15.25v17.5C4 36.2 6.8 39 10.25 39h14.5C28.2 39 31 36.2 31 32.75v-17.5zm2 14.28l6.96 5.44A2.5 2.5 0 0044 33V15a2.5 2.5 0 00-4.04-1.97L33 18.47v11.06z" fill={primaryFill} /></svg>;
}

const Video48Filled = wrapIcon(rawSvg({}), 'Video48Filled');
export default Video48Filled;
      