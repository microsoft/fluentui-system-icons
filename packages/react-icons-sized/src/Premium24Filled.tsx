import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3a1 1 0 01.83.44l.06.11 3 6a1 1 0 01-.06 1.01l-.09.1-8.97 9.98a.99.99 0 01-.89.35l-.1-.02a.98.98 0 01-.54-.32l-8.98-9.98a1 1 0 01-.2-1l.05-.12 3-6a1 1 0 01.77-.54L6 3h12zm-3.42 8H9.42L12 17.34 14.58 11zm4.17 0h-2.02l-1.66 4.09L18.75 11zM7.26 11H5.25l3.67 4.09L7.26 11zm1.36-6h-2l-2 4h2.7l1.3-4zm4.65 0h-2.54l-1.3 4h5.14l-1.3-4zm4.11 0h-2l1.3 4h2.7l-2-4z" fill={primaryFill} /></svg>;
}

const Premium24Filled = wrapIcon(rawSvg({}), 'Premium24Filled');
export default Premium24Filled;
      