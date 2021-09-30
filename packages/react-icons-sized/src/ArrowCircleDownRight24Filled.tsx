import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 22a10 10 0 100-20 10 10 0 000 20zm2.5-13.25a.75.75 0 011.5 0v6.5c0 .41-.34.75-.75.75h-6.5a.75.75 0 010-1.5h4.74L8.22 9.28a.75.75 0 011.06-1.06l5.22 5.17V8.75z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownRight24Filled = wrapIcon(rawSvg({}), 'ArrowCircleDownRight24Filled');
export default ArrowCircleDownRight24Filled;
      