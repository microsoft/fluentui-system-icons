import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 26a12 12 0 100-24 12 12 0 000 24zm5.03-12.22c-.3.3-.77.3-1.06 0l-3.22-3.22v8.69a.75.75 0 01-1.5 0v-8.69l-3.22 3.22a.75.75 0 11-1.06-1.06l4.5-4.5c.3-.3.77-.3 1.06 0l4.5 4.5c.3.3.3.77 0 1.06z" fill={primaryFill} /></svg>;
}

const ArrowCircleUp28Filled = wrapIcon(rawSvg({}), 'ArrowCircleUp28Filled');
export default ArrowCircleUp28Filled;
      