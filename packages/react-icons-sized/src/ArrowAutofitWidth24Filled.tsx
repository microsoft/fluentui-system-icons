import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 4A2.5 2.5 0 0120 6.5v4a1 1 0 11-2 0v-4a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v4a1 1 0 11-2 0v-4A2.5 2.5 0 016.5 4h11z" fill={primaryFill} /><path d="M18.2 13.04l-.1-.09a1 1 0 00-1.4 1.4l.09.1.8.8H14.29l-.01.01c-.47.07-.78.51-.78.99s.31.92.78.99l.12.01h3.19l-.8.8-.1.11v.01a1 1 0 000 1.18h.01l.1.11.1.1h.02a1 1 0 001.17 0l.01-.01.1-.08 2.36-2.36.07-.05c.23-.19.37-.49.37-.8 0-.37-.17-.69-.44-.87l-2.36-2.35z" fill={primaryFill} /><path d="M7.27 14.36l-.08.1-.8.8h3.18c.53 0 .9.47.9 1 0 .47-.31.91-.77.98h-.01l-.11.01h-3.2l.8.8a1 1 0 01.1 1.3l-.1.1v.01a1 1 0 01-1.3.1l-.1-.1-2.36-2.35c-.28-.17-.45-.5-.45-.86 0-.35.17-.68.45-.86l2.35-2.34a1 1 0 011.5 1.3z" fill={primaryFill} /></svg>;
}

const ArrowAutofitWidth24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitWidth24Filled');
export default ArrowAutofitWidth24Filled;
      