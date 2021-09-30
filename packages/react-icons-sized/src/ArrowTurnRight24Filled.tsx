import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.46 3.3a1 1 0 10-1.42 1.4l2.3 2.3H10.5A4.5 4.5 0 006 11.5V20a1 1 0 102 0v-8.5A2.5 2.5 0 0110.5 9h7.34l-2.8 2.8a1 1 0 101.42 1.4l4.25-4.24a1 1 0 000-1.42L16.46 3.3z" fill={primaryFill} /></svg>;
}

const ArrowTurnRight24Filled = wrapIcon(rawSvg({}), 'ArrowTurnRight24Filled');
export default ArrowTurnRight24Filled;
      