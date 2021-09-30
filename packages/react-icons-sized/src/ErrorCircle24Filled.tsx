import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 13a1 1 0 100 2 1 1 0 000-2zm0-8a1 1 0 00-1 .88v5.24a1 1 0 002 0V7.88A1 1 0 0012 7z" fill={primaryFill} /></svg>;
}

const ErrorCircle24Filled = wrapIcon(rawSvg({}), 'ErrorCircle24Filled');
export default ErrorCircle24Filled;
      