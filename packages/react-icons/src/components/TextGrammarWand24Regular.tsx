import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarWand24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 17h7.78l-1.5 1.5H2.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M2.75 14.5h7.56a1.74 1.74 0 01-.24-1.5H2.65a.75.75 0 00.1 1.5z" fill={primaryFill} /><path d="M12.72 16.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06-1.06l4.5-4.5z" fill={primaryFill} /><path d="M2.75 9h10.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M2.75 5h18.5a.75.75 0 01.1 1.5H2.75a.75.75 0 01-.1-1.5h.1z" fill={primaryFill} /><path d="M16.5 8c.38 0 .7.28.74.66l.14 1.13a3.25 3.25 0 002.83 2.83l1.13.14a.75.75 0 010 1.48l-1.13.14a3.25 3.25 0 00-2.83 2.83l-.14 1.13a.75.75 0 01-1.48 0l-.14-1.13a3.25 3.25 0 00-2.83-2.83l-1.13-.14a.75.75 0 010-1.48l1.13-.14a3.25 3.25 0 002.83-2.83l.14-1.13A.75.75 0 0116.5 8zm0 3.77a4.76 4.76 0 01-1.73 1.73 4.76 4.76 0 011.73 1.73 4.76 4.76 0 011.73-1.73 4.76 4.76 0 01-1.73-1.73z" fill={primaryFill} /></svg>;
};

export default TextGrammarWand24Regular;