import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 12.25C12.25 9.9 14.15 8 16.5 8h4.75a.75.75 0 010 1.5H21v11.75a.75.75 0 01-1.5 0V9.5h-1v11.75a.75.75 0 01-1.5 0V16.5h-.5a4.25 4.25 0 01-4.25-4.25z" fill={primaryFill} /><path d="M3 5a1 1 0 000 2h18a1 1 0 100-2H3z" fill={primaryFill} /><path d="M11.76 10H3a1 1 0 100 2h8.26c.03-.71.2-1.39.5-2z" fill={primaryFill} /><path d="M12.03 15H3a1 1 0 100 2h11.26a5.27 5.27 0 01-2.23-2z" fill={primaryFill} /></svg>;
}

const TextParagraph24Filled = wrapIcon(rawSvg({}), 'TextParagraph24Filled');
export default TextParagraph24Filled;
      