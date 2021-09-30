import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4h15.5C20.99 4 22 5 22 6.25v11.5c0 1.24-1 2.25-2.25 2.25H4.25C3.01 20 2 19 2 17.75V6.25C2 5.01 3 4 4.25 4zm5.03 4.22a.75.75 0 00-1.06 1.06L10.94 12l-2.72 2.72a.75.75 0 001.06 1.06L12 13.06l2.72 2.72a.75.75 0 101.06-1.06L13.06 12l2.72-2.72a.75.75 0 10-1.06-1.06L12 10.94 9.28 8.22z" fill={primaryFill} /></svg>;
}

const ShareScreenStop24Filled = wrapIcon(rawSvg({}), 'ShareScreenStop24Filled');
export default ShareScreenStop24Filled;
      