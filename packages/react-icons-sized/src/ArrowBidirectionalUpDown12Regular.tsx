import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.35 4.35a.5.5 0 11-.7-.7l2.5-2.5c.2-.2.5-.2.7 0l2.5 2.5a.5.5 0 11-.7.7L6 2.71v6.58l1.65-1.64a.5.5 0 11.7.7l-2.5 2.5a.5.5 0 01-.7 0l-2.5-2.5a.5.5 0 11.7-.7L5 9.29V2.71L3.35 4.35z" fill={primaryFill} /></svg>;
}

const ArrowBidirectionalUpDown12Regular = wrapIcon(rawSvg({}), 'ArrowBidirectionalUpDown12Regular');
export default ArrowBidirectionalUpDown12Regular;
      