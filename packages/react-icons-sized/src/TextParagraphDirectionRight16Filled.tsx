import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 13.5V3h1v10.5a.5.5 0 001 0V3h.5a.5.5 0 000-1H9a3.5 3.5 0 100 7h1v4.5a.5.5 0 001 0zM2.85 6.15a.5.5 0 10-.7.7L3.29 8 2.15 9.15a.5.5 0 10.7.7l1.5-1.5a.5.5 0 000-.7l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const TextParagraphDirectionRight16Filled = wrapIcon(rawSvg({}), 'TextParagraphDirectionRight16Filled');
export default TextParagraphDirectionRight16Filled;
      