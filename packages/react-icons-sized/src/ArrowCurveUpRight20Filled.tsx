import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.97 7.03a.75.75 0 101.06-1.06l-4-4a.75.75 0 00-1.06 0l-4 4a.75.75 0 001.06 1.06l2.72-2.72v5.44c0 1.95-.25 3.32-.74 4.37a5.71 5.71 0 01-2.4 2.49.75.75 0 10.78 1.28 7.2 7.2 0 002.98-3.13c.63-1.33.88-2.96.88-5.01V4.31l2.72 2.72z" fill={primaryFill} /></svg>;
}

const ArrowCurveUpRight20Filled = wrapIcon(rawSvg({}), 'ArrowCurveUpRight20Filled');
export default ArrowCurveUpRight20Filled;
      