import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 3a4 4 0 100 8H13v6.5a.5.5 0 001 0V4h1v13.5a.5.5 0 001 0V4h.5a.5.5 0 000-1h-5zM13 4v6h-1.5a3 3 0 010-6H13z" fill={primaryFill} /><path d="M3.15 5.65c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L4.79 8 3.15 6.35a.5.5 0 010-.7z" fill={primaryFill} /><path d="M5.85 11.65a.5.5 0 00-.7 0l-2 2a.5.5 0 000 .7l2 2a.5.5 0 00.7-.7L4.21 14l1.64-1.65a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const TextParagraphDirection20Regular = wrapIcon(rawSvg({}), 'TextParagraphDirection20Regular');
export default TextParagraphDirection20Regular;
      