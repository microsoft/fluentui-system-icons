import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.5 8.08a.5.5 0 11-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 11-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58zm5.5 0a.5.5 0 01-1-.16c.13-.83.9-1.42 1.75-1.42s1.61.59 1.74 1.42a.5.5 0 01-.99.16c-.04-.3-.34-.58-.75-.58-.42 0-.71.28-.76.58zM5.5 10.5h9c-.22 2.2-1.93 4-4.5 4a4.36 4.36 0 01-4.5-4z" fill={primaryFill} /></svg>;
}

const EmojiLaugh20Filled = wrapIcon(rawSvg({}), 'EmojiLaugh20Filled');
export default EmojiLaugh20Filled;
      