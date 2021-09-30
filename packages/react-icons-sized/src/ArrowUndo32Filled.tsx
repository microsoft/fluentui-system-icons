import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.95 4.25a1.25 1.25 0 012.5 0v6.19l4.6-4.8a8.92 8.92 0 015.48-2.54c2.28-.22 4.82.4 6.93 2.52a8.3 8.3 0 012.5 6.83 8.47 8.47 0 01-2.12 4.93l-11.2 11.3a1.25 1.25 0 11-1.78-1.76l11.2-11.3h.01a6.04 6.04 0 001.4-3.42 5.8 5.8 0 00-1.78-4.82 5.95 5.95 0 00-4.92-1.8 6.44 6.44 0 00-3.9 1.78h-.01l-4.94 5.16h6.44a1.25 1.25 0 010 2.5H6.2c-.69 0-1.25-.56-1.25-1.25V4.25z" fill={primaryFill} /></svg>;
}

const ArrowUndo32Filled = wrapIcon(rawSvg({}), 'ArrowUndo32Filled');
export default ArrowUndo32Filled;
      