import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 2.5a.5.5 0 011 0v4.9a.6.6 0 01-.6.6h-4.9a.5.5 0 010-1h3.6l-3.48-3.02a4 4 0 10-5.24 6.04l8.17 7.1a.5.5 0 11-.66.76l-8.17-7.1a5 5 0 116.56-7.55L15 6.46V2.5z" fill={primaryFill} /></svg>;
}

const ArrowRedo20Regular = wrapIcon(rawSvg({}), 'ArrowRedo20Regular');
export default ArrowRedo20Regular;
      