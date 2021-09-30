import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v8.5C2 15.99 3 17 4.25 17h.25V8.75c0-1.8 1.46-3.25 3.25-3.25H19v-.25C19 4.01 18 3 16.75 3H5.25z" fill={primaryFill} /><path d="M7.75 6.5c-1.24 0-2.25 1-2.25 2.25v9.5c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-9.5c0-1.24-1-2.25-2.25-2.25h-12z" fill={primaryFill} /></svg>;
}

const SlideMultiple24Filled = wrapIcon(rawSvg({}), 'SlideMultiple24Filled');
export default SlideMultiple24Filled;
      