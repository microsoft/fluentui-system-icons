import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6C3.6 6.59 3 7.6 3 8.76v6.5c0 2.9 2.35 5.25 5.25 5.25h6.5c1.15 0 2.17-.6 2.74-1.5H8.25a3.75 3.75 0 01-3.75-3.75v-9-.24zm8.07 6.15l-.1.08-5.39 5.31c.49.3 1.06.46 1.67.46h8.5c.62 0 1.2-.17 1.7-.48l-5.42-5.3-.09-.07a.75.75 0 00-.77-.06l-.1.06zM8.75 3A3.25 3.25 0 005.5 6.25v8.5c0 .64.19 1.24.5 1.74l5.42-5.33.13-.12c.83-.7 2.06-.7 2.9 0l.13.11L20 16.47c.31-.5.49-1.09.49-1.72v-8.5c0-1.8-1.46-3.25-3.25-3.25h-8.5zm.75 2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const ImageCopy24Filled = wrapIcon(rawSvg({}), 'ImageCopy24Filled');
export default ImageCopy24Filled;
      