import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zM12 2a10 10 0 019.97 10.78 6.5 6.5 0 00-10.88 3.63 4.49 4.49 0 01-2.63-1.63.75.75 0 10-1.18.93 6 6 0 003.73 2.21c.1 1.57.76 2.98 1.77 4.05A10.02 10.02 0 012 12 10 10 0 0112 2zm5.5 12h-.09a.5.5 0 00-.4.4l-.01.1V17h-2.6a.5.5 0 00-.4.41v.18c.04.2.2.36.4.4l.1.01H17v2.6c.05.2.2.36.41.4h.18a.5.5 0 00.4-.4l.01-.1V18h2.6a.5.5 0 00.4-.41v-.18a.5.5 0 00-.4-.4l-.1-.01H18v-2.6a.5.5 0 00-.41-.4h-.09zM9 8.75a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5zm6 0a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const EmojiAdd24Filled = wrapIcon(rawSvg({}), 'EmojiAdd24Filled');
export default EmojiAdd24Filled;
      