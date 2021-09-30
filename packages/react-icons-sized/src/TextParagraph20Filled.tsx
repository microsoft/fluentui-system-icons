import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 7a3.5 3.5 0 100 7h.5v3.5a.5.5 0 001 0V8h1v9.5a.5.5 0 001 0V8h.5a.5.5 0 000-1h-4z" fill={primaryFill} /><path d="M2.5 5a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M9.26 9H2.5a.5.5 0 000 1h6.53c.04-.35.11-.68.23-1z" fill={primaryFill} /><path d="M9.76 13H2.5a.5.5 0 000 1h8.17a4.53 4.53 0 01-.91-1z" fill={primaryFill} /></svg>;
}

const TextParagraph20Filled = wrapIcon(rawSvg({}), 'TextParagraph20Filled');
export default TextParagraph20Filled;
      