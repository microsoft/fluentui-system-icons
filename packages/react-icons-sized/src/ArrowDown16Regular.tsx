import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2.5a.5.5 0 10-1 0v9.7L3.87 8.17a.5.5 0 10-.74.66l4.5 5a.5.5 0 00.74 0l4.5-5a.5.5 0 00-.74-.66L8.5 12.2V2.5z" fill={primaryFill} /></svg>;
}

const ArrowDown16Regular = wrapIcon(rawSvg({}), 'ArrowDown16Regular');
export default ArrowDown16Regular;
      