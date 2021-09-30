import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M22 12a10 10 0 10-18.86 4.65l-1.11 4.29a.85.85 0 001.04 1.04l4.29-1.12A10 10 0 0022 12zM12 8a2 2 0 012 2v4a2 2 0 01-2 2H9a2 2 0 01-2-2v-4c0-1.1.9-2 2-2h3zm3 5.16v-2.32l1.73-1.64a.75.75 0 011.27.54v4.52c0 .66-.79 1-1.27.54L15 13.16z" fill={primaryFill} /></svg>;
}

const ChatVideo24Filled = wrapIcon(rawSvg({}), 'ChatVideo24Filled');
export default ChatVideo24Filled;
      