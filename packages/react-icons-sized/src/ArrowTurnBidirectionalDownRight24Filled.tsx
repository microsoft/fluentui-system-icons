import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.7 3.3a1 1 0 10-1.4 1.4L18.58 7H11.5A4.5 4.5 0 007 11.5v7.09l-2.3-2.3a1 1 0 10-1.4 1.42l4 4a1 1 0 001.4 0l4-4a1 1 0 00-1.4-1.42L9 18.6V11.5A2.5 2.5 0 0111.5 9h7.09l-2.3 2.3a1 1 0 101.42 1.4l4-4a1 1 0 000-1.4l-4-4z" fill={primaryFill} /></svg>;
}

const ArrowTurnBidirectionalDownRight24Filled = wrapIcon(rawSvg({}), 'ArrowTurnBidirectionalDownRight24Filled');
export default ArrowTurnBidirectionalDownRight24Filled;
      