import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 18a1 1 0 001-1V5.41l1.3 1.3a1 1 0 001.31.08l.1-.08a1 1 0 00.08-1.32l-.08-.1-3-3a1 1 0 00-1.32-.08l-.1.08-3 3a1 1 0 001.32 1.5l.1-.08 1.29-1.3V17a1 1 0 001 1zm10.5 0a1 1 0 001-1V5.42l1.3 1.29a1 1 0 001.31.08l.1-.08a1 1 0 00.08-1.32l-.09-.1-3-3a1 1 0 00-1.32-.08l-.09.08-3 3a1 1 0 001.32 1.5l.1-.08 1.29-1.3V17a1 1 0 001 1zm-10.5 4a4.75 4.75 0 002-9.06v1.75a3.24 3.24 0 11-4 0v-1.75a4.75 4.75 0 002 9.06zm10.5 0a4.75 4.75 0 002-9.06v1.75a3.24 3.24 0 11-4 0v-1.75a4.75 4.75 0 002 9.06z" fill={primaryFill} /></svg>;
}

const DoubleSwipeUp24Filled = wrapIcon(rawSvg({}), 'DoubleSwipeUp24Filled');
export default DoubleSwipeUp24Filled;
      