import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 2.48a3.5 3.5 0 00-2.6 0l-5.76 2.3A1.5 1.5 0 002 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 002.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 00-.94-1.4l-5.76-2.3zm-2.23.93a2.5 2.5 0 011.86 0l5.22 2.09-2.27.91-6.16-2.46 1.35-.54zm-2.7 1.08l6.16 2.46L10 7.96 3.85 5.5l2.53-1.01zm4.13 4.35l6.5-2.6v7.58a.5.5 0 01-.31.47l-5.76 2.3c-.14.06-.28.1-.43.13V8.84zm-1 0v7.88a2.5 2.5 0 01-.43-.13l-5.76-2.3a.5.5 0 01-.31-.47V6.24l6.5 2.6z" fill={primaryFill} /></svg>;
}

const BoxRegular = wrapIcon(rawSvg({}), 'BoxRegular');
export default BoxRegular;
      