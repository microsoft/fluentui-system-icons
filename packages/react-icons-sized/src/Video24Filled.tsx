import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 16.25c0 1.8-1.46 3.25-3.25 3.25h-7.5A3.25 3.25 0 012 16.25v-8.5C2 5.95 3.46 4.5 5.25 4.5h7.5c1.8 0 3.25 1.46 3.25 3.25v8.5zm5.76-10.36a1 1 0 01.24.65v10.92a1 1 0 01-1.65.76L17 15.37V8.63l3.35-2.85a1 1 0 011.41.11z" fill={primaryFill} /></svg>;
}

const Video24Filled = wrapIcon(rawSvg({}), 'Video24Filled');
export default Video24Filled;
      