import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.87 3.25a1 1 0 01-.37 1.37 6.18 6.18 0 00-3.12 3.7 13.87 13.87 0 00-.38 4.06v5.46l3.3-3.3a1 1 0 111.4 1.42l-5 5a1 1 0 01-1.4 0l-5-5a1 1 0 111.4-1.42l3.3 3.3v-5.09-.4c0-1.37-.01-3.02.47-4.61a8.17 8.17 0 014.03-4.86 1 1 0 011.37.37z" fill={primaryFill} /></svg>;
}

const ArrowCurveDownLeft24Filled = wrapIcon(rawSvg({}), 'ArrowCurveDownLeft24Filled');
export default ArrowCurveDownLeft24Filled;
      