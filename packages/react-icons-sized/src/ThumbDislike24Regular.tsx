import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 17.98c0 2.45-1.14 4.2-3 4.2-.98 0-1.35-.54-1.7-1.8l-.2-.76a268.88 268.88 0 00-.56-1.9l-2.87-4.49a5.89 5.89 0 00-2.85-2.32l-.47-.18a2.75 2.75 0 01-1.72-3.1l.4-2.08A3.25 3.25 0 015.95 3l7.63-1.87a4.75 4.75 0 015.73 3.44l1.42 5.55a3.25 3.25 0 01-3.15 4.05h-1.83c.5 1.64.75 2.9.75 3.8zM4.6 7.92c-.11.6.21 1.19.78 1.4l.47.19a7.39 7.39 0 013.59 2.92l2.86 4.48c.1.14.16.3.2.46l.56 1.92.21.79c.14.49.21.6.22.6.87 0 1.51-.98 1.51-2.7 0-.88-.33-2.33-.98-4.31a.75.75 0 01.7-.99h2.86a1.75 1.75 0 001.7-2.18l-1.42-5.55a3.25 3.25 0 00-3.93-2.35L6.31 4.47c-.67.16-1.17.7-1.3 1.36l-.4 2.09z" fill={primaryFill} /></svg>;
}

const ThumbDislike24Regular = wrapIcon(rawSvg({}), 'ThumbDislike24Regular');
export default ThumbDislike24Regular;
      