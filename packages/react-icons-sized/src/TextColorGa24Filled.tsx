import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.5 3.25a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0V8H17a.75.75 0 000-1.5h-1.5V3.25zm-8.75.25a.75.75 0 100 1.5H11a6 6 0 01-4.47 5.03.75.75 0 00.44 1.44c4.39-1.32 5.72-5.15 5.53-7.29a.75.75 0 00-.75-.68h-5zM20 16.75c0-1.24-1-2.25-2.25-2.25H5.25c-1.24 0-2.25 1-2.25 2.25v3C3 20.99 4 22 5.25 22h12.5c1.24 0 2.25-1 2.25-2.25v-3z" fill={primaryFill} /></svg>;
}

const TextColorGa24Filled = wrapIcon(rawSvg({}), 'TextColorGa24Filled');
export default TextColorGa24Filled;
      