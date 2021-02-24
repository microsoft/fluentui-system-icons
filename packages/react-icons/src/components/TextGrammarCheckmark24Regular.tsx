import * as React from "react";
import { JSX } from "react-jsx";
import { IFluentIconsProps } from '../IFluentIconsProps.types';

const TextGrammarCheckmark24Regular = (iconProps: IFluentIconsProps, props: React.HTMLAttributes<HTMLElement>): JSX.Element => {
  const {
    primaryFill,
    className
  } = iconProps;
  return <svg {...props} width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm2.65 3.15l-4.1 4.09-1.15-1.54a.5.5 0 00-.8.6l1.5 2a.5.5 0 00.75.05l4.5-4.5a.5.5 0 00-.7-.7z" fill={primaryFill} /><path d="M11.02 17H2.65a.75.75 0 00.1 1.5h8.33a6.55 6.55 0 01-.06-1.5z" fill={primaryFill} /><path d="M11.73 14.5H2.75a.75.75 0 01-.1-1.5H12.8c-.43.44-.8.95-1.08 1.5z" fill={primaryFill} /><path d="M21.25 9H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /><path d="M21.25 5H2.65a.75.75 0 00.1 1.5h18.6a.75.75 0 00-.1-1.5z" fill={primaryFill} /></svg>;
};

export default TextGrammarCheckmark24Regular;