import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.75 5.5c-1.24 0-2.25 1-2.25 2.25v16.5c0 1.24 1 2.25 2.25 2.25h16.5c1.24 0 2.25-1 2.25-2.25v-5a1.25 1.25 0 112.5 0v5A4.75 4.75 0 0124.25 29H7.75A4.75 4.75 0 013 24.25V7.75A4.75 4.75 0 017.75 3h5a1.25 1.25 0 110 2.5h-5zM18 4.25c0-.69.56-1.25 1.25-1.25h8.5c.69 0 1.25.56 1.25 1.25v8.5a1.25 1.25 0 11-2.5 0V7.27l-6.37 6.36a1.25 1.25 0 11-1.76-1.76l6.36-6.37h-5.48c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const Open32Filled = wrapIcon(rawSvg({}), 'Open32Filled');
export default Open32Filled;
      