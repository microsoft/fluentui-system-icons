import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20 11.5a1 1 0 011 .88V17a5.5 5.5 0 01-5.27 5.5H8.25a2.5 2.5 0 01-2.45-2.01h2.4l.05.01h7.25a3.5 3.5 0 003.5-3.3v-4.7a1 1 0 011-1zm-3-2.01a1 1 0 011 .88v6.62a2.5 2.5 0 01-2.34 2.5H5.5A2.5 2.5 0 013 17.15V10.5a1 1 0 012-.1v6.6c0 .24.18.45.4.49h10.1a.5.5 0 00.5-.4v-6.6a1 1 0 011-1zM6.3 5.79l3.49-3.5a1 1 0 011.32-.08l.1.08 3.5 3.5a1 1 0 01-1.32 1.5l-.1-.08-1.79-1.8v8.84a1 1 0 01-.88 1h-.12a1 1 0 01-1-.88V5.41l-1.8 1.8a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 3.5-3.5-3.5 3.5z" fill={primaryFill} /></svg>;
}

const SendCopy24Filled = wrapIcon(rawSvg({}), 'SendCopy24Filled');
export default SendCopy24Filled;
      