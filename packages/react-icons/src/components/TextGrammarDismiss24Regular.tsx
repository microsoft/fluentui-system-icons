import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarDismiss24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-2.48 3.02a.5.5 0 000 .71l1.77 1.77-1.76 1.77a.5.5 0 10.7.7l1.77-1.76 1.77 1.77a.5.5 0 10.7-.71l-1.76-1.77 1.77-1.77a.5.5 0 00-.7-.7l-1.78 1.76-1.77-1.77a.5.5 0 00-.7 0z" fill={primaryFill} /><path d="M11.02 17H2.65a.75.75 0 00.1 1.5h8.33a6.55 6.55 0 01-.06-1.5z" fill={primaryFill} /><path d="M11.73 14.5H2.75a.75.75 0 01-.1-1.5H12.8c-.43.44-.8.95-1.08 1.5z" fill={primaryFill} /><path d="M21.25 9H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M21.25 5H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default TextGrammarDismiss24Regular;