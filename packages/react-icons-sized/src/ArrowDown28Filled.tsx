import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.71 15.7a1 1 0 10-1.42-1.4L15 21.67V4a1 1 0 10-2 0v17.67L5.71 14.3a1 1 0 10-1.42 1.4l8.82 8.93c.5.5 1.3.5 1.78 0l8.82-8.93z" fill={primaryFill} /></svg>;
}

const ArrowDown28Filled = wrapIcon(rawSvg({}), 'ArrowDown28Filled');
export default ArrowDown28Filled;
      