import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 15h8a1 1 0 011 .88V24a1 1 0 01-2 .12V18.4l-7.3 7.3a1 1 0 01-1.49-1.32l.08-.1L9.6 17H4a1 1 0 01-1-.88V16a1 1 0 01.88-1H12 4zM25.7 2.3a1 1 0 01.09 1.31l-.08.1L18.4 11H24a1 1 0 011 .88V12a1 1 0 01-.88 1H16a1 1 0 01-1-.88V4a1 1 0 012-.12V9.6l7.3-7.3a1 1 0 011.4 0z" fill={primaryFill} /></svg>;
}

const ArrowMinimize28Filled = wrapIcon(rawSvg({}), 'ArrowMinimize28Filled');
export default ArrowMinimize28Filled;
      