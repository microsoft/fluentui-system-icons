import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 4.25c0-.69.56-1.25 1.25-1.25h9.5c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 11-2.5 0V7.27L7.27 26.5h6.48a1.25 1.25 0 110 2.5h-9.5C3.56 29 3 28.44 3 27.75v-9.5a1.25 1.25 0 112.5 0v6.48L24.73 5.5h-6.48c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const ArrowMaximize32Filled = wrapIcon(rawSvg({}), 'ArrowMaximize32Filled');
export default ArrowMaximize32Filled;
      