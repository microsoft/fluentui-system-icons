import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 8a4.25 4.25 0 000 8.5h.5v4.75a.75.75 0 001.5 0V9.5h1v11.75a.75.75 0 001.5 0V9.5h.25a.75.75 0 000-1.5H16.5zm0 1.5h.5V15h-.5a2.75 2.75 0 110-5.5z" fill={primaryFill} /><path d="M2.75 5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2.75 10a.75.75 0 000 1.5h8.55c.08-.53.23-1.03.46-1.5H2.75z" fill={primaryFill} /><path d="M12.03 15H2.75a.75.75 0 000 1.5h10.67a5.28 5.28 0 01-1.4-1.5z" fill={primaryFill} /></svg>;
}

const TextParagraph24Regular = wrapIcon(rawSvg({}), 'TextParagraph24Regular');
export default TextParagraph24Regular;
      