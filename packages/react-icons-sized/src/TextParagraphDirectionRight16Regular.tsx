import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 3a2.5 2.5 0 000 5h1V3H9zm2 0v10.5a.5.5 0 01-1 0V9H9a3.5 3.5 0 110-7h4.5a.5.5 0 010 1H13v10.5a.5.5 0 01-1 0V3h-1zM2.15 6.15c.2-.2.5-.2.7 0l1.5 1.5c.2.2.2.5 0 .7l-1.5 1.5a.5.5 0 01-.7-.7L3.29 8 2.15 6.85a.5.5 0 010-.7z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionRight16Regular = wrapIcon(rawSvg({}), 'TextParagraphDirectionRight16Regular');
export default TextParagraphDirectionRight16Regular;
      