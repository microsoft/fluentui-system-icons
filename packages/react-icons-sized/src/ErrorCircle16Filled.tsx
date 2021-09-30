import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 8a.75.75 0 100 1.5.75.75 0 000-1.5zm0-5.5a.5.5 0 00-.5.41V8.59a.5.5 0 001 0V4.91A.5.5 0 008 4.5z" fill={primaryFill} /></svg>;
}

const ErrorCircle16Filled = wrapIcon(rawSvg({}), 'ErrorCircle16Filled');
export default ErrorCircle16Filled;
      