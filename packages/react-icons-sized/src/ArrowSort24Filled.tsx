import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.29 4.3l-4 4-.08.09a1 1 0 00.08 1.32l.1.08a1 1 0 001.32-.08L6 7.4v11.7a1 1 0 001 .9l.1-.02a1 1 0 00.9-.99V7.42l2.28 2.29.1.08a1 1 0 001.32-1.5l-4-4-.1-.08a1 1 0 00-1.32.08zM17 4l-.12.01a1 1 0 00-.88 1v11.57l-2.3-2.29-.09-.08a1 1 0 00-1.32 1.5l4 4 .1.08a1 1 0 001.32-.08l4-4 .08-.1a1 1 0 00-.08-1.32l-.1-.08a1 1 0 00-1.32.08L18 16.6V4.89A1 1 0 0017 4z" fill={primaryFill} /></svg>;
}

const ArrowSort24Filled = wrapIcon(rawSvg({}), 'ArrowSort24Filled');
export default ArrowSort24Filled;
      