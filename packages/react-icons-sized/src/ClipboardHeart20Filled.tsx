import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.09 3c.2-.58.76-1 1.41-1h3c.65 0 1.2.42 1.41 1h1.59c.83 0 1.5.67 1.5 1.5V9c-.7.03-1.4.25-2 .66a3.85 3.85 0 00-4.87 5.91L11.55 18H5.5A1.5 1.5 0 014 16.5v-12C4 3.67 4.67 3 5.5 3h1.59zM8.5 3a.5.5 0 000 1h3a.5.5 0 000-1h-3zm5.15 15.68a.5.5 0 00.7 0l3.82-3.81a2.85 2.85 0 10-4.03-4.04l-.14.14-.13-.14a2.85 2.85 0 10-4.04 4.04l3.82 3.81z" fill={primaryFill} /></svg>;
}

const ClipboardHeart20Filled = wrapIcon(rawSvg({}), 'ClipboardHeart20Filled');
export default ClipboardHeart20Filled;
      