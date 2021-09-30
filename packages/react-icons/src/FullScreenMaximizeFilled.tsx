import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.25C3 4.01 4 3 5.25 3h1.87a.75.75 0 110 1.5H5.25a.75.75 0 00-.75.75v1.87a.75.75 0 11-1.5 0V5.25zm9.13-1.5c0-.41.34-.75.75-.75h1.87C15.99 3 17 4 17 5.25v1.87a.75.75 0 01-1.5 0V5.25a.75.75 0 00-.75-.75h-1.87a.75.75 0 01-.75-.75zm-8.38 8.38c.41 0 .75.34.75.75v1.87c0 .41.34.75.75.75h1.87a.75.75 0 010 1.5H5.25C4.01 17 3 16 3 14.75v-1.87c0-.41.34-.75.75-.75zm12.5 0c.41 0 .75.34.75.75v1.87c0 1.24-1 2.25-2.25 2.25h-1.87a.75.75 0 010-1.5h1.87c.41 0 .75-.34.75-.75v-1.87c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const FullScreenMaximizeFilled = wrapIcon(rawSvg({}), 'FullScreenMaximizeFilled');
export default FullScreenMaximizeFilled;
      