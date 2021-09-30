import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm-1.65-1.35a.5.5 0 00-.7 0L8 3.79l-.65-.64a.5.5 0 10-.7.7l1 1c.2.2.5.2.7 0l2-2a.5.5 0 000-.7z" fill={primaryFill} /><path d="M8.5 8c.92 0 1.77-.28 2.48-.75A2 2 0 019 9H6.65l-2.87 1.92A.5.5 0 013 10.5V9a2 2 0 01-2-2V3c0-1.1.9-2 2-2h1.76A4.5 4.5 0 008.5 8z" fill={primaryFill} /></svg>;
}

const CommentCheckmark12Filled = wrapIcon(rawSvg({}), 'CommentCheckmark12Filled');
export default CommentCheckmark12Filled;
      