import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 4a1 1 0 012 0 .75.75 0 001.5 0 2.5 2.5 0 00-5 0v2h-1C3.67 6 3 6.67 3 7.5v6c0 .83.67 1.5 1.5 1.5h7c.83 0 1.5-.67 1.5-1.5v-6c0-.83-.67-1.5-1.5-1.5H7V4zm2 6.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /></svg>;
}

const LockOpen16Filled = wrapIcon(rawSvg({}), 'LockOpen16Filled');
export default LockOpen16Filled;
      