import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 8.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z" fill={primaryFill} /><path d="M5.5 3.41a.5.5 0 011 0V6.09a.5.5 0 01-1 0V3.41z" fill={primaryFill} /><path d="M11 6A5 5 0 111 6a5 5 0 0110 0zm-1 0a4 4 0 10-8 0 4 4 0 008 0z" fill={primaryFill} /></svg>;
}

const ErrorCircle12Regular = wrapIcon(rawSvg({}), 'ErrorCircle12Regular');
export default ErrorCircle12Regular;
      