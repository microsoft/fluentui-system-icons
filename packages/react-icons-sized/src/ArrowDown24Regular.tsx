import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.8 13.27a.75.75 0 00-1.1-1.04l-5.95 6.25V3.75a.75.75 0 10-1.5 0v14.73L5.3 12.23a.75.75 0 00-1.1 1.04l7.08 7.42a1 1 0 001.44 0l7.07-7.42z" fill={primaryFill} /></svg>;
}

const ArrowDown24Regular = wrapIcon(rawSvg({}), 'ArrowDown24Regular');
export default ArrowDown24Regular;
      