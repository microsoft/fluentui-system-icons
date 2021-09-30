import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29 16c0 .69-.56 1.25-1.25 1.25H7.21l7.44 7.63a1.25 1.25 0 11-1.8 1.74l-9.5-9.74a1.25 1.25 0 010-1.76l9.5-9.74a1.25 1.25 0 011.8 1.74L7.2 14.75h20.54c.69 0 1.25.56 1.25 1.25z" fill={primaryFill} /></svg>;
}

const ArrowLeft32Filled = wrapIcon(rawSvg({}), 'ArrowLeft32Filled');
export default ArrowLeft32Filled;
      