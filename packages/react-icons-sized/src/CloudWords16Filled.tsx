import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 3c-1.4 0-2.42.57-3.07 1.37a4.2 4.2 0 00-.9 2.15C1.97 6.73 1 8.32 1 9.5c0 .57.14 1.33.69 1.95.55.64 1.46 1.05 2.81 1.05h7c1.07 0 1.96-.26 2.58-.8A2.8 2.8 0 0015 9.5c0-.94-.47-1.7-1.13-2.22a3.86 3.86 0 00-1.9-.75 3.73 3.73 0 00-1.34-2.6A4.23 4.23 0 008 3zM6.5 6h3a.5.5 0 010 1h-3a.5.5 0 010-1zM4 9.5c0-.28.22-.5.5-.5h2a.5.5 0 010 1h-2a.5.5 0 01-.5-.5zM9.5 9h2a.5.5 0 010 1h-2a.5.5 0 010-1z" fill={primaryFill} /></svg>;
}

const CloudWords16Filled = wrapIcon(rawSvg({}), 'CloudWords16Filled');
export default CloudWords16Filled;
      