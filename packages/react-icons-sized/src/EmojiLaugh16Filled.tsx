import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zM6 6c.28 0 .5.22.5.5a.5.5 0 001 0 1.5 1.5 0 10-3 0 .5.5 0 001 0c0-.28.22-.5.5-.5zm4 0c.28 0 .5.22.5.5a.5.5 0 001 0 1.5 1.5 0 00-3 0 .5.5 0 001 0c0-.28.22-.5.5-.5zM4.54 8.5a3.5 3.5 0 006.92 0H4.54z" fill={primaryFill} /></svg>;
}

const EmojiLaugh16Filled = wrapIcon(rawSvg({}), 'EmojiLaugh16Filled');
export default EmojiLaugh16Filled;
      