import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 13.5a.5.5 0 001 0V3.8l3.63 4.03a.5.5 0 10.74-.66l-4.5-5a.5.5 0 00-.74 0l-4.5 5a.5.5 0 00.74.66L7.5 3.8v9.7z" fill={primaryFill} /></svg>;
}

const ArrowUp16Regular = wrapIcon(rawSvg({}), 'ArrowUp16Regular');
export default ArrowUp16Regular;
      