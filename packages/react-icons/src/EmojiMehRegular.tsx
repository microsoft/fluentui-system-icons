import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 9.5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /><path d="M13.5 8.5a1 1 0 11-2 0 1 1 0 012 0z" fill={primaryFill} /><path d="M6.5 12a.5.5 0 000 1h7a.5.5 0 000-1h-7z" fill={primaryFill} /><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-7a7 7 0 100 14 7 7 0 000-14z" fill={primaryFill} /></svg>;
}

const EmojiMehRegular = wrapIcon(rawSvg({}), 'EmojiMehRegular');
export default EmojiMehRegular;
      