import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 6.25C21 4.45 19.54 3 17.75 3H6.25A3.25 3.25 0 003 6.25v11.5C3 19.55 4.45 21 6.25 21h4.91l.36-1.42.02-.08H6.25c-.2 0-.4-.04-.58-.1l5.8-5.69.09-.07c.29-.2.7-.19.96.07l2.08 2.04 1.06-1.06-2.09-2.05-.13-.11a2.25 2.25 0 00-3.01.11l-5.83 5.7c-.06-.18-.1-.38-.1-.6V6.26c0-.97.78-1.75 1.75-1.75h11.5c.97 0 1.75.78 1.75 1.75v4.98c.48-.19 1-.26 1.5-.22V6.25zm-3.5 2.5a2.25 2.25 0 10-4.5 0 2.25 2.25 0 004.5 0zm-3 0a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm4.6 3.92l-5.9 5.9c-.35.34-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const ImageEdit24Regular = wrapIcon(rawSvg({}), 'ImageEdit24Regular');
export default ImageEdit24Regular;
      