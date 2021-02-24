import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarArrowRight20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 10a4.5 4.5 0 110 9 4.5 4.5 0 010-9zm2.35 4.85a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /><path d="M18 5.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h14.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M18 8.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h9.46a5.48 5.48 0 014.58 0h.46c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M9.1 15.5H2.74a.75.75 0 010-1.5h6.27a5.57 5.57 0 00.07 1.5z" fill={primaryFill} /><path d="M9.37 12.5H2.75a.75.75 0 010-1.5h7.5a5.5 5.5 0 00-.88 1.5z" fill={primaryFill} /></svg>;
};

export default TextGrammarArrowRight20Filled;