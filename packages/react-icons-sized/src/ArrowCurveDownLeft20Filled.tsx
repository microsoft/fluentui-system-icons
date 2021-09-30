import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.39 3.14a.75.75 0 10-.78-1.28 7.2 7.2 0 00-2.98 3.13A11.6 11.6 0 008.75 10v5.44l-2.72-2.72a.75.75 0 10-1.06 1.06l4 4c.3.3.77.3 1.06 0l4-4a.75.75 0 00-1.06-1.06l-2.72 2.72V10c0-1.95.25-3.32.74-4.37a5.71 5.71 0 012.4-2.49z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft20Filled = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft20Filled');
export default ArrowCurveDownLeft20Filled;
      