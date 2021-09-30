import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 5h19.5C24.99 5 26 6 26 7.25v13.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 23 2 22 2 20.75V7.25C2 6.01 3 5 4.25 5zm7.03 5.22a.75.75 0 00-1.06 1.06L12.94 14l-2.72 2.72a.75.75 0 001.06 1.06L14 15.06l2.72 2.72a.75.75 0 001.06-1.06L15.06 14l2.72-2.72a.75.75 0 00-1.06-1.06L14 12.94l-2.72-2.72z" fill={primaryFill} /></svg>;
}

const ShareScreenStop28Filled = wrapIcon(rawSvg({}), 'ShareScreenStop28Filled');
export default ShareScreenStop28Filled;
      