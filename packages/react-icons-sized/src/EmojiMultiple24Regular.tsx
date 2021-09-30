import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 2a6.5 6.5 0 016.31 4.94c-.51.01-1.02.07-1.5.17a5 5 0 10-6.2 6.2c-.1.48-.16.99-.17 1.5A6.5 6.5 0 018.5 2zm.16 8c.36-.45.76-.86 1.2-1.22a3.5 3.5 0 00-4.02.95.75.75 0 101.14.97 2 2 0 011.68-.7zM7.5 6.5a1 1 0 11-2 0 1 1 0 012 0zm4 0a1 1 0 11-2 0 1 1 0 012 0zm1 8a1 1 0 100-2 1 1 0 000 2zm5.46 2.04c.31.27.35.74.08 1.06a4 4 0 01-6.08 0 .75.75 0 011.14-.97 2.5 2.5 0 003.8 0 .75.75 0 011.06-.09zm-.46-2.04a1 1 0 100-2 1 1 0 000 2zM15 22a7 7 0 100-14 7 7 0 000 14zm0-1.5a5.5 5.5 0 110-11 5.5 5.5 0 010 11z" fill={primaryFill} /></svg>;
}

const EmojiMultiple24Regular = wrapIcon(rawSvg({}), 'EmojiMultiple24Regular');
export default EmojiMultiple24Regular;
      