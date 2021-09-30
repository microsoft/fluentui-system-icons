import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 13h.25a4.5 4.5 0 01-.14-2.5A3.47 3.47 0 014.4 9.33a.5.5 0 01.75-.66 2.5 2.5 0 002.35.78 4.5 4.5 0 015.5-2.2L13 7a6 6 0 10-6 6zM5.25 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zm3.5 0a.75.75 0 110-1.5.75.75 0 010 1.5z" fill={primaryFill} /><path d="M15 11.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-3-2a.5.5 0 00-1 0V11H9.5a.5.5 0 000 1H11v1.5a.5.5 0 001 0V12h1.5a.5.5 0 000-1H12V9.5z" fill={primaryFill} /></svg>;
}

const EmojiAdd16Filled = wrapIcon(rawSvg({}), 'EmojiAdd16Filled');
export default EmojiAdd16Filled;
      