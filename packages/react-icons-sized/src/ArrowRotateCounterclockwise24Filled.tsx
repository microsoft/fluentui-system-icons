import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3a9 9 0 00-4.13 17H6a1 1 0 00-.12 2H10a1 1 0 001-.88V17a1 1 0 00-2-.12V18.33A7 7 0 1119 12a1 1 0 102 0 9 9 0 00-9-9zm0 6a3 3 0 100 6 3 3 0 000-6zm0 2a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const ArrowRotateCounterclockwise24Filled = wrapIcon(rawSvg({}), 'ArrowRotateCounterclockwise24Filled');
export default ArrowRotateCounterclockwise24Filled;
      