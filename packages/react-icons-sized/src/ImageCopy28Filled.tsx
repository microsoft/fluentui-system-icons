import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6C3.6 6.59 3 7.6 3 8.76v10.5c0 2.9 2.35 5.25 5.25 5.25h10.5c1.15 0 2.17-.6 2.74-1.5H8.25a3.75 3.75 0 01-3.75-3.75v-13-.24zm10.07 8.15l-.1.08-7.42 7.29c.5.3 1.08.48 1.7.48h12.5c.62 0 1.2-.18 1.7-.48l-7.42-7.3-.09-.06a.75.75 0 00-.77-.07l-.1.06zM8.75 3A3.25 3.25 0 005.5 6.25v12.5c0 .63.18 1.21.49 1.7l7.43-7.3.13-.11c.84-.7 2.06-.7 2.9 0l.13.12 7.43 7.3c.31-.5.49-1.08.49-1.71V6.25c0-1.8-1.46-3.25-3.25-3.25H8.75zM11 7.25a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ImageCopy28Filled = wrapIcon(rawSvg({}), 'ImageCopy28Filled');
export default ImageCopy28Filled;
      