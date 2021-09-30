import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 3a4 4 0 100 8H13v6.5a.5.5 0 001 0V4h1v13.5a.5.5 0 001 0V4h.5a.5.5 0 000-1h-5zM5.15 7.65a.5.5 0 11.7.7L4.21 10l1.64 1.65a.5.5 0 01-.7.7l-2-2a.5.5 0 010-.7l2-2z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionLeft20Filled = wrapIcon(rawSvg({}), 'TextParagraphDirectionLeft20Filled');
export default TextParagraphDirectionLeft20Filled;
      