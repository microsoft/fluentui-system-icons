import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.78 2.72c.3.3.3.77 0 1.06L4.56 6h8.69a7.75 7.75 0 11-7.75 7.75.75.75 0 011.5 0 6.25 6.25 0 106.25-6.25H4.56l2.22 2.22a.75.75 0 11-1.06 1.06l-3.5-3.5a.75.75 0 010-1.06l3.5-3.5c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const ArrowReset24Regular = wrapIcon(rawSvg({}), 'ArrowReset24Regular');
export default ArrowReset24Regular;
      