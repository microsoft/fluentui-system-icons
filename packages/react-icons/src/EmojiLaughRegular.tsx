import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 8.08c.04-.3.33-.58.75-.58.41 0 .7.28.75.58A.5.5 0 109 7.92 1.73 1.73 0 007.25 6.5c-.86 0-1.62.59-1.74 1.42a.5.5 0 10.98.16z" fill={primaryFill} /><path d="M12.75 7.5c-.42 0-.71.28-.76.58a.5.5 0 01-.98-.16c.12-.83.88-1.42 1.74-1.42.85 0 1.61.59 1.74 1.42a.5.5 0 01-.99.16c-.04-.3-.34-.58-.75-.58z" fill={primaryFill} /><path d="M5.5 10a.5.5 0 00-.5.55A4.86 4.86 0 0010 15c2.84 0 4.75-2 5-4.45a.5.5 0 00-.5-.55h-9zm4.5 4a3.85 3.85 0 01-3.92-3h7.83c-.4 1.7-1.83 3-3.91 3z" fill={primaryFill} /><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm-7 8a7 7 0 1114 0 7 7 0 01-14 0z" fill={primaryFill} /></svg>;
}

const EmojiLaughRegular = wrapIcon(rawSvg({}), 'EmojiLaughRegular');
export default EmojiLaughRegular;
      