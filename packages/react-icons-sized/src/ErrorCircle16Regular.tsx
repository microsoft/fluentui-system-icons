import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm0 1a5 5 0 100 10A5 5 0 008 3zm0 7a.75.75 0 110 1.5.75.75 0 010-1.5zm0-5.5a.5.5 0 01.5.41V8.5a.5.5 0 01-1 .09V5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ErrorCircle16Regular = wrapIcon(rawSvg({}), 'ErrorCircle16Regular');
export default ErrorCircle16Regular;
      