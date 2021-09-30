import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-1.5a1 1 0 10-2 0 1 1 0 002 0zm4 1a1 1 0 100-2 1 1 0 000 2zm-6.5 3c0 .28.22.5.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const EmojiMeh20Filled = wrapIcon(rawSvg({}), 'EmojiMeh20Filled');
export default EmojiMeh20Filled;
      