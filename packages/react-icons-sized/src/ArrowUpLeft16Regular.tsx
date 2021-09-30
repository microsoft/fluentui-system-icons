import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 3a.5.5 0 000-1h-6a.5.5 0 00-.5.5v6a.5.5 0 001 0V3.7l10.15 10.15a.5.5 0 00.7-.7L3.71 3H8.5z" fill={primaryFill} /></svg>;
}

const ArrowUpLeft16Regular = wrapIcon(rawSvg({}), 'ArrowUpLeft16Regular');
export default ArrowUpLeft16Regular;
      