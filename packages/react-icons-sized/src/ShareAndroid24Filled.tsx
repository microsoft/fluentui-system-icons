import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 3a3 3 0 11-2.15 5.1L9.4 11.2a3 3 0 010 1.58l5.46 3.12A2.99 2.99 0 0120 18a3 3 0 11-5.9-.79L8.66 14.1A2.99 2.99 0 013.5 12a3 3 0 015.15-2.1L14.1 6.8A3 3 0 0117 3z" fill={primaryFill} /></svg>;
}

const ShareAndroid24Filled = wrapIcon(rawSvg({}), 'ShareAndroid24Filled');
export default ShareAndroid24Filled;
      