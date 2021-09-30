import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-.78 2.59l-.07.06-2.52 2.51-.04.05-.04.08-.02.06-.02.08v.11l.01.09.03.08.03.06.05.07 2.52 2.51a.5.5 0 00.76-.63l-.05-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.05-.63l-.05-.07a.5.5 0 00-.64-.06z" fill={primaryFill} /><path d="M11.02 17H2.88A1 1 0 003 19h8.17a6.52 6.52 0 01-.15-2z" fill={primaryFill} /><path d="M11.5 15H3a1 1 0 01-.12-2h9.93a6.5 6.5 0 00-1.31 2z" fill={primaryFill} /><path d="M3 11a1 1 0 01-.12-2H21a1 1 0 01.12 2H3z" fill={primaryFill} /><path d="M21 5H2.88A1 1 0 003 7h18.12A1 1 0 0021 5z" fill={primaryFill} /></svg>;
}

const TextGrammarArrowLeft24Filled = wrapIcon(rawSvg({}), 'TextGrammarArrowLeft24Filled');
export default TextGrammarArrowLeft24Filled;
      