import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.73 13.79c.29.28.75.28 1.04 0l2.75-2.65a.75.75 0 10-1.04-1.08L12 11.49V2.75a.75.75 0 00-1.5 0v8.74l-1.48-1.43a.75.75 0 10-1.04 1.08l2.75 2.65zM5.28 2.22a.75.75 0 00-1.06 0L1.47 4.97a.75.75 0 001.06 1.06L4 4.56v8.69a.75.75 0 001.5 0V4.56l1.47 1.47a.75.75 0 001.06-1.06L5.28 2.22z" fill={primaryFill} /></svg>;
}

const ArrowSort16Filled = wrapIcon(rawSvg({}), 'ArrowSort16Filled');
export default ArrowSort16Filled;
      