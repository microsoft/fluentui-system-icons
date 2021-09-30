import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 13.5V3h1v10.5a.5.5 0 001 0V3h.5a.5.5 0 000-1H9a3.5 3.5 0 100 7h1v4.5a.5.5 0 001 0zM3.85 6.85a.5.5 0 10-.7-.7l-1.5 1.5a.5.5 0 000 .7l1.5 1.5a.5.5 0 00.7-.7L2.71 8l1.14-1.15z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionLeft16Filled = wrapIcon(rawSvg({}), 'TextParagraphDirectionLeft16Filled');
export default TextParagraphDirectionLeft16Filled;
      