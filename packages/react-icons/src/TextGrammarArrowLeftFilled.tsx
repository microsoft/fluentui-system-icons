import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.25 5a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5h14.5z" fill={primaryFill} /><path d="M17.25 8a.75.75 0 010 1.5h-.46a5.48 5.48 0 00-4.58 0H2.75a.75.75 0 010-1.5h14.5z" fill={primaryFill} /><path d="M2.75 15.5h6.34a5.53 5.53 0 01-.07-1.5H2.75a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M2.75 12.5h6.62a5.5 5.5 0 01.89-1.5H2.75a.75.75 0 000 1.5z" fill={primaryFill} /><path d="M10 14.5a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm4.15-2.35a.5.5 0 01.7.7L13.71 14h2.79a.5.5 0 010 1h-2.8l1.15 1.15a.5.5 0 01-.7.7l-2-2a.5.5 0 01-.15-.35.5.5 0 01.14-.35l2-2z" fill={primaryFill} /></svg>;
}

const TextGrammarArrowLeftFilled = wrapIcon(rawSvg({}), 'TextGrammarArrowLeftFilled');
export default TextGrammarArrowLeftFilled;
      