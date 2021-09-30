import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zM6.25 7.5a.75.75 0 100-1.5.75.75 0 000 1.5zm3.5 0a.75.75 0 100-1.5.75.75 0 000 1.5zm.12 3.32a.5.5 0 10.76-.64 3.53 3.53 0 00-5.26 0 .5.5 0 10.76.64 2.53 2.53 0 013.74 0z" fill={primaryFill} /></svg>;
}

const EmojiSad16Filled = wrapIcon(rawSvg({}), 'EmojiSad16Filled');
export default EmojiSad16Filled;
      