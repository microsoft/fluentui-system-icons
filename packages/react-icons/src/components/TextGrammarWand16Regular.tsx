import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarWand16Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3a.5.5 0 000 1h11a.5.5 0 000-1h-11z" fill={primaryFill} /><path d="M4.44 12.44l.44-.44H2.5a.5.5 0 000 1h1.58c.08-.2.2-.4.36-.56z" fill={primaryFill} /><path d="M6.97 9.9A1.5 1.5 0 016.1 9H2.5a.5.5 0 000 1h4.38l.1-.1z" fill={primaryFill} /><path d="M7.4 7l.28-.03A.5.5 0 007.5 6h-5a.5.5 0 000 1h4.9z" fill={primaryFill} /><path d="M10.5 5a.5.5 0 01.5.44l.09.73a2 2 0 001.74 1.74l.73.1a.5.5 0 010 .99l-.73.09a2 2 0 00-1.74 1.74l-.1.73a.5.5 0 01-.99 0l-.09-.73a2 2 0 00-1.74-1.74l-.73-.1a.5.5 0 010-.99l.73-.09a2 2 0 001.74-1.74l.1-.73A.5.5 0 0110.5 5zm0 2.47A3 3 0 019.47 8.5a3 3 0 011.03 1.03 3 3 0 011.03-1.03 3 3 0 01-1.03-1.03z" fill={primaryFill} /><path d="M8.85 10.15c.2.2.2.5 0 .7l-3 3a.5.5 0 11-.7-.7l3-3c.2-.2.5-.2.7 0z" fill={primaryFill} /></svg>;
};

export default TextGrammarWand16Regular;