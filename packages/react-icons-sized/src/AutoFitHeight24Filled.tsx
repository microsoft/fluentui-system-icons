import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a1 1 0 000 2h12a1 1 0 100-2H6z" fill={primaryFill} /><path d="M10.35 13.7l.1.09.8.8V9.4l-.8.8-.1.09a1 1 0 01-1.4-1.4l.09-.1 2.35-2.36c.18-.27.5-.44.86-.44.32 0 .62.14.8.37h.01l.05.07 2.36 2.36.08.1a1 1 0 01.01 1.18v.01l-.1.12-.1.09h-.01a1 1 0 01-1.18.01l-.12-.1-.8-.8v5.18l.8-.8a1 1 0 011.3-.1v.01l.1.09h.01a1 1 0 01.1 1.3v.01l-.1.1-2.35 2.36c-.18.27-.5.44-.86.44-.35 0-.68-.17-.86-.44L9.04 15.2a1 1 0 011.3-1.51h.01z" fill={primaryFill} /><path d="M5 20a1 1 0 011-1h12a1 1 0 110 2H6a1 1 0 01-1-1z" fill={primaryFill} /></svg>;
}

const AutoFitHeight24Filled = wrapIcon(rawSvg({}), 'AutoFitHeight24Filled');
export default AutoFitHeight24Filled;
      