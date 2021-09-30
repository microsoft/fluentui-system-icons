import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.25 7.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zm.67 9.24l-.17.01h-1a.75.75 0 000 1.5h1c.97 0 1.75.78 1.75 1.75V21a.75.75 0 001.5 0v-.75c0-1-.46-1.9-1.17-2.5.71-.6 1.17-1.5 1.17-2.5v-9C20 4.45 18.54 3 16.75 3h-9.5A3.25 3.25 0 004 6.25v9c0 1 .46 1.9 1.17 2.5-.71.6-1.17 1.5-1.17 2.5V21a.75.75 0 001.5 0v-.75c0-.97.78-1.75 1.75-1.75h1a.75.75 0 000-1.5H7.08l4.4-4.3a.75.75 0 011.04 0l4.4 4.3zM7.25 4.5h9.5c.97 0 1.75.78 1.75 1.75v9c0 .34-.1.66-.27.93l-4.66-4.55a2.25 2.25 0 00-3.14 0l-4.66 4.55a1.74 1.74 0 01-.27-.93v-9c0-.97.78-1.75 1.75-1.75zm4 12.5a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5h-1.5z" fill={primaryFill} /></svg>;
}

const ImageReflection24Regular = wrapIcon(rawSvg({}), 'ImageReflection24Regular');
export default ImageReflection24Regular;
      