import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarArrowRight20Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 5a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M17.5 8a.5.5 0 010 1h-15a.5.5 0 010-1h15z" fill={primaryFill} /><path d="M10.26 11c-.26.3-.48.64-.66 1H2.5a.5.5 0 010-1h7.76z" fill={primaryFill} /><path d="M9 14.5c0 .17 0 .34.02.5H2.5a.5.5 0 010-1h6.52l-.02.5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 10-9 0 4.5 4.5 0 009 0zm-4.15 2.35a.5.5 0 01-.7-.7L15.29 15H12.5a.5.5 0 010-1h2.8l-1.15-1.15a.5.5 0 01.7-.7l2 2a.5.5 0 01.15.35.5.5 0 01-.14.35l-2 2z" fill={primaryFill} /></svg>;
};

export default TextGrammarArrowRight20Regular;