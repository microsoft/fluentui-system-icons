import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 6.5A2.5 2.5 0 0017.5 4h-11A2.5 2.5 0 004 6.5v4a1 1 0 102 0v-4c0-.28.23-.5.5-.5h11c.28 0 .5.22.5.5v4a1 1 0 102 0v-4zm-1.8 13.2l2.5-2.5a1 1 0 000-1.4l-2.5-2.5a1 1 0 00-1.4 1.4l1.79 1.8-1.8 1.8a1 1 0 001.42 1.4zM3.3 15.8a1 1 0 000 1.4l2.5 2.5a1 1 0 001.4-1.4l-1.79-1.8 1.8-1.8a1 1 0 10-1.42-1.4l-2.5 2.5zm9.7.7a1 1 0 10-2 0 1 1 0 002 0zm-4-1a1 1 0 110 2H8a1 1 0 110-2h1zm8 1a1 1 0 00-1-1h-1a1 1 0 100 2h1a1 1 0 001-1z" fill={primaryFill} /></svg>;
}

const ArrowAutofitWidthDotted24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitWidthDotted24Filled');
export default ArrowAutofitWidthDotted24Filled;
      