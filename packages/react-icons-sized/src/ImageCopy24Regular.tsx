import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 6C3.6 6.59 3 7.6 3 8.76v6.5c0 2.9 2.35 5.25 5.25 5.25h6.5c1.15 0 2.17-.6 2.74-1.5H8.25a3.75 3.75 0 01-3.75-3.75v-9-.24zm4.25-3A3.25 3.25 0 005.5 6.25v8.5c0 1.8 1.46 3.25 3.25 3.25h8.5c1.8 0 3.25-1.46 3.25-3.25v-8.5c0-1.8-1.46-3.25-3.25-3.25h-8.5zm4.68 9.14l.1.07 4.3 4.2c-.18.06-.38.09-.58.09h-8.5c-.2 0-.4-.03-.58-.1l4.3-4.19a.75.75 0 01.96-.07zM8.75 4.5h8.5c.97 0 1.75.78 1.75 1.75v8.5c0 .2-.04.4-.1.6l-4.33-4.21a2.25 2.25 0 00-3-.12l-.14.12-4.33 4.2c-.06-.18-.1-.38-.1-.59v-8.5c0-.97.78-1.75 1.75-1.75zm1.75 2.25a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fill={primaryFill} /></svg>;
}

const ImageCopy24Regular = wrapIcon(rawSvg({}), 'ImageCopy24Regular');
export default ImageCopy24Regular;
      