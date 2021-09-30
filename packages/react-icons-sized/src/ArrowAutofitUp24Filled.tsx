import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.95 5.9l.09-.1 2.35-2.36c.18-.27.5-.44.86-.44.32 0 .62.14.8.37h.01l.05.07 2.36 2.36.08.1a1 1 0 01.01 1.18v.01l-.1.12-.1.09h-.01a1 1 0 01-1.18.01l-.12-.1-.8-.8V20.21l-.01.01c-.07.47-.51.78-.99.78s-.92-.31-.99-.78l-.01-.12V6.41l-.8.8-.1.09a1 1 0 01-1.4-1.4zM4 6.5A2.5 2.5 0 016.5 4h4a1 1 0 110 2h-4a.5.5 0 00-.5.5v11c0 .27.22.5.5.5h6a1 1 0 110 2h-6A2.5 2.5 0 014 17.5v-11z" fill={primaryFill} /></svg>;
}

const ArrowAutofitUp24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitUp24Filled');
export default ArrowAutofitUp24Filled;
      