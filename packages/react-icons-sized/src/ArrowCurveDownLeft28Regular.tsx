import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.4 3.38a.75.75 0 00-1.02-.28C13.08 6.13 13 11.27 13 14.75v7.69l-4.72-4.72a.75.75 0 10-1.06 1.06l6 6c.3.3.77.3 1.06 0l6-6a.75.75 0 00-1.06-1.06l-4.72 4.72v-7.69c0-3.52.13-7.78 4.62-10.35.36-.2.49-.66.28-1.02z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft28Regular = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft28Regular');
export default ArrowCurveDownLeft28Regular;
      