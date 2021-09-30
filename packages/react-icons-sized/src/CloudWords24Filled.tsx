import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 5a5.75 5.75 0 00-5.66 4.75H6a4 4 0 000 8h11.5a4 4 0 000-8h-.09A5.75 5.75 0 0011.75 5zm-2 4h4a.75.75 0 010 1.5h-4a.75.75 0 010-1.5zM5 13.75c0-.41.34-.75.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 01-.75-.75zm8.75-.75h4a.75.75 0 010 1.5h-4a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const CloudWords24Filled = wrapIcon(rawSvg({}), 'CloudWords24Filled');
export default CloudWords24Filled;
      