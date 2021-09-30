import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.21 1.46a.9.9 0 011.58 0l4.09 7.17a.92.92 0 01-.79 1.37H1.91a.92.92 0 01-.79-1.37l4.1-7.17zM5.5 4.5v1a.5.5 0 001 0v-1a.5.5 0 00-1 0zM6 6.75a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Warning12Filled = wrapIcon(rawSvg({}), 'Warning12Filled');
export default Warning12Filled;
      