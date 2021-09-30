import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 8a6 6 0 113 5.2l-2.34.77a.5.5 0 01-.64-.6l.71-2.5A5.98 5.98 0 012 8zm6.75 2.75a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm-.26-5.84A.5.5 0 007.5 5v3.59a.5.5 0 001-.09V4.91z" fill={primaryFill} /></svg>;
}

const ChatWarning16Filled = wrapIcon(rawSvg({}), 'ChatWarning16Filled');
export default ChatWarning16Filled;
      