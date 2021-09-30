import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 44.25a1.5 1.5 0 01-1.5-1.5V10.91l-12.18 12.4a1.5 1.5 0 11-2.14-2.11l14.75-15a.61.61 0 01.02-.02 1.5 1.5 0 012.14.04L39.82 21.2a1.5 1.5 0 11-2.14 2.1L25.5 10.91v31.84c0 .83-.67 1.5-1.5 1.5z" fill={primaryFill} /></svg>;
}

const ArrowUp48Filled = wrapIcon(rawSvg({}), 'ArrowUp48Filled');
export default ArrowUp48Filled;
      