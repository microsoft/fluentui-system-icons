import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 4.5a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2.75 7.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z" fill={primaryFill} /><path d="M2.75 10.5a.75.75 0 000 1.5h6.63a1.5 1.5 0 01-.28-1.5H2.75z" fill={primaryFill} /><path d="M2.75 13.5h6.63L7.88 15H2.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M14.5 7.44a.5.5 0 00-1 0l-.1.79a2.5 2.5 0 01-2.17 2.18l-.8.1a.5.5 0 000 .99l.8.1a2.5 2.5 0 012.18 2.17l.1.8a.5.5 0 00.99 0l.1-.8a2.5 2.5 0 012.17-2.18l.8-.1a.5.5 0 000-.99l-.8-.1a2.5 2.5 0 01-2.18-2.17l-.1-.8z" fill={primaryFill} /><path d="M11.85 13.15c.2.2.2.5 0 .7l-4 4a.5.5 0 01-.7-.7l4-4c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
}

const TextGrammarWandFilled = wrapIcon(rawSvg({}), 'TextGrammarWandFilled');
export default TextGrammarWandFilled;
      