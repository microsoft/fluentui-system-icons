import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 2.08a1 1 0 011.32-.49c.26.14 0 0 0 0h.01l.02.02a4.9 4.9 0 01.3.16 12.27 12.27 0 013.11 2.5A10.75 10.75 0 0122 13.13a1 1 0 01-1.98-.26 8.75 8.75 0 00-2.13-7.27 10.27 10.27 0 00-2.8-2.19 1 1 0 01-.49-1.33zM9.92 4.63a1 1 0 00-1.86 0l-5.5 14a1 1 0 001.86.74L6.15 15h5.7l1.72 4.37a1 1 0 001.86-.74l-5.5-14zM11.07 13H6.93L9 7.73 11.07 13zm4.38-7.4a1 1 0 00-.9 1.8c.3.14.8.57 1.23 1.26.42.67.72 1.48.72 2.34a1 1 0 002 0c0-1.31-.45-2.5-1.03-3.41a5.57 5.57 0 00-2.02-1.98z" fill={primaryFill} /></svg>;
}

const ReadAloud24Filled = wrapIcon(rawSvg({}), 'ReadAloud24Filled');
export default ReadAloud24Filled;
      