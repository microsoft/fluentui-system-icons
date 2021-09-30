import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.3 3.28A1 1 0 018 4v4.02a1 1 0 01-1.7.7l-2.04-2a1 1 0 010-1.42l2.04-2z" fill={primaryFill} /></svg>;
}

const CaretLeft12Filled = wrapIcon(rawSvg({}), 'CaretLeft12Filled');
export default CaretLeft12Filled;
      