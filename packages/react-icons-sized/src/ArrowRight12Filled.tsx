import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1.5 6c0-.41.34-.75.75-.75h5.94L6.22 3.28a.75.75 0 011.06-1.06l3.25 3.25c.3.3.3.77 0 1.06L7.28 9.78a.75.75 0 01-1.06-1.06l1.97-1.97H2.25A.75.75 0 011.5 6z" fill={primaryFill} /></svg>;
}

const ArrowRight12Filled = wrapIcon(rawSvg({}), 'ArrowRight12Filled');
export default ArrowRight12Filled;
      