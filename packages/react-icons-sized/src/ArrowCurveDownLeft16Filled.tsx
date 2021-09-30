import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.15 1.38c.2.36.08.82-.28 1.02C8.46 3.78 8.25 6.03 8.25 8v4.44l2.22-2.22a.75.75 0 111.06 1.06l-3.5 3.5a.75.75 0 01-1.06 0l-3.5-3.5a.75.75 0 011.06-1.06l2.22 2.22V8c0-2.03.2-5.08 3.38-6.9a.75.75 0 011.02.28z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft16Filled = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft16Filled');
export default ArrowCurveDownLeft16Filled;
      