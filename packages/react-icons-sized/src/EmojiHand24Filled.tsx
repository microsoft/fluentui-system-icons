import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 7.5V1.75a.75.75 0 011.5 0V7.5a.5.5 0 101 0v-5a.75.75 0 011.5 0v5.81A4.4 4.4 0 0113 8c.5 0 .93.12 1.24.28.16.08.3.17.42.28l.19.21c.05.07.15.24.15.48 0 .26-.13.5-.35.64l-1.9 1.19-1.67 1.89-1.37 1.9A2.75 2.75 0 017.48 16H6.34c-.93 0-1.82-.47-2.3-1.31a20.7 20.7 0 01-.98-1.9 5.58 5.58 0 01-.56-2.04v-7a.75.75 0 011.5 0V8a.5.5 0 001 0V2.5a.75.75 0 011.5 0v5a.5.5 0 101 0z" fill={primaryFill} /><path d="M15 22a7 7 0 01-6.73-5.08c.9-.2 1.7-.71 2.25-1.47l1.35-1.86 1.53-1.74 1.78-1.12c.5-.32.82-.88.82-1.48a1.86 1.86 0 00-.47-1.23A7 7 0 0115 22zm3-8a1 1 0 10-2 0 1 1 0 002 0zm-5.86 2.71c-.3.29-.31.76-.02 1.06a3.99 3.99 0 005.76 0 .75.75 0 10-1.08-1.04 2.5 2.5 0 01-3.6 0 .75.75 0 00-1.06-.02zM14 14a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const EmojiHand24Filled = wrapIcon(rawSvg({}), 'EmojiHand24Filled');
export default EmojiHand24Filled;
      