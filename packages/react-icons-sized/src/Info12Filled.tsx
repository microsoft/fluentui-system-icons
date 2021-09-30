import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6A5 5 0 111 6a5 5 0 0110 0zm-5.5.5V8a.5.5 0 001 0V6.5a.5.5 0 00-1 0zM6 3.75a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Info12Filled = wrapIcon(rawSvg({}), 'Info12Filled');
export default Info12Filled;
      