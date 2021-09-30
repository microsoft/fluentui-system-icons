import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 17.5a.75.75 0 01-.66-1.1L10.1 4.9a.75.75 0 011.41.35v11.5c0 .41-.34.75-.75.75H4.5z" fill={primaryFill} /><path d="M19.5 17.5a.75.75 0 00.66-1.1L13.9 4.9a.75.75 0 00-1.41.35v11.5c0 .41.34.75.75.75h6.25zm-5-2v-5.33l2.9 5.33h-2.9z" fill={primaryFill} /></svg>;
}

const FlipHorizontal24Filled = wrapIcon(rawSvg({}), 'FlipHorizontal24Filled');
export default FlipHorizontal24Filled;
      