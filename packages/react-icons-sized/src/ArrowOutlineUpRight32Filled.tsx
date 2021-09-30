import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29.98 5.53c.16-2-1.51-3.67-3.51-3.5L9.95 3.4a3.25 3.25 0 00-2.03 5.54l1.92 1.91-6.96 6.96a3.25 3.25 0 000 4.6l6.72 6.7a3.25 3.25 0 004.6 0l6.95-6.95 1.91 1.92a3.25 3.25 0 005.54-2.03l1.38-16.52z" fill={primaryFill} /></svg>;
}

const ArrowOutlineUpRight32Filled = wrapIcon(rawSvg({}), 'ArrowOutlineUpRight32Filled');
export default ArrowOutlineUpRight32Filled;
      