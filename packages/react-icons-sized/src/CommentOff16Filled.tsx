import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.3 12l2.85 2.85a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7l.73.74A2.5 2.5 0 001 4.5v5A2.5 2.5 0 003.5 12H4v1.94c0 .84 1 1.3 1.63.74L8.69 12h2.6z" fill={primaryFill} /><path d="M15 9.5c0 .92-.5 1.72-1.23 2.15L4.12 2h8.38A2.5 2.5 0 0115 4.5v5z" fill={primaryFill} /></svg>;
}

const CommentOff16Filled = wrapIcon(rawSvg({}), 'CommentOff16Filled');
export default CommentOff16Filled;
      