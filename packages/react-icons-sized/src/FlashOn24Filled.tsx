import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.3 14l-1.77 7.07c-.19.74.73 1.25 1.27.7l12-12.5A.75.75 0 0019.24 8h-4.46l1.67-5.01a.75.75 0 00-.71-.99h-7a.75.75 0 00-.72.54l-3 10.5c-.14.48.22.96.72.96h2.54z" fill={primaryFill} /></svg>;
}

const FlashOn24Filled = wrapIcon(rawSvg({}), 'FlashOn24Filled');
export default FlashOn24Filled;
      