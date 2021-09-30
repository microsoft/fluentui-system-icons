import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.85 2.15a.5.5 0 00-.7 0l-3 3a.5.5 0 10.7.7L4 3.71v9.79a.5.5 0 001 0V3.7l2.15 2.15a.5.5 0 10.7-.7l-3-3zm6.3 11.71c.2.19.5.19.7 0l3-2.9a.5.5 0 10-.7-.72L12 12.32V2.5a.5.5 0 00-1 0v9.82l-2.15-2.08a.5.5 0 10-.7.72l3 2.9z" fill={primaryFill} /></svg>;
}

const ArrowSort16Regular = wrapIcon(rawSvg({}), 'ArrowSort16Regular');
export default ArrowSort16Regular;
      