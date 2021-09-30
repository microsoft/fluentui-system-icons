import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5h18a1 1 0 01.12 2H3a1 1 0 01-.12-2H3z" fill={primaryFill} /><path d="M3 11a1 1 0 01-.12-2H21a1 1 0 01.12 2H3z" fill={primaryFill} /><path d="M3 15h8.5a6.5 6.5 0 011.31-2H2.88A1 1 0 003 15z" fill={primaryFill} /><path d="M3 17h8.02a6.62 6.62 0 00.15 2H3a1 1 0 01-.12-2H3z" fill={primaryFill} /><path d="M12 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm6.35 2.85l-.07.06a.5.5 0 01-.64-.06l-.05-.07a.5.5 0 01.05-.63L19.3 18H14.4a.5.5 0 01-.41-.5v-.09a.5.5 0 01.5-.41h4.79l-1.65-1.65-.05-.07a.5.5 0 01.76-.63l2.52 2.51.05.07.03.06.03.08.01.09v.1l-.02.1-.02.05-.04.08-.04.05-2.52 2.51z" fill={primaryFill} /></svg>;
}

const TextGrammarArrowRight24Filled = wrapIcon(rawSvg({}), 'TextGrammarArrowRight24Filled');
export default TextGrammarArrowRight24Filled;
      