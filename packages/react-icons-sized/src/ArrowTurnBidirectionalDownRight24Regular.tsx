import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.28 3.22a.75.75 0 00-1.06 1.06l3.22 3.22h-7.69a4.25 4.25 0 00-4.25 4.25v7.69l-3.22-3.22a.75.75 0 00-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l4.5-4.5a.75.75 0 10-1.06-1.06L9 19.44v-7.69A2.75 2.75 0 0111.75 9h7.69l-3.22 3.22a.75.75 0 001.06 1.06l4.5-4.5a.75.75 0 000-1.06l-4.5-4.5z" fill={primaryFill} /></svg>;
}

const ArrowTurnBidirectionalDownRight24Regular = wrapIcon(rawSvg({}), 'ArrowTurnBidirectionalDownRight24Regular');
export default ArrowTurnBidirectionalDownRight24Regular;
      