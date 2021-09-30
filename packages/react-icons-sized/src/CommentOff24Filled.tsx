import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l.7.7A3.24 3.24 0 002 6.25v8.5C2 16.55 3.46 18 5.25 18H6v3a1 1 0 001.58.82L12.96 18h3.98l3.78 3.78a.75.75 0 001.06-1.06L3.28 2.22z" fill={primaryFill} /><path d="M22 14.75c0 1.1-.55 2.08-1.4 2.67L6.18 3h12.57C20.55 3 22 4.46 22 6.25v8.5z" fill={primaryFill} /></svg>;
}

const CommentOff24Filled = wrapIcon(rawSvg({}), 'CommentOff24Filled');
export default CommentOff24Filled;
      