import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.3 8.3l3.99-4a1 1 0 011.32-.1l.1.1 4 4a1 1 0 01-1.32 1.5l-.1-.1L13 7.43V19a1 1 0 01-.88 1H12a1 1 0 01-1-.88V7.4l-2.3 2.3a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 4-4-4 4z" fill={primaryFill} /></svg>;
}

const ArrowSortUp24Filled = wrapIcon(rawSvg({}), 'ArrowSortUp24Filled');
export default ArrowSortUp24Filled;
      