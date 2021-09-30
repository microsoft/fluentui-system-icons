import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.36 5.35a1.62 1.62 0 112.3 2.3 1.62 1.62 0 01-2.3-2.3zm1.59.7a.62.62 0 00-.88 0 .62.62 0 000 .88c.25.25.64.25.88 0a.62.62 0 000-.87z" fill={primaryFill} /><path d="M7.5 11l.17.17c.39.4.94.52 1.44.4l.85.84c.2.2.51.2.7 0l1.08-1.07c.66-.66.75-1.66.3-2.41l.54-.55a4.84 4.84 0 001.2-4.88c-.2-.6-.67-1.08-1.27-1.27a4.84 4.84 0 00-4.88 1.2l-.55.54a1.97 1.97 0 00-2.41.3L3.6 5.34a.5.5 0 000 .7l.85.86c-.13.5 0 1.05.39 1.44L5 8.5l-.77.46a.5.5 0 00-.1.78l2.13 2.12a.5.5 0 00.78-.1L7.5 11zm5.32-7.2a3.84 3.84 0 01-.94 3.87l-2.8 2.8a.5.5 0 01-.7 0l-.62-.62-1.6-1.6-.62-.62a.5.5 0 010-.7l2.8-2.8a3.84 3.84 0 013.87-.95c.29.1.52.33.61.62z" fill={primaryFill} /><path d="M4.85 11.87a.5.5 0 10-.7-.71l-1.33 1.32a.5.5 0 10.7.7l1.33-1.31z" fill={primaryFill} /><path d="M3.79 10.1c.2.2.2.5 0 .7l-.53.53a.5.5 0 11-.7-.7l.52-.53c.2-.2.51-.2.7 0z" fill={primaryFill} /><path d="M5.91 12.93a.5.5 0 10-.7-.71l-.54.53a.5.5 0 10.71.7l.53-.52z" fill={primaryFill} /></svg>;
}

const Rocket16Filled = wrapIcon(rawSvg({}), 'Rocket16Filled');
export default Rocket16Filled;
      