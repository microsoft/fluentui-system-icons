import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v5c0 .51.15.98.41 1.38L5.6 7.7a2 2 0 012.82 0l3.19 3.18c.26-.39.42-.86.42-1.36l.06-5A2.5 2.5 0 009.58 2H4.5zm4.75 4a.75.75 0 110-1.5.75.75 0 010 1.5zM4.5 12c-.51 0-.98-.15-1.38-.41L6.3 8.4a1 1 0 011.42 0l3.18 3.18c-.4.26-.86.41-1.37.41H4.5zM7 14a3 3 0 01-2.24-1H9.5A3.5 3.5 0 0013 9.5V7 4.76A3 3 0 0114 7v2.5A4.5 4.5 0 019.5 14H7z" fill={primaryFill} /></svg>;
}

const ImageMultiple16Filled = wrapIcon(rawSvg({}), 'ImageMultiple16Filled');
export default ImageMultiple16Filled;
      