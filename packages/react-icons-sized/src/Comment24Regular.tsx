import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 18A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h13.5C20.55 3 22 4.46 22 6.25v8.5c0 1.8-1.46 3.25-3.25 3.25h-5.74L8 21.75a1.25 1.25 0 01-2-1V18h-.75zm7.26-1.5h6.24c.97 0 1.75-.78 1.75-1.75v-8.5c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v8.5c0 .97.78 1.75 1.75 1.75H7.5v3.75l5.01-3.75z" fill={primaryFill} /></svg>;
}

const Comment24Regular = wrapIcon(rawSvg({}), 'Comment24Regular');
export default Comment24Regular;
      