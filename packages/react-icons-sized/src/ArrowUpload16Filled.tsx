import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.75 2a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm4.78 2.72a.75.75 0 00-1.06 0L4.22 7.97a.75.75 0 001.06 1.06l1.97-1.97v6.19a.75.75 0 001.5 0V7.06l1.97 1.97a.75.75 0 101.06-1.06L8.53 4.72z" fill={primaryFill} /></svg>;
}

const ArrowUpload16Filled = wrapIcon(rawSvg({}), 'ArrowUpload16Filled');
export default ArrowUpload16Filled;
      