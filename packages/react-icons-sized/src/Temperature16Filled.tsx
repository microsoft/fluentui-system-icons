import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3.5a3 3 0 116 0v5.35a3.99 3.99 0 01-3 6.65 4 4 0 01-3-6.65V3.5zm3-1.5C6.67 2 6 2.67 6 3.5v5.97l-.23.23a2.5 2.5 0 103.46 0L9 9.47V3.5C9 2.67 8.33 2 7.5 2zM8 6a.5.5 0 00-1 0v4.09a1.5 1.5 0 101 0V6z" fill={primaryFill} /></svg>;
}

const Temperature16Filled = wrapIcon(rawSvg({}), 'Temperature16Filled');
export default Temperature16Filled;
      