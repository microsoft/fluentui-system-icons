import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.2 8.73a.75.75 0 001.1 1.04l4.95-5.24v12.72a.75.75 0 101.5 0V4.52l4.96 5.25a.75.75 0 101.08-1.04l-6.06-6.41a1 1 0 00-1.46 0L3.21 8.73z" fill={primaryFill} /></svg>;
}

const ArrowUpFilled = wrapIcon(rawSvg({}), 'ArrowUpFilled');
export default ArrowUpFilled;
      