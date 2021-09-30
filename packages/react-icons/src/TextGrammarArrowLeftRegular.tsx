import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M17.5 8a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M10.26 11c-.26.3-.48.64-.66 1H2.5a.5.5 0 010-1h7.76z" fill={primaryFill} /><path d="M9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 010-1h6.52l-.02.5z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm4.15-2.35a.5.5 0 01.7.7L13.71 14h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 01-.15-.35.5.5 0 01.14-.35l2-2z" fill={primaryFill} /></svg>;
}

const TextGrammarArrowLeftRegular = wrapIcon(rawSvg({}), 'TextGrammarArrowLeftRegular');
export default TextGrammarArrowLeftRegular;
      