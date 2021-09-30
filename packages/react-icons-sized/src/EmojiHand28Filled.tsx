import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 8.5V2.75a.75.75 0 011.5 0V8.5a.5.5 0 001 0v-5a.75.75 0 011.5 0v5.81A4.4 4.4 0 0114 9c.5 0 .93.12 1.24.28.16.08.3.17.42.28l.19.21c.05.07.15.24.15.48 0 .26-.13.5-.35.64l-1.9 1.19-1.67 1.89-1.37 1.9A2.75 2.75 0 018.48 17H7.34c-.93 0-1.82-.47-2.3-1.31a20.7 20.7 0 01-.98-1.9 5.58 5.58 0 01-.56-2.04v-7a.75.75 0 011.5 0V9a.5.5 0 001 0V3.5a.75.75 0 011.5 0v5a.5.5 0 101 0z" fill={primaryFill} /><path d="M17.5 26a8.5 8.5 0 01-8.49-8.04c1-.14 1.9-.68 2.5-1.5l1.36-1.87 1.53-1.74 1.78-1.12c.5-.32.82-.88.82-1.48a1.86 1.86 0 00-.44-1.2A8.5 8.5 0 1117.5 26zm3.63-10a1.12 1.12 0 10-2.25 0 1.12 1.12 0 002.25 0zm-7.36 3.67a.75.75 0 00-.09 1.06 5 5 0 007.64 0 .75.75 0 10-1.14-.97 3.5 3.5 0 01-5.35 0 .75.75 0 00-1.06-.1zM16.13 16a1.12 1.12 0 10-2.25 0 1.12 1.12 0 002.25 0z" fill={primaryFill} /></svg>;
}

const EmojiHand28Filled = wrapIcon(rawSvg({}), 'EmojiHand28Filled');
export default EmojiHand28Filled;
      