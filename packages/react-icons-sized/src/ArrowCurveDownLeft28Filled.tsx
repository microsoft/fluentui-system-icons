import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.87 3.5a1 1 0 01-.37 1.37C15.14 7.36 15 11.47 15 15v7.09l4.3-4.3a1 1 0 111.4 1.42l-6 6a1 1 0 01-1.4 0l-6-6a1 1 0 111.4-1.42l4.3 4.3V15c0-3.48.06-8.76 5.5-11.87a1 1 0 011.37.37z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft28Filled = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft28Filled');
export default ArrowCurveDownLeft28Filled;
      