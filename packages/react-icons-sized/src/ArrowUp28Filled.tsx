import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 12.3a1 1 0 101.41 1.4l7.3-7.38V24a1 1 0 102 0V6.33l7.28 7.37a1 1 0 101.42-1.4L14.9 3.37c-.49-.5-1.29-.5-1.78 0L4.3 12.3z" fill={primaryFill} /></svg>;
}

const ArrowUp28Filled = wrapIcon(rawSvg({}), 'ArrowUp28Filled');
export default ArrowUp28Filled;
      