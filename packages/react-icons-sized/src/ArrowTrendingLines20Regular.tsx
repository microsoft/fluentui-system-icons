import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 2a.5.5 0 000 1h1.8l-4.8 4.8-2.65-2.65a.5.5 0 00-.7 0l-5 5a.5.5 0 00.7.7L8.5 6.21l2.65 2.64c.2.2.5.2.7 0L17 3.71V5.5a.5.5 0 001 0v-3a.5.5 0 00-.5-.5h-3zm1 7a.5.5 0 00-.5.5v8a.5.5 0 001 0v-8a.5.5 0 00-.5-.5zm-8 2a.5.5 0 00-.5.5v6a.5.5 0 001 0v-6a.5.5 0 00-.5-.5zm3.5 2.5a.5.5 0 011 0v4a.5.5 0 01-1 0v-4zm-8 1a.5.5 0 011 0v3a.5.5 0 01-1 0v-3z" fill={primaryFill} /></svg>;
}

const ArrowTrendingLines20Regular = wrapIcon(rawSvg({}), 'ArrowTrendingLines20Regular');
export default ArrowTrendingLines20Regular;
      