import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.4 3.38a.75.75 0 00-1.02-.28 7.92 7.92 0 00-3.92 4.7 15.4 15.4 0 00-.46 4.55V18.44l-3.72-3.72a.75.75 0 10-1.06 1.06l5 5c.3.3.77.3 1.06 0l5-5a.75.75 0 00-1.06-1.06l-3.72 3.72v-5.69-.38c0-1.41 0-2.8.4-4.13a6.43 6.43 0 013.22-3.84c.36-.2.49-.66.28-1.02z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft24Regular = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft24Regular');
export default ArrowCurveDownLeft24Regular;
      