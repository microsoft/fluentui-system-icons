import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zM18 7v2.5a.5.5 0 11-1 0V7h-2.5a.5.5 0 010-1H17V3.5a.5.5 0 011 0V6h2.5a.5.5 0 010 1H18zm-.5 6c.52 0 1.02-.06 1.5-.17V15a2 2 0 01-2 2h-2a1 1 0 01-1-1v-4.02A6.47 6.47 0 0017.5 13zM12.02 3c-.3.48-.55 1-.72 1.54A5.5 5.5 0 006.5 10v1H9a1 1 0 011 1v4a1 1 0 01-1 1H7a2 2 0 01-.5-.06v.31c0 1.2.93 2.17 2.1 2.24l.15.01h1.13a2.25 2.25 0 110 1.5H8.75c-2 0-3.64-1.57-3.74-3.55l-.01-.2V10a7 7 0 017-7h.02z" fill={primaryFill} /></svg>;
}

const HeadsetAdd24Filled = wrapIcon(rawSvg({}), 'HeadsetAdd24Filled');
export default HeadsetAdd24Filled;
      