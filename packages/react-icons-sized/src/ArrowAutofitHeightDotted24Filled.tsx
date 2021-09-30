import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.2 3.3a1 1 0 00-1.4 0l-2.5 2.5a1 1 0 001.4 1.4l1.8-1.79 1.8 1.8a1 1 0 101.4-1.42l-2.5-2.5zM6.5 4A2.5 2.5 0 004 6.5v11A2.5 2.5 0 006.5 20h4a1 1 0 100-2h-4a.5.5 0 01-.5-.5v-11c0-.28.22-.5.5-.5h4a1 1 0 100-2h-4zm10.7 16.7l2.5-2.5a1 1 0 00-1.4-1.4l-1.8 1.79-1.8-1.8a1 1 0 00-1.4 1.42l2.5 2.5a1 1 0 001.4 0zm.3-8.7a1 1 0 10-2 0 1 1 0 002 0zm-1 2a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm0-7a1 1 0 00-1 1v1a1 1 0 102 0V8a1 1 0 00-1-1z" fill={primaryFill} /></svg>;
}

const ArrowAutofitHeightDotted24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitHeightDotted24Filled');
export default ArrowAutofitHeightDotted24Filled;
      