import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.13 9.16a.5.5 0 10.74.68L9.5 3.67V17.5a.5.5 0 001 0V3.67l5.63 6.17a.5.5 0 00.74-.68l-6.32-6.91a.75.75 0 00-1.1 0L3.13 9.16z" fill={primaryFill} /></svg>;
}

const ArrowUp20Regular = wrapIcon(rawSvg({}), 'ArrowUp20Regular');
export default ArrowUp20Regular;
      