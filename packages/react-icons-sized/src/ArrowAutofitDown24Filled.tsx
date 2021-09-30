import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.95 18.1l.09.1 2.35 2.36c.18.27.5.44.86.44.32 0 .62-.14.8-.37h.01l.05-.07 2.36-2.36.08-.1a1 1 0 00.01-1.18v-.01l-.1-.12-.1-.09h-.01a1 1 0 00-1.18-.01l-.12.1-.8.8V3.79l-.01-.01c-.07-.47-.51-.78-.99-.78s-.92.31-.99.78l-.01.12v13.69l-.8-.8-.1-.09a1 1 0 00-1.4 1.4zM4 17.5A2.5 2.5 0 006.5 20h4a1 1 0 100-2h-4a.5.5 0 01-.5-.5v-11c0-.27.22-.5.5-.5h6a1 1 0 100-2h-6A2.5 2.5 0 004 6.5v11z" fill={primaryFill} /></svg>;
}

const ArrowAutofitDown24Filled = wrapIcon(rawSvg({}), 'ArrowAutofitDown24Filled');
export default ArrowAutofitDown24Filled;
      