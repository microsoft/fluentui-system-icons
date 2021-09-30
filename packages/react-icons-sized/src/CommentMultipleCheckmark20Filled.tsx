import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 2a2.5 2.5 0 00-2.46 2.03C4.2 4 4.34 4 4.5 4h8A3.5 3.5 0 0116 7.5v1.7c.74.22 1.42.58 2 1.06V6a4 4 0 00-4-4H6.5zM15 7.5v1.52A5.5 5.5 0 009.2 16h-.04l-2.58 1.84A1 1 0 015 17.03V16h-.5A2.5 2.5 0 012 13.5v-6A2.5 2.5 0 014.5 5h8A2.5 2.5 0 0115 7.5zm4 7a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-2.15-1.85c.2.2.2.5 0 .7l-3 3a.5.5 0 01-.7 0l-1-1a.5.5 0 01.7-.7l.65.64 2.65-2.64c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const CommentMultipleCheckmark20Filled = wrapIcon(rawSvg({}), 'CommentMultipleCheckmark20Filled');
export default CommentMultipleCheckmark20Filled;
      