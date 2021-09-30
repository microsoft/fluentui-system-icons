import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.63 7.05a5.9 5.9 0 014.61-2.1 7 7 0 015 2.56L23.62 14H15a1 1 0 100 2h11a1 1 0 001-1V4a1 1 0 10-2 0v8.54L19.76 6.2l-.01-.01a9 9 0 00-6.45-3.25 7.9 7.9 0 00-6.17 2.77 8.41 8.41 0 00.01 11.2l5.58 5.83 5.44 5.63.32.32a1 1 0 101.43-1.4L19.6 27l-5.43-5.62-5.56-5.82a6.42 6.42 0 01.02-8.5z" fill={primaryFill} /></svg>;
}

const ArrowRedo32Regular = wrapIcon(rawSvg({}), 'ArrowRedo32Regular');
export default ArrowRedo32Regular;
      