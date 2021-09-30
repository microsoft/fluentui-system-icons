import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.25 5.63v12.74l-3.46-3.64a.75.75 0 00-1.08 1.04l4.75 5a.75.75 0 001.08 0l4.75-5a.75.75 0 00-1.08-1.04l-3.46 3.64V5.63l3.46 3.64a.75.75 0 101.08-1.04l-4.75-5a.75.75 0 00-1.08 0l-4.75 5a.75.75 0 101.08 1.04l3.46-3.64z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown24Regular = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown24Regular');
export default ArrowBidirectionalUpDown24Regular;
      