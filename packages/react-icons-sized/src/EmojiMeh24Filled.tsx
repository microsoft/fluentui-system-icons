import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.75 8a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm6 0a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM7.5 15.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const EmojiMeh24Filled = wrapIcon(rawSvg({}), 'EmojiMeh24Filled');
export default EmojiMeh24Filled;
      