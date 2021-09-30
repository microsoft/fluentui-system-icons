import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19.75 2C20.99 2 22 3 22 4.25v5.46c0 .86-.34 1.69-.95 2.3l-.03.03A6.5 6.5 0 0012 20.96c-1.25.8-2.94.65-4.04-.45L3.5 16.06a3.25 3.25 0 010-4.6l8.5-8.5a3.25 3.25 0 012.3-.96h5.46zM17 5.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 12a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-7.15-2.35a.5.5 0 00-.7.7l1.64 1.65-1.64 1.65a.5.5 0 00.7.7l1.65-1.64 1.65 1.64a.5.5 0 00.7-.7l-1.64-1.65 1.64-1.65a.5.5 0 00-.7-.7l-1.65 1.64-1.65-1.64z" fill={primaryFill} /></svg>;
}

const TagDismiss24Filled = wrapIcon(rawSvg({}), 'TagDismiss24Filled');
export default TagDismiss24Filled;
      