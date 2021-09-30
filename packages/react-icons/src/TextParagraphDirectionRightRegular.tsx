import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.5 3a4 4 0 100 8H13v6.5a.5.5 0 001 0V4h1v13.5a.5.5 0 001 0V4h.5a.5.5 0 000-1h-5zM13 4v6h-1.5a3 3 0 010-6H13zM3.15 7.65c.2-.2.5-.2.7 0l2 2c.2.2.2.5 0 .7l-2 2a.5.5 0 01-.7-.7L4.79 10 3.15 8.35a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionRightRegular = wrapIcon(rawSvg({}), 'TextParagraphDirectionRightRegular');
export default TextParagraphDirectionRightRegular;
      