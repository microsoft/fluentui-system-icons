import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-.78 2.59l-.07.06-2.52 2.51-.04.05-.04.08-.02.06-.02.08v.11l.01.09.03.08.03.06.05.07 2.52 2.51a.5.5 0 00.76-.63l-.05-.07L15.7 18h4.79a.5.5 0 00.5-.41v-.09a.5.5 0 00-.41-.5h-4.88l1.65-1.65a.5.5 0 00.05-.63l-.05-.07a.5.5 0 00-.64-.06z" fill={primaryFill} /><path d="M11.02 17H2.65a.75.75 0 00.1 1.5h8.33a6.55 6.55 0 01-.06-1.5z" fill={primaryFill} /><path d="M11.73 14.5H2.75a.75.75 0 01-.1-1.5H12.8c-.43.44-.8.95-1.08 1.5z" fill={primaryFill} /><path d="M21.25 9H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M21.25 5H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
}

const TextGrammarArrowLeft24Regular = wrapIcon(rawSvg({}), 'TextGrammarArrowLeft24Regular');
export default TextGrammarArrowLeft24Regular;
      