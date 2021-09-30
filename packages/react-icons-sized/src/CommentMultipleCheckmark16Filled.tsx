import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 1a2.5 2.5 0 00-2.45 2H10a3 3 0 012.97 2.59c.81.4 1.51 1 2.03 1.75V4a3 3 0 00-3-3H5.5zM10 4a2 2 0 011.81 1.16 5.51 5.51 0 00-5.73 8.61l-1.5 1.07A1 1 0 013 14.03V13a2 2 0 01-2-2V6c0-1.1.9-2 2-2h7zm5 6.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark16Filled = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark16Filled');
export default CommentMultipleCheckmark16Filled;
      