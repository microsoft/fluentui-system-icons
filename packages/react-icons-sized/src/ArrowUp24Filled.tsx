import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.28 10.3a1 1 0 001.43 1.4L11 6.33V20a1 1 0 102 0V6.34l5.28 5.36a1 1 0 001.43-1.4l-6.82-6.93c-.5-.5-1.3-.5-1.78 0L4.28 10.3z" fill={primaryFill} /></svg>;
}

const ArrowUp24Filled = wrapIcon(rawSvg({}), 'ArrowUp24Filled');
export default ArrowUp24Filled;
      