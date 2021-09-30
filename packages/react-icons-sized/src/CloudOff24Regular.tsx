import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l4.57 4.57a5.7 5.7 0 00-.7 1.9H6a4 4 0 000 8h10.69l4.03 4.03a.75.75 0 001.06-1.06L3.28 2.22zm11.9 14.03H6a2.5 2.5 0 010-5h.76c.4 0 .73-.31.75-.71.02-.57.16-1.1.39-1.58l7.29 7.29zm4.82-2.5a2.5 2.5 0 01-1.04 2.03l1.07 1.07a4 4 0 00-2.53-7.1h-.09a5.75 5.75 0 00-8.49-4l1.12 1.1a4.24 4.24 0 015.95 3.69c.02.4.35.71.75.71h.76a2.5 2.5 0 012.5 2.5z" fill={primaryFill} /></svg>;
}

const CloudOff24Regular = wrapIcon(rawSvg({}), 'CloudOff24Regular');
export default CloudOff24Regular;
      