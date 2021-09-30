import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.2 2.3l4 3.99a1 1 0 01.1 1.32l-.1.1-4 4a1 1 0 01-1.49-1.32l.08-.1L16.1 8H5.5a1 1 0 01-1-.88V7a1 1 0 01.88-1H16.1l-2.3-2.3a1 1 0 01-.08-1.31l.08-.1a1 1 0 011.32-.08l.1.08 4 4-4-4zm4.29 14.58V17a1 1 0 01-.88 1H7.91l2.3 2.3a1 1 0 01.08 1.31l-.08.1a1 1 0 01-1.32.08l-.1-.08-4-4a1 1 0 01-.08-1.32l.08-.1 4-4a1 1 0 011.5 1.32l-.08.1L7.9 16H18.5a1 1 0 01.99.88V17v-.12z" fill={primaryFill} /></svg>;
}

const ArrowSwap24Filled = wrapIcon(rawSvg({}), 'ArrowSwap24Filled');
export default ArrowSwap24Filled;
      