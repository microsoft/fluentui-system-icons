import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.79 1.46a.9.9 0 00-1.58 0L1.12 8.63A.92.92 0 001.91 10H10.09c.7 0 1.14-.76.79-1.37l-4.1-7.17z" fill={primaryFill} /></svg>;
}

const Triangle12Filled = wrapIcon(rawSvg({}), 'Triangle12Filled');
export default Triangle12Filled;
      