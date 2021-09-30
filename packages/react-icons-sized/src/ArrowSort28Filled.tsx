import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.35 4.01h.06L8.5 4h.08l.12.02.11.03.11.04.1.06.1.07.09.07 5.5 5.5a1 1 0 01-1.32 1.5l-.1-.08L9.5 7.4V23a1 1 0 01-2 .12V7.4l-3.8 3.8a1 1 0 01-1.31.08l-.1-.08a1 1 0 01-.08-1.32l.08-.1 5.5-5.5a1 1 0 01.11-.1l.12-.07.1-.05.11-.03.12-.03zM19.5 4a1 1 0 011 .88V20.6l3.8-3.8.09-.08a1 1 0 011.4 1.4l-.08.1-5.5 5.5-.05.04-.06.05-.12.08-.1.05-.11.03-.12.03h-.27l-.11-.02-.11-.03-.08-.03-.1-.06-.1-.06a1 1 0 01-.09-.08l-5.5-5.5-.08-.1a1 1 0 010-1.22l.08-.1.1-.08a1 1 0 011.22 0l.1.08 3.79 3.8V4.88a1 1 0 011-.88z" fill={primaryFill} /></svg>;
}

const ArrowSort28Filled = wrapIcon(rawSvg({}), 'ArrowSort28Filled');
export default ArrowSort28Filled;
      