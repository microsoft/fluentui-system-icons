import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.97.47c.3-.3.77-.3 1.06 0l1.75 1.75c.3.3.3.77 0 1.06L8.03 5.03a.75.75 0 01-1.06-1.06l.43-.43a4.5 4.5 0 00-2.28 7.92.75.75 0 01-.96 1.15 5.99 5.99 0 013.3-10.59l-.49-.49a.75.75 0 010-1.06zm3.81 3.02a.75.75 0 011.06-.1 5.99 5.99 0 01-3.3 10.59l.49.49a.75.75 0 11-1.06 1.06l-1.75-1.75a.75.75 0 010-1.06l1.75-1.75a.75.75 0 011.06 1.06l-.43.43a4.5 4.5 0 002.28-7.92.75.75 0 01-.1-1.05z" fill={primaryFill} /></svg>;
}

const ArrowSync16Filled = wrapIcon(rawSvg({}), 'ArrowSync16Filled');
export default ArrowSync16Filled;
      