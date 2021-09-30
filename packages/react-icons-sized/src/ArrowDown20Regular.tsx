import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.87 10.84a.5.5 0 10-.74-.68l-5.63 6.17V2.5a.5.5 0 10-1 0v13.83l-5.63-6.17a.5.5 0 00-.74.68l6.31 6.91a.75.75 0 001.11 0l6.32-6.91z" fill={primaryFill} /></svg>;
}

const ArrowDown20Regular = wrapIcon(rawSvg({}), 'ArrowDown20Regular');
export default ArrowDown20Regular;
      