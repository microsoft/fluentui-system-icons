import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 3A3.25 3.25 0 002 6.25v6c.7-.58 1.56-.99 2.5-1.16V8.75c0-1.8 1.46-3.25 3.25-3.25H19v-.25C19 4.01 18 3 16.75 3H5.25zm14.5 17.5h-7.78l-1.54-1.55A5.5 5.5 0 005.5 11V8.75c0-1.24 1-2.25 2.25-2.25h12c1.24 0 2.25 1 2.25 2.25v9.5c0 1.24-1 2.25-2.25 2.25zm-11.64-.33a4.5 4.5 0 111.06-1.06l2.61 2.61a.75.75 0 11-1.06 1.06l-2.61-2.61zM2.5 16.5a3 3 0 106 0 3 3 0 00-6 0z" fill={primaryFill} /></svg>;
}

const SlideMultipleSearch24Filled = wrapIcon(rawSvg({}), 'SlideMultipleSearch24Filled');
export default SlideMultipleSearch24Filled;
      