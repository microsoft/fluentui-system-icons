import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.86 12.9a4.98 4.98 0 005.25.63l2.3.46a.5.5 0 00.58-.59l-.46-2.29a4.98 4.98 0 00-.64-5.25 6.04 6.04 0 010 2.24 4.01 4.01 0 01-.33 2.72.5.5 0 00-.04.32l.34 1.72-1.72-.34a.5.5 0 00-.32.04 3.98 3.98 0 01-2.72.34 6.03 6.03 0 01-2.24 0zM7 2a5 5 0 00-4.53 7.11L2 11.41a.5.5 0 00.59.58l2.29-.46A4.98 4.98 0 0012 7a5 5 0 00-5-5z" fill={primaryFill} /></svg>;
}

const ChatMultiple16Filled = wrapIcon(rawSvg({}), 'ChatMultiple16Filled');
export default ChatMultiple16Filled;
      