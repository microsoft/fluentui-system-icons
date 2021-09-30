import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2a5 5 0 014.9 4.03c-.33.03-.66.08-.98.16a4 4 0 10-4.73 4.73c-.08.32-.13.65-.16.99A5 5 0 017 2zm.7 6.12c.24-.26.5-.5.78-.73a3 3 0 00-3.76.66.5.5 0 10.76.65 2 2 0 012.21-.58zM6.24 5.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm1.25 6.75a.75.75 0 100-1.5.75.75 0 000 1.5zm4.6 1.82c.21.18.24.5.06.7a3.5 3.5 0 01-5.32.01.5.5 0 11.76-.65 2.5 2.5 0 003.8 0 .5.5 0 01.7-.06zm-.6-1.82a.75.75 0 100-1.5.75.75 0 000 1.5zm-2 5.75a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-1a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" fill={primaryFill} /></svg>;
}

const EmojiMultiple20Regular = wrapIcon(rawSvg({}), 'EmojiMultiple20Regular');
export default EmojiMultiple20Regular;
      