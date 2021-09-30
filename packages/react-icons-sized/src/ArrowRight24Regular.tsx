import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.27 4.2a.75.75 0 00-1.04 1.1l6.25 5.95H3.75a.75.75 0 000 1.5h14.73l-6.25 5.95a.75.75 0 001.04 1.1l7.42-7.08a1 1 0 000-1.44L13.27 4.2z" fill={primaryFill} /></svg>;
}

const ArrowRight24Regular = wrapIcon(rawSvg({}), 'ArrowRight24Regular');
export default ArrowRight24Regular;
      