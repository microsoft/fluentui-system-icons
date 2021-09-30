import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 8.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M15 8.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /><path d="M8.25 15a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /><path d="M2 12a10 10 0 1120 0 10 10 0 01-20 0zm10-8.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17z" fill={primaryFill} /></svg>;
}

const EmojiMeh24Regular = wrapIcon(rawSvg({}), 'EmojiMeh24Regular');
export default EmojiMeh24Regular;
      