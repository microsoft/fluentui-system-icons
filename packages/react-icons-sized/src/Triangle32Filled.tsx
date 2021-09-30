import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.85 4.68a3.25 3.25 0 00-5.7 0L2.4 24.18A3.25 3.25 0 005.25 29h21.5a3.25 3.25 0 002.84-4.82L18.85 4.68z" fill={primaryFill} /></svg>;
}

const Triangle32Filled = wrapIcon(rawSvg({}), 'Triangle32Filled');
export default Triangle32Filled;
      