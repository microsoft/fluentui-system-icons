import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 6.5a.5.5 0 011 0V8a.5.5 0 01-1 0V6.5zM6 3.75a.75.75 0 100 1.5.75.75 0 000-1.5zM1 6a5 5 0 1110 0A5 5 0 011 6zm5-4a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const Info12Regular = wrapIcon(rawSvg({}), 'Info12Regular');
export default Info12Regular;
      