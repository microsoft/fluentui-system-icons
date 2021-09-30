import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.03 7.03a.75.75 0 01-1.06-1.06l4-4c.3-.3.77-.3 1.06 0l4 4a.75.75 0 01-1.06 1.06l-2.72-2.72v5.44c0 1.95.25 3.32.74 4.37a5.71 5.71 0 002.4 2.49.75.75 0 11-.78 1.28 7.2 7.2 0 01-2.98-3.13 11.6 11.6 0 01-.88-5.01V4.31L6.03 7.03z" fill={primaryFill} /></svg>;
}

const ArrowCurveUpLeft20Filled = wrapIcon(rawSvg({}), 'ArrowCurveUpLeft20Filled');
export default ArrowCurveUpLeft20Filled;
      