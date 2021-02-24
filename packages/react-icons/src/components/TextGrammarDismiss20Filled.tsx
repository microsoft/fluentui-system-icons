import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarDismiss20Filled = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 5.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h14.5c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M18 8.75a.75.75 0 00-.75-.75H2.75a.75.75 0 100 1.5h9.46a5.48 5.48 0 014.58 0h.46c.41 0 .75-.34.75-.75z" fill={primaryFill} /><path d="M9.1 15.5H2.74a.75.75 0 010-1.5h6.27a5.57 5.57 0 00.07 1.5z" fill={primaryFill} /><path d="M9.37 12.5H2.75a.75.75 0 010-1.5h7.5a5.5 5.5 0 00-.88 1.5z" fill={primaryFill} /><path d="M19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5.7l1.15 1.15a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14z" fill={primaryFill} /></svg>;
};

export default TextGrammarDismiss20Filled;