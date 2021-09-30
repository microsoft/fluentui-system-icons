import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1a5 5 0 110 10A5 5 0 016 1zm.1 2.65a.5.5 0 000 .7L7.24 5.5H3.5a.5.5 0 000 1h3.74L6.1 7.65a.5.5 0 10.7.7l2-2a.5.5 0 000-.7l-2-2a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight12Filled = wrapIcon(rawSvg({}), 'ArrowCircleRight12Filled');
export default ArrowCircleRight12Filled;
      