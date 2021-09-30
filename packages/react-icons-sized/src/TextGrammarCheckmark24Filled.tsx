import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm2.65 3.15l-4.1 4.09-1.15-1.54a.5.5 0 00-.8.6l1.5 2a.5.5 0 00.75.05l4.5-4.5a.5.5 0 00-.7-.7z" fill={primaryFill} /><path d="M11.02 17H2.88A1 1 0 003 19h8.17a6.52 6.52 0 01-.15-2z" fill={primaryFill} /><path d="M11.5 15H3a1 1 0 01-.12-2h9.93a6.5 6.5 0 00-1.31 2z" fill={primaryFill} /><path d="M3 11a1 1 0 01-.12-2H21a1 1 0 01.12 2H3z" fill={primaryFill} /><path d="M21 5H2.88A1 1 0 003 7h18.12A1 1 0 0021 5z" fill={primaryFill} /></svg>;
}

const TextGrammarCheckmark24Filled = wrapIcon(rawSvg({}), 'TextGrammarCheckmark24Filled');
export default TextGrammarCheckmark24Filled;
      