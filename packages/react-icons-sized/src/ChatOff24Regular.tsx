import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l2.2 2.2a9.96 9.96 0 00-1.3 11.11l-1.07 3.83a1.25 1.25 0 001.54 1.54l3.82-1.07a9.96 9.96 0 0011.11-1.3l2.2 2.19a.75.75 0 001.06-1.06L3.28 2.22zm14.18 16.3a8.47 8.47 0 01-9.6.91l-.26-.15-3.99 1.11 1.11-3.98-.15-.27a8.46 8.46 0 01.91-9.6l3 3A.75.75 0 008.76 11h1.19l2 2H8.65a.75.75 0 00.1 1.5h4.6l.07-.02 4.04 4.04z" fill={primaryFill} /><path d="M15.25 9.5h-2.57l1.5 1.5H15.35a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M20.5 12c0 1.53-.4 2.97-1.11 4.2l1.1 1.1A10 10 0 006.7 3.52l1.08 1.1A8.5 8.5 0 0120.5 12z" fill={primaryFill} /></svg>;
}

const ChatOff24Regular = wrapIcon(rawSvg({}), 'ChatOff24Regular');
export default ChatOff24Regular;
      