import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 17h7.52l-2 2H3a1 1 0 01-.12-2H3z" fill={primaryFill} /><path d="M3 15h7.85a1.75 1.75 0 01-.78-2H2.88A1 1 0 003 15z" fill={primaryFill} /><path d="M3 7h18.12A1 1 0 0021 5H2.88A1 1 0 003 7z" fill={primaryFill} /><path d="M12.72 16.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 11-1.06-1.06l4.5-4.5z" fill={primaryFill} /><path d="M3 9h10a1 1 0 01.12 2H3a1 1 0 01-.12-2H3z" fill={primaryFill} /><path d="M16.5 8c.38 0 .7.28.74.66l.14 1.13a3.25 3.25 0 002.83 2.83l1.13.14a.75.75 0 010 1.48l-1.13.14a3.25 3.25 0 00-2.83 2.83l-.14 1.13a.75.75 0 01-1.48 0l-.14-1.13a3.25 3.25 0 00-2.83-2.83l-1.13-.14a.75.75 0 010-1.48l1.13-.14a3.25 3.25 0 002.83-2.83l.14-1.13A.75.75 0 0116.5 8z" fill={primaryFill} /></svg>;
}

const TextGrammarWand24Filled = wrapIcon(rawSvg({}), 'TextGrammarWand24Filled');
export default TextGrammarWand24Filled;
      