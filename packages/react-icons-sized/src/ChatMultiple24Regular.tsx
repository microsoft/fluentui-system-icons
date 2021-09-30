import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.56 3a7.5 7.5 0 00-6.8 10.67l-.72 2.84c-.23.92.59 1.75 1.5 1.53l2.93-.7A7.5 7.5 0 109.56 3zm-6 7.5a6 6 0 113.33 5.37l-.24-.12-.27.07-2.78.66.69-2.7.07-.28-.13-.25a5.97 5.97 0 01-.67-2.75zm11 10.5a7.47 7.47 0 01-5.1-2 8.28 8.28 0 002.18-.26 5.97 5.97 0 005.6.13l.24-.12.26.07c.92.22 1.96.44 2.74.6-.18-.74-.41-1.75-.64-2.64l-.07-.28.13-.25a5.97 5.97 0 00-2.09-7.8 8.44 8.44 0 00-.8-2.04 7.5 7.5 0 014.35 10.26l.67 2.8c.2.9-.57 1.7-1.47 1.5-.72-.15-1.87-.39-2.91-.63-.94.42-1.99.66-3.09.66z" fill={primaryFill} /></svg>;
}

const ChatMultiple24Regular = wrapIcon(rawSvg({}), 'ChatMultiple24Regular');
export default ChatMultiple24Regular;
      