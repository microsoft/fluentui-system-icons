import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 11a1 1 0 01.99.88V18a4 4 0 01-3.8 4H8a4 4 0 01-4-3.8V12a1 1 0 012-.12V18a2 2 0 001.85 2H16a2 2 0 001.99-1.85V12a1 1 0 011-1zM6.29 7.29l5-5a1 1 0 011.32-.08l.09.08 5 5a1 1 0 01-1.32 1.5l-.09-.09-3.3-3.28v9.83a1 1 0 01-.88 1H12a1 1 0 01-1-.88V5.41l-3.3 3.3a1 1 0 01-1.32.08l-.1-.09a1 1 0 01-.07-1.32l.08-.1 5-4.99-5 5z" fill={primaryFill} /></svg>;
}

const ShareIos24Filled = wrapIcon(rawSvg({}), 'ShareIos24Filled');
export default ShareIos24Filled;
      