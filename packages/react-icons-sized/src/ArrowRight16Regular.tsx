import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 8.5a.5.5 0 010-1h9.7L8.17 3.87a.5.5 0 11.66-.74l5 4.5a.5.5 0 010 .74l-5 4.5a.5.5 0 11-.66-.74L12.2 8.5H2.5z" fill={primaryFill} /></svg>;
}

const ArrowRight16Regular = wrapIcon(rawSvg({}), 'ArrowRight16Regular');
export default ArrowRight16Regular;
      