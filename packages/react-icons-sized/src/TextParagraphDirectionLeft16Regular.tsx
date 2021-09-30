import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 3a2.5 2.5 0 000 5h1V3H9zm2 0v10.5a.5.5 0 01-1 0V9H9a3.5 3.5 0 110-7h4.5a.5.5 0 010 1H13v10.5a.5.5 0 01-1 0V3h-1zM3.85 6.15c.2.2.2.5 0 .7L2.71 8l1.14 1.15a.5.5 0 11-.7.7l-1.5-1.5a.5.5 0 010-.7l1.5-1.5c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionLeft16Regular = wrapIcon(rawSvg({}), 'TextParagraphDirectionLeft16Regular');
export default TextParagraphDirectionLeft16Regular;
      