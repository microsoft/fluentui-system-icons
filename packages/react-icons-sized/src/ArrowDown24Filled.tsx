import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.72 13.7a1 1 0 10-1.43-1.4L13 17.67V4a1 1 0 00-2 0v13.66L5.72 12.3a1 1 0 00-1.43 1.4l6.82 6.93c.5.5 1.3.5 1.78 0l6.83-6.93z" fill={primaryFill} /></svg>;
}

const ArrowDown24Filled = wrapIcon(rawSvg({}), 'ArrowDown24Filled');
export default ArrowDown24Filled;
      